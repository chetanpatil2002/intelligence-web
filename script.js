let btn = document.querySelector(".btntog");
let nav = document.querySelector(".nav");
btn.addEventListener("click", function () {
  nav.classList.toggle("navigation");
});

// ===================== dropdown List ========================
function showDropdown() {
  let showDrop = document.querySelector(".innermenu");
  showDrop.classList.toggle("dropdown");
}

// =================== count js ==============
const countNum = document.querySelectorAll(".counter");
for (let i = 0; i < countNum.length; i++) {
  let count = countNum[i];
  let target = +count.getAttribute("data-target");
  let current = 0;
  let inc = target / 100;
  function incCount() {
    for (let j = 0; j <= 100; j++) {
      setTimeout(function () {
        current += inc;
        if (current >= target) {
          count.innerText = target;
        } else {
          count.innerText = Math.ceil(current);
        }
      }, j * 30);
    }
  }
  incCount();
}
