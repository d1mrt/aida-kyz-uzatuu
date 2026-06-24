const weddingDate = new Date("2026-07-22T18:00:00+06:00");

const countdownEls = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const distance = weddingDate.getTime() - Date.now();
  const safeDistance = Math.max(distance, 0);

  const days = Math.floor(safeDistance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDistance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeDistance / (1000 * 60)) % 60);
  const seconds = Math.floor((safeDistance / 1000) % 60);

  countdownEls.days.textContent = pad(days);
  countdownEls.hours.textContent = pad(hours);
  countdownEls.minutes.textContent = pad(minutes);
  countdownEls.seconds.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

let currentLanguage = "ky";

const translations = {
  ky: {
    documentTitle: "Аида - кыз узатуу",
    pageLabel: "Аиданын кыз узатуу чакыруусу",
    languageLabel: "Тил тандоо",
    introSubtitle: "Кыз узатуу",
    messageTitle: "Урматтуу<br />коноктор!",
    messageFirst:
      "Бул күн биз үчүн өзгөчө маанилүү. Биз бул кубанычтуу көз ирмемди эң жакын, сүйүктүү адамдардын жана досторубуздун курчоосунда өткөргүбүз келет.",
    dateTitle: "Той<br />салтанаты",
    dateText: "22 июль 2026 жыл",
    timeText: "саат 18:00",
    calendarLabel: "Июль айынын календары",
    venueTitle: "Мекен-жайыбыз:",
    venueName: "«Тумар»",
    venueAddress: "тойканасы, Ош шаары",
    mapText: "Картадан<br />кароо",
    countdownTitle: "Тойго чейин:",
    timeParts: ["күн", "саат", "мүнөт", "секунд"],
    rsvpTitle: "Катышуу",
    rsvpIntro: "Катышууңузду WhatsApp аркылуу ырастап коюуну өтүнөбүз",
    nameLabel: "Аты-жөнүңүздү жазыңыз",
    namePlaceholder: "Мисалы: Айбек-Айдана",
    guestCountLabel: "Конок саны",
    guestOptions: ["1 конок", "2 конок", "3 конок", "4 конок", "5 же андан көп"],
    attendanceLegend: "Катышууңуз",
    attendanceOptions: [
      "Албетте, келем!",
      "Тилекке каршы, келе албайм!",
    ],
    wishLabel: "Каалоо-тилек, билдирүү",
    wishPlaceholder: "Каалоо-тилегиңизди же билдирүүңүздү жазыңыз",
    submitText: "WhatsApp аркылуу жөнөтүү",
    closingText:
      "Терең урматтоо менен,<br />Аиданын үй-бүлөсү<br /><br />Биз сизди майрамыбызда көрүүгө абдан кубанычтабыз!",
    validationText: "Атыңызды, конок санын жана катышууңузду белгилеп коюңуз.",
    successText: "WhatsApp ачылды. Даяр билдирүүнү жөнөтүп коюңуз.",
    popupText: "WhatsApp ачылбаса, браузердин popup уруксатын текшериңиз.",
    whatsAppLines: {
      greeting: "Саламатсыздарбы!",
      title: "Аиданын кыз узатуу тоюна жооп:",
      name: "Аты-жөнүм",
      attendance: "Катышуум",
      guestCount: "Конок саны",
      wish: "Каалоо-тилек/билдирүү",
    },
  },
  ru: {
    documentTitle: "Аида - проводы невесты",
    pageLabel: "Приглашение на проводы невесты Аиды",
    languageLabel: "Выбор языка",
    introSubtitle: "Проводы невесты",
    messageTitle: "Уважаемые<br />гости!",
    messageFirst:
      "Этот день особенно важен для нас. Мы хотим провести этот радостный момент в кругу самых близких, любимых людей и друзей.",
    dateTitle: "Торжество",
    dateText: "22 июля 2026 года",
    timeText: "в 18:00",
    calendarLabel: "Календарь июля",
    venueTitle: "Адрес:",
    venueName: "«Тумар»",
    venueAddress: "тойкана, город Ош",
    mapText: "Открыть<br />карту",
    countdownTitle: "До торжества:",
    timeParts: ["дней", "часов", "минут", "секунд"],
    rsvpTitle: "Участие",
    rsvpIntro: "Просим подтвердить ваше участие через WhatsApp",
    nameLabel: "Введите имя и фамилию",
    namePlaceholder: "Например: Айбек-Айдана",
    guestCountLabel: "Количество гостей",
    guestOptions: ["1 гость", "2 гостя", "3 гостя", "4 гостя", "5 и более"],
    attendanceLegend: "Ваше участие",
    attendanceOptions: [
      "Конечно, приду!",
      "К сожалению, не смогу прийти!",
    ],
    wishLabel: "Пожелание, сообщение",
    wishPlaceholder: "Напишите пожелание или сообщение",
    submitText: "Отправить через WhatsApp",
    closingText:
      "С глубоким уважением,<br />семья Аиды<br /><br />Будем очень рады видеть вас на нашем празднике!",
    validationText: "Введите имя, количество гостей и отметьте участие.",
    successText: "WhatsApp открыт. Отправьте готовое сообщение.",
    popupText: "Если WhatsApp не открылся, проверьте разрешение popup в браузере.",
    whatsAppLines: {
      greeting: "Здравствуйте!",
      title: "Ответ на проводы невесты Аиды:",
      name: "Имя и фамилия",
      attendance: "Участие",
      guestCount: "Количество гостей",
      wish: "Пожелание/сообщение",
    },
  },
  tr: {
    documentTitle: "Aida - gelin uğurlama",
    pageLabel: "Aida'nın gelin uğurlama davetiyesi",
    languageLabel: "Dil seçimi",
    introSubtitle: "Gelin uğurlama",
    messageTitle: "Değerli<br />misafirler!",
    messageFirst:
      "Bu gün bizim için çok özel ve anlamlı. Bu mutlu anı en yakınlarımız, sevdiklerimiz ve dostlarımızın arasında geçirmek istiyoruz.",
    dateTitle: "Tören",
    dateText: "22 Temmuz 2026",
    timeText: "saat 18:00",
    calendarLabel: "Temmuz takvimi",
    venueTitle: "Adresimiz:",
    venueName: "«Tumar»",
    venueAddress: "düğün salonu, Oş şehri",
    mapText: "Haritayı<br />aç",
    countdownTitle: "Törene kalan:",
    timeParts: ["gün", "saat", "dakika", "saniye"],
    rsvpTitle: "Katılım",
    rsvpIntro: "Katılımınızı WhatsApp üzerinden onaylamanızı rica ederiz",
    nameLabel: "Adınızı ve soyadınızı yazınız",
    namePlaceholder: "Örnek: Aybek-Aydana",
    guestCountLabel: "Misafir sayısı",
    guestOptions: ["1 misafir", "2 misafir", "3 misafir", "4 misafir", "5 ve üzeri"],
    attendanceLegend: "Katılımınız",
    attendanceOptions: [
      "Elbette geleceğim!",
      "Maalesef gelemeyeceğim!",
    ],
    wishLabel: "Dilek, mesaj",
    wishPlaceholder: "Dileğinizi veya mesajınızı yazınız",
    submitText: "WhatsApp ile gönder",
    closingText:
      "Derin saygılarımızla,<br />Aida'nın ailesi<br /><br />Sizi bayramımızda görmekten büyük mutluluk duyarız!",
    validationText: "Adınızı, misafir sayısını ve katılım durumunuzu belirtiniz.",
    successText: "WhatsApp açıldı. Hazır mesajı gönderebilirsiniz.",
    popupText: "WhatsApp açılmazsa tarayıcınızın popup iznini kontrol ediniz.",
    whatsAppLines: {
      greeting: "Merhaba!",
      title: "Aida'nın gelin uğurlama töreni için cevap:",
      name: "Ad soyad",
      attendance: "Katılım",
      guestCount: "Misafir sayısı",
      wish: "Dilek/mesaj",
    },
  },
  en: {
    documentTitle: "Aida - bride send-off",
    pageLabel: "Invitation to Aida's bride send-off",
    languageLabel: "Language selection",
    introSubtitle: "Bride send-off",
    messageTitle: "Dear<br />guests!",
    messageFirst:
      "This day is especially meaningful to us. We would love to share this joyful moment surrounded by our closest loved ones and friends.",
    dateTitle: "Celebration",
    dateText: "July 22, 2026",
    timeText: "at 18:00",
    calendarLabel: "July calendar",
    venueTitle: "Venue:",
    venueName: "«Tumar»",
    venueAddress: "banquet hall, Osh city",
    mapText: "Open<br />map",
    countdownTitle: "Until the celebration:",
    timeParts: ["days", "hours", "minutes", "seconds"],
    rsvpTitle: "RSVP",
    rsvpIntro: "Please confirm your attendance via WhatsApp",
    nameLabel: "Enter your full name",
    namePlaceholder: "Example: Aybek-Aydana",
    guestCountLabel: "Number of guests",
    guestOptions: ["1 guest", "2 guests", "3 guests", "4 guests", "5 or more"],
    attendanceLegend: "Your attendance",
    attendanceOptions: [
      "Of course, I will come!",
      "Unfortunately, I cannot come!",
    ],
    wishLabel: "Wish or message",
    wishPlaceholder: "Write your wish or message",
    submitText: "Send via WhatsApp",
    closingText:
      "With deep respect,<br />Aida's family<br /><br />We will be very happy to see you at our celebration!",
    validationText: "Please enter your name, guest count, and attendance choice.",
    successText: "WhatsApp opened. Please send the prepared message.",
    popupText: "If WhatsApp did not open, please check your browser popup permission.",
    whatsAppLines: {
      greeting: "Hello!",
      title: "RSVP for Aida's bride send-off:",
      name: "Full name",
      attendance: "Attendance",
      guestCount: "Number of guests",
      wish: "Wish/message",
    },
  },
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = value;
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  const text = translations[language];

  document.documentElement.lang = language;
  document.title = text.documentTitle;
  document.querySelector(".invitation").setAttribute("aria-label", text.pageLabel);
  document.querySelector(".language-switch").setAttribute("aria-label", text.languageLabel);

  setText(".intro p", text.introSubtitle);
  setHtml(".message-block h2", text.messageTitle);
  setText(".message-block p:nth-of-type(1)", text.messageFirst);
  setHtml(".date-block h2", text.dateTitle);
  setText(".date-block p:nth-of-type(1)", text.dateText);
  setText(".date-block p:nth-of-type(2)", text.timeText);
  document.querySelector(".calendar").setAttribute("aria-label", text.calendarLabel);
  setText(".venue-block h2", text.venueTitle);
  setText(".venue-block h3", text.venueName);
  setText(".venue-block p", text.venueAddress);
  setHtml(".map-button", text.mapText);
  setText(".countdown-block h2", text.countdownTitle);
  document.querySelectorAll(".time-part span").forEach((item, index) => {
    item.textContent = text.timeParts[index];
  });
  setText(".rsvp-block h2", text.rsvpTitle);
  setText(".rsvp-block > p", text.rsvpIntro);
  setText('label[for="guestName"]', text.nameLabel);
  document.getElementById("guestName").placeholder = text.namePlaceholder;
  setText('label[for="guestCount"]', text.guestCountLabel);
  document.querySelectorAll("#guestCount option").forEach((option, index) => {
    option.textContent = text.guestOptions[index];
  });
  setText("fieldset legend", text.attendanceLegend);
  document.querySelectorAll('input[name="attendance"]').forEach((input, index) => {
    input.value = text.attendanceOptions[index];
    input.nextElementSibling.textContent = text.attendanceOptions[index];
  });
  setText('label[for="wishText"]', text.wishLabel);
  document.getElementById("wishText").placeholder = text.wishPlaceholder;
  setText(".submit-button", text.submitText);
  setHtml(".closing-block p", text.closingText);
  formStatus.textContent = "";

  document.querySelectorAll(".language-switch button").forEach((item) => {
    item.classList.toggle("active", item.dataset.lang === language);
  });
}

