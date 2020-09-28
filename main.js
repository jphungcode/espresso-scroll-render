window.addEventListener("DOMContentLoaded", (event) => {
  const intro = document.querySelector(".intro");

  const text = intro.querySelector("h1");

  // const section = document.querySelector("section");

  // const end = document.querySelector("h1");

  const controller = new ScrollMagic.Controller();

  // set desired animation time
  const animationTime = 809;

  let scene = new ScrollMagic.Scene({
    duration: animationTime,
    triggerElement: intro,
    triggerHook: 0,
  })
    .setPin(intro)
    .addTo(controller);

  let textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

  // animation for text
  let scene2 = new ScrollMagic.Scene({
    duration: 200,
    triggerElement: intro,
    triggerHook: 0,
  })
    .setTween(textAnim)
    .addTo(controller);

  // Video animation
  // let accelamount = 0.1;
  // let scrollPos = 0;
  let delay = 0;
  let heightPerFrame = 0;

  scene.on("update", (e) => {
    heightPerFrame = anim.totalFrames / animationTime;
    delay = Math.round(e.scrollPos * heightPerFrame);
    anim.goToAndStop(delay, true);
  });

  let anim;
  let elem = document.getElementById("lottie");

  const animateData = {
    container: elem, //
    renderer: "svg",
    loop: false,
    autoplay: false,
    rendererSettings: { progressiveLoad: false },
    path: "data.json",
  };

  anim = lottie.loadAnimation(animateData);
});
