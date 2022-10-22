const yes = document.querySelector(".btn-yes");
const no = document.querySelector(".btn-no");
const toast = document.querySelector(".toast");
var isCurrent = true;
const escape = (e) => {
  no.style.translate = `${
    isCurrent
      ? Math.floor(Math.random() * 40)
      : Math.floor(Math.random() * 40 * -1)
  }vw ${
    isCurrent
      ? Math.floor(Math.random() * 40)
      : Math.floor(Math.random() * 40 * -1)
  }vh`;
  isCurrent = !isCurrent;
};
no.addEventListener("mouseover", (e) => escape(e));

yes.addEventListener("click", () => {
  toast.style.opacity = "1";
});
