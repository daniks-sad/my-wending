/* ======================================================
   script.js — Wedding Site
   Данияр & Сати | 6 сентября 2026
   ====================================================== */

// ── CONFIG ────────────────────────────────────────────
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxrlE-BCH-xs5ZxIfHnBjicCFogr0fYxndOKF6YXdkOBGZgO6LMDjEPgxgI0j9hcB9q/exec';

const WEDDING_DATE = new Date('2026-09-06T17:00:00+06:00');

// ══════════════════════════════════════════════════════
// TRANSLATIONS — Словарь переводов (ru / kk)
// ══════════════════════════════════════════════════════
const translations = {
  ru: {
    nav_timer: 'Таймер',
    nav_story: 'История',
    nav_details: 'Детали',
    nav_gallery: 'Галерея',
    hero_invite: 'Приглашаем вас разделить нашу радость',
    hero_date: '6 сентября 2026 года',
    hero_city: 'Астана, Казахстан',
    hero_cta: 'Подтвердить присутствие',
    cd_label: 'До торжества осталось',
    cd_days: 'Дней',
    cd_hours: 'Часов',
    cd_minutes: 'Минут',
    cd_seconds: 'Секунд',
    cd_sub: '6 сентября 2026, 17:00',
    story_label: 'Наша история',
    story_title: 'Как всё началось',
    story1_h: 'Знакомство',
    story1_p: 'Всё началось с одного взгляда и улыбки, которую невозможно забыть. Мы встретились там, где меньше всего ожидали, и с тех пор наши пути неразлучны.',
    story2_h: 'Путешествие вместе',
    story2_p: 'Год, проведённый вместе — это страницы нашей книги, наполненной смехом, приключениями и бесчисленными воспоминаниями.',
    story3_h: 'Предложение',
    story3_p: 'В тот вечер, когда небо было усыпано звёздами, Данияр произнёс три главных слова, и Сати сказала «да». Этот момент мы будем помнить вечно.',
    det_label: 'Важная информация',
    det_title: 'Детали торжества',
    det_date_h: 'Дата',
    det_date_p: '6 сентября 2026 года',
    det_date_sub: 'Воскресенье',
    det_time_h: 'Время',
    det_time_p: 'Начало в 17:00',
    det_time_sub: 'Просим не опаздывать',
    det_place_h: 'Место',
    det_place_p: 'Ресторан «Ғажайып»',
    det_place_sub: 'пр. Магжана Жумабаева, 26, Астана',
    det_map_link: 'Открыть в 2ГИС →',
    det_dress_h: 'Дресс-код',
    det_dress_p: 'Нарядный, праздничный',
    det_dress_sub: 'Пастельные и светлые тона приветствуются',
    venue_open: 'Открыть в 2ГИС',
    venue_name: '📍 Ресторан «Ғажайып» — пр. Магжана Жумабаева, 26, Астана',
    venue_btn: 'Открыть в 2ГИС',
    gal_label: 'Фотогалерея',
    gal_title: 'Наши воспоминания',
    rsvp_label: 'Подтверждение',
    rsvp_title: 'Вы придёте?',
    rsvp_desc_before: 'Пожалуйста, заполните форму ниже до ',
    rsvp_deadline: '10 августа 2026',
    rsvp_desc_after: ', чтобы мы могли подготовиться к вашему приезду.',
    form_name_label: 'ФИО',
    form_name_ph: 'Иванов Иван Иванович',
    form_rel_label: 'Кем вы приходитесь молодожёнам?',
    form_rel_ph: 'Например: родственник невесты, друг жениха...',
    form_attend_label: 'Сможете ли вы присутствовать на свадьбе?',
    form_yes: ' Да, обязательно буду!',
    form_maybe: ' Ещё не знаю',
    form_no: ' К сожалению, не смогу',
    form_submit: 'Отправить',
    err_name_req: 'Пожалуйста, введите ваше ФИО',
    err_name_short: 'ФИО слишком короткое',
    err_rel_req: 'Пожалуйста, укажите вашу роль',
    err_attend_req: 'Пожалуйста, выберите один из вариантов',
    success_h: 'Спасибо!',
    success_p: 'Мы получили ваш ответ. До встречи на нашем торжестве!',
    footer_quote: '«Любовь долготерпит, милосердствует, не завидует, не превозносится»',
    footer_credits: 'Сделано с ❤️ для нашего особого дня',
  },

  kk: {
    nav_timer: 'Таймер',
    nav_story: 'Тарих',
    nav_details: 'Мәліметтер',
    nav_gallery: 'Галерея',
    hero_invite: 'Қуанышымызға ортақтасуға шақырамыз',
    hero_date: '2026 жылдың 6 қыркүйегі',
    hero_city: 'Астана, Қазақстан',
    hero_cta: 'Қатысуды растау',
    cd_label: 'Мерекеге дейін қалды',
    cd_days: 'Күн',
    cd_hours: 'Сағат',
    cd_minutes: 'Минут',
    cd_seconds: 'Секунд',
    cd_sub: '2026 жылдың 6 қыркүйегі, 17:00',
    story_label: 'Біздің тарихымыз',
    story_title: 'Бәрі қалай басталды',
    story1_h: 'Танысу',
    story1_p: 'Бәрі бір қарасқа және ұмыта алмайтын жымиысқа байланысты басталды. Біз ең аз күткен жерде кездестік және сол сәттен бері жолымыз бөлінбейді.',
    story2_h: 'Бірге саяхат',
    story2_p: 'Бірге өткізген жылдар — күлкімен, оқиғалармен және санаусыз естеліктермен толы кітабымыздың беттері.',
    story3_h: 'Ұсыныс',
    story3_p: 'Аспан жұлдызға толы сол кеште Данияр үш маңызды сөзді айтты, ал Сати «иә» деді. Бұл сәтті біз мәңгі есте сақтаймыз.',
    det_label: 'Маңызды ақпарат',
    det_title: 'Мереке мәліметтері',
    det_date_h: 'Күні',
    det_date_p: '2026 жылдың 6 қыркүйегі',
    det_date_sub: 'Жексенбі',
    det_time_h: 'Уақыты',
    det_time_p: '17:00-де басталады',
    det_time_sub: 'Кешікпеуіңізді өтінеміз',
    det_place_h: 'Орны',
    det_place_p: '«Ғажайып» мейрамханасы',
    det_place_sub: 'Мағжан Жұмабаев даңғылы, 26, Астана',
    det_map_link: '2ГИС-те ашу →',
    det_dress_h: 'Киім үлгісі',
    det_dress_p: 'Сәнді, мерекелік',
    det_dress_sub: 'Пастельді және ашық түстер қошемет',
    venue_open: '2ГИС-те ашу',
    venue_name: '📍 «Ғажайып» мейрамханасы — Мағжан Жұмабаев даңғылы, 26, Астана',
    venue_btn: '2ГИС-те ашу',
    gal_label: 'Фотогалерея',
    gal_title: 'Біздің естеліктеріміз',
    rsvp_label: 'Растау',
    rsvp_title: 'Сіз келесіз бе?',
    rsvp_desc_before: 'Өтінемін, төмендегі форманы ',
    rsvp_deadline: '2026 жылдың 10 тамызына дейін',
    rsvp_desc_after: ' толтырыңыз, біз сіздің келуіңізге дайындалайық.',
    form_name_label: 'Аты-жөні',
    form_name_ph: 'Иванов Иван Иванович',
    form_rel_label: 'Сіз жас жұбайларға кімсіз?',
    form_rel_ph: 'Мысалы: қалыңдықтың туысы, күйеудің досы...',
    form_attend_label: 'Тойға қатыса аласыз ба?',
    form_yes: ' Иә, міндетті түрде боламын!',
    form_maybe: ' Әлі білмеймін',
    form_no: ' Өкінішке орай, бола алмаймын',
    form_submit: 'Жіберу',
    err_name_req: 'Өтінемін, аты-жөніңізді енгізіңіз',
    err_name_short: 'Аты-жөні тым қысқа',
    err_rel_req: 'Өтінемін, рөліңізді көрсетіңіз',
    err_attend_req: 'Өтінемін, бір нұсқаны таңдаңыз',
    success_h: 'Рахмет!',
    success_p: 'Жауабыңызды алдық. Тойда кездескенше!',
    footer_quote: '«Махаббат шыдамды, мейірімді, ол қызғанбайды, мақтанбайды»',
    footer_credits: 'Ерекше күніміз үшін ❤️ жасалды',
  },
};

