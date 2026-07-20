// =====================================================
// Code.gs — Google Apps Script для свадьбы Данияр & Сати
// Этот скрипт принимает данные из RSVP-формы
// и записывает их в Google Таблицу.
// =====================================================

// ── Основной обработчик POST-запроса ──────────────────
function doPost(e) {
  try {
    // Парсим JSON из тела запроса
    const data = JSON.parse(e.postData.contents);

    // Получаем активную таблицу и первый лист
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Если таблица пустая — добавляем заголовки
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Дата и время отправки',
        'ФИО',
        'Роль / Кем приходится',
        'Ответ (присутствие)',
      ]);

      // Форматируем заголовок
      const headerRange = sheet.getRange(1, 1, 1, 4);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0d9d9');
      headerRange.setFontColor('#3d2f2f');
      sheet.setFrozenRows(1);
    }

    // Записываем строку с данными
    sheet.appendRow([
      data.timestamp  || new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' }),
      data.fullName   || '',
      data.relation   || '',
      data.attendance || '',
    ]);

    // Автоподбор ширины столбцов
    sheet.autoResizeColumns(1, 4);

    // Возвращаем успешный ответ
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // Логируем ошибку и возвращаем ответ с описанием
    console.error('RSVP Script Error:', err);
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Обработчик GET (для проверки работоспособности) ───
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status:  'ok',
      message: 'RSVP-скрипт для Данияр & Сати работает корректно!'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
