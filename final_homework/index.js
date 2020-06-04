const glide = new Glide(".glide");
const captionsEl = document.querySelectorAll(".slide-caption");

glide.on(["mount.after", "run.after"], () => {
  const caption = captionsEl[glide.index];
  anime({
    targets: caption.children,
    opacity: [0, 1], //透明度从0-1渐变
    duration: 400, //动画执行时间400ms
    easing: "linear", //线性执行动画
    delay: anime.stagger(400, { start: 300 }), //对caption的所有child都会加上数字
    translateY: [anime.stagger([40, 10]), 0],
  });
});

glide.on("run.before", () => {
  document.querySelectorAll(".slide-caption>*").forEach((el) => {
    el.style.opactity = 0;
  });
});

glide.mount();

const isotope = new Isotope(".cases", {
  layoutMode: "fitRows",
  itemSelector: ".case-item"
});

const filterBtns = document.querySelector(".filter-btns");

filterBtns.addEventListener("click", (e) => {
  let { target } = e;
  const filterOption = target.getAttribute("data-filter");
  if (filterOption) {
    document
      .querySelectorAll(".filter-btn.active")
      .forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");

    isotope.arrange({ filter: filterOption });
  }
});