// ── I18N ENGINE ───────────────────────────────────────
let currentLang = localStorage.getItem('wedding_lang') || 'kk';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('wedding_lang', lang);
  document.documentElement.lang = lang;

  // Обновляем textContent всех [data-i18n] элементов
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Обновляем placeholder у инпутов
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Синхронизируем все кнопки языка (десктоп + мобильный)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Вешаем обработчики на все кнопки языка
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// Применяем язык при загрузке
applyLang(currentLang);

// ── NAVIGATION: transparent → frosted on scroll ───────
(function () {
  const nav = document.getElementById('navbar');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ── MOBILE MENU ───────────────────────────────────────
(function () {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close on nav link click (not lang buttons)
  menu.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    })
  );
})();

// ── COUNTDOWN TIMER ───────────────────────────────────
(function () {
  const $days = document.getElementById('cd-days');
  const $hours = document.getElementById('cd-hours');
  const $minutes = document.getElementById('cd-minutes');
  const $seconds = document.getElementById('cd-seconds');

  let prevValues = {};

  function pad(n) { return String(Math.max(0, n)).padStart(2, '0'); }

  function tick(el, value) {
    const padded = pad(value);
    if (prevValues[el.id] !== padded) {
      el.classList.remove('tick');
      void el.offsetWidth;
      el.classList.add('tick');
      prevValues[el.id] = padded;
    }
    el.textContent = padded;
  }

  function update() {
    const diff = WEDDING_DATE - Date.now();
    if (diff <= 0) {
      [$days, $hours, $minutes, $seconds].forEach(el => (el.textContent = '00'));
      clearInterval(timer);
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    tick($days, days);
    tick($hours, hours);
    tick($minutes, minutes);
    tick($seconds, seconds);
  }

  update();
  const timer = setInterval(update, 1000);
})();

// ── SCROLL REVEAL ─────────────────────────────────────
(function () {
  const targets = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.reveal')
          );
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => observer.observe(el));
})();

