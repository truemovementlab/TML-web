\
(function () {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || btn.contains(e.target)) return;
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  }

  // Questionnaire: require at least one activity checkbox
  const form = document.querySelector("form.form");
  const checksWrap = document.getElementById("activityChecks");
  const activityRequired = document.getElementById("activityRequired");

  if (form && checksWrap && activityRequired) {
    function hasChecked() {
      return !!checksWrap.querySelector('input[type="checkbox"]:checked');
    }
    form.addEventListener("submit", (e) => {
      if (!hasChecked()) {
        e.preventDefault();
        activityRequired.setCustomValidity("Please select at least one activity.");
        activityRequired.reportValidity();
        activityRequired.setCustomValidity("");
      }
    });
  }
})();
