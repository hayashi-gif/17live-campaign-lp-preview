(function () {
  "use strict";

  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-item__q");

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".faq-item__q").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