// ── RSVP FORM ─────────────────────────────────────────
(function () {
  const form = document.getElementById('rsvp-form');
  const submitBtn = document.getElementById('submit-btn');
  const successEl = document.getElementById('rsvp-success');

  if (!form) return;

  function t(key) { return (translations[currentLang] || translations.ru)[key] || ''; }

  function setError(inputId, errorId, msg) {
    const input = document.getElementById(inputId);
    const err = document.getElementById(errorId);
    if (input) input.classList.toggle('invalid', !!msg);
    if (err) err.textContent = msg || '';
    return !!msg;
  }

  function validate() {
    let hasError = false;

    const name = document.getElementById('full-name').value.trim();
    if (!name) {
      hasError = setError('full-name', 'err-name', t('err_name_req')) || hasError;
    } else if (name.length < 3) {
      hasError = setError('full-name', 'err-name', t('err_name_short')) || hasError;
    } else {
      setError('full-name', 'err-name', '');
    }

    const relation = document.getElementById('relation').value.trim();
    if (!relation) {
      hasError = setError('relation', 'err-relation', t('err_rel_req')) || hasError;
    } else {
      setError('relation', 'err-relation', '');
    }

    const attendance = form.querySelector('input[name="attendance"]:checked');
    const radioGroup = form.querySelector('.radio-group');
    const errAtt = document.getElementById('err-attendance');
    if (!attendance) {
      if (radioGroup) radioGroup.classList.add('invalid');
      if (errAtt) errAtt.textContent = t('err_attend_req');
      hasError = true;
    } else {
      if (radioGroup) radioGroup.classList.remove('invalid');
      if (errAtt) errAtt.textContent = '';
    }

    return !hasError;
  }

  form.querySelectorAll('input[type="text"]').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('invalid');
      const errId = 'err-' + (el.id === 'full-name' ? 'name' : 'relation');
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = '';
    });
  });

  form.querySelectorAll('input[type="radio"]').forEach(el => {
    el.addEventListener('change', () => {
      const rg = form.querySelector('.radio-group');
      if (rg) rg.classList.remove('invalid');
      const errAtt = document.getElementById('err-attendance');
      if (errAtt) errAtt.textContent = '';
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!validate()) return;

    const formData = {
      fullName: document.getElementById('full-name').value.trim(),
      relation: document.getElementById('relation').value.trim(),
      attendance: form.querySelector('input[name="attendance"]:checked').value,
      timestamp: new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' }),
    };

    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('https://script.google.com/macros/s/AKfycbxrlE-BCH-xs5ZxIfHnBjicCFogr0fYxndOKF6YXdkOBGZgO6LMDjEPgxgI0j9hcB9q/exec')) {
      await new Promise(r => setTimeout(r, 1200));
      showSuccess();
      return;
    }

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      showSuccess();
    } catch (err) {
      console.error('RSVP send error:', err);
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      alert(currentLang === 'kk'
        ? 'Жіберу кезінде қате орын алды. Қайтадан көріңіз.'
        : 'Произошла ошибка при отправке. Пожалуйста, попробуйте ещё раз.');
    }
  });

  function showSuccess() {
    form.style.opacity = '0';
    form.style.transform = 'translateY(-16px)';
    form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    setTimeout(() => {
      form.hidden = true;
      successEl.hidden = false;
    }, 400);
  }
})();

