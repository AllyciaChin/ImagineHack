document.addEventListener('DOMContentLoaded', function () {
  const acc = document.querySelectorAll(".accordion");
  acc.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("open"); // remove padding/margin when closed
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("open"); // add padding/margin when open
      }
    });
  });
});