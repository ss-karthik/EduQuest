function splitTextIntoSpans(selector) {
  var element = document.querySelector(selector);
  if (element) {
    var text = element.innerText;
    var splitText = text
      .split("")
      .map((char) => `<span>${char}</span>`)
      .join("");
    element.innerHTML = splitText;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  splitTextIntoSpans(".send h1");
  splitTextIntoSpans(".header-text h1");

  gsap.to(".header-text h1 span", {
    top: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.075,
  });

  gsap.from(".cta, .nav, .tagline, .links", {
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    delay: 1,
  });
});