// ── GALLERY LIGHTBOX ──────────────────────────────────
(function () {
  const items = document.querySelectorAll('.gallery-item img');
  if (!items.length) return;

  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="lb-bg"></div>
    <button class="lb-close" aria-label="Закрыть">✕</button>
    <img class="lb-img" src="" alt="" />
  `;
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:999;display:none;
    align-items:center;justify-content:center;
  `;
  Object.assign(overlay.querySelector('.lb-bg').style, {
    position: 'absolute', inset: '0',
    background: 'rgba(30,10,10,0.82)',
    backdropFilter: 'blur(8px)',
  });
  const lbClose = overlay.querySelector('.lb-close');
  Object.assign(lbClose.style, {
    position: 'absolute', top: '20px', right: '24px',
    background: 'none', border: '1.5px solid rgba(255,255,255,0.5)',
    borderRadius: '50%', width: '40px', height: '40px',
    color: '#fff', fontSize: '1rem', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: '2',
  });
  const lbImg = overlay.querySelector('.lb-img');
  Object.assign(lbImg.style, {
    maxWidth: '90vw', maxHeight: '85vh',
    objectFit: 'contain', borderRadius: '12px',
    position: 'relative', zIndex: '2',
    boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
    transition: 'opacity 0.3s ease',
  });
  document.body.appendChild(overlay);

  const open = src => {
    lbImg.style.opacity = '0';
    lbImg.src = src;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lbImg.onload = () => (lbImg.style.opacity = '1');
  };
  const close = () => {
    overlay.style.display = 'none';
    lbImg.src = '';
    document.body.style.overflow = '';
  };

  items.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => open(img.src));
  });

  lbClose.addEventListener('click', close);
  overlay.querySelector('.lb-bg').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

// ── AUDIO PLAYER ──────────────────────────────────────
(function () {
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  const iconOn = document.getElementById('music-icon-on');
  const iconOff = document.getElementById('music-icon-off');

  if (!musicBtn || !bgMusic) return;

  // Set initial volume
  bgMusic.volume = 0.5;

  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      iconOn.style.display = 'none';
      iconOff.style.display = 'block';
    } else {
      bgMusic.play().catch(err => console.log('Audio play error:', err));
      iconOn.style.display = 'block';
      iconOff.style.display = 'none';
    }
    isPlaying = !isPlaying;
  });
})();