const form = document.getElementById("rsvpForm");
const formStatus = document.getElementById("formStatus");
const whatsAppPhone = "996709065082";

document.querySelectorAll(".language-switch button").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const text = translations[currentLanguage];
  const guestName = String(formData.get("guestName") || "").trim();
  const guestCount = formData.get("guestCount");
  const guestCountLabel = document.querySelector("#guestCount option:checked").textContent.trim();
  const attendance = formData.get("attendance");
  const wishText = String(formData.get("wishText") || "").trim();

  if (!guestName || !guestCount || !attendance) {
    formStatus.textContent = text.validationText;
    formStatus.style.color = "#9b5659";
    return;
  }

  const whatsAppMessage = [
    text.whatsAppLines.greeting,
    text.whatsAppLines.title,
    `${text.whatsAppLines.name}: ${guestName}`,
    `${text.whatsAppLines.attendance}: ${attendance}`,
    `${text.whatsAppLines.guestCount}: ${guestCountLabel}`,
    wishText ? `${text.whatsAppLines.wish}: ${wishText}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  localStorage.setItem(
    "aida-rsvp",
    JSON.stringify({
      guestName,
      guestCount,
      attendance,
      wishText,
      savedAt: new Date().toISOString(),
    })
  );

  const whatsAppUrl = `https://wa.me/${whatsAppPhone}?text=${encodeURIComponent(whatsAppMessage)}`;
  const whatsAppWindow = window.open(whatsAppUrl, "_blank", "noopener");

  formStatus.textContent = whatsAppWindow
    ? text.successText
    : text.popupText;
  formStatus.style.color = "#7f8f74";
});
