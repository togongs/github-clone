// 토글 추가
const toggles = document.querySelectorAll(".toggle");

const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function () {
  toggleElements();
});

// 리사이즈
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 1024) {
    offElements();
  }
});

function toggleElements() {
  [].forEach.call(toggles, function (toggle) {
    toggle.classList.toggle("on");
  });
}

function offElements() {
  [].forEach.call(toggles, function (toggle) {
    toggle.classList.remove("on");
  });
}
