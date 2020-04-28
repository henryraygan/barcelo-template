var swiper = new Swiper(".courses-swiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 5,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

function getRemainTime(deadline) {
  var now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ("0" + Math.floor((remainTime / 60) % 60)).slice(-2),
    remainHours = ("0" + Math.floor((remainTime / 3600) % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  var remain = {
    remainTime: remainTime,
    remainSeconds: remainSeconds,
    remainMinutes: remainMinutes,
    remainHours: remainHours,
    remainDays: remainDays,
  };

  return remain;
}

function getCoundown(deadline, elem, finalMessage) {
  var el = document.getElementById(elem);
  var timerUpdate = setInterval(function () {
    var t = getRemainTime(deadline);
    el.innerHTML = `${t.remainDays} días ${t.remainHours} horas ${t.remainMinutes} mins ${t.remainSeconds} segundos`;
    if (t.remainTime <= 1) {
      clearInterval(timerUpdate);
      el.innerHTML = finalMessage;
    }
  }, 1000);
}

getCoundown("Apr 31 2020 10:00:00", "countdown", "Ha finalizado");
