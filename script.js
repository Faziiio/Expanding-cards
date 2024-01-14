const panels = document.querySelectorAll(".panel");
// console.log(panels);
panels.forEach(function (a) {
  a.addEventListener("click", function () {
    removeClass();
    a.classList.add("active");
  });
});

function removeClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
