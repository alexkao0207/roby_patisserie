const accordionsTriggers = document.querySelectorAll(".accordion__title");

accordionsTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        const target = trigger.closest(".accordion");
        target.classList.toggle("is-active");
    });
});