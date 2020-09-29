window.addEventListener("DOMContentLoaded", (event) => {
  const intro = document.querySelector(".intro");

  const controller = new ScrollMagic.Controller();
  const elem = document.getElementById("lottie");
  let anim;

  // set desired animation time
  // 809 frames - 3x
  const animationTime = 2427;

  let scene = new ScrollMagic.Scene({
    duration: animationTime,
    triggerElement: intro,
    triggerHook: 0,
  })
    .setPin(intro)
    .addTo(controller);

  // Video animation
  let delay = 0;
  let heightPerFrame = 0;

  scene.on("update", (e) => {
    heightPerFrame = anim.totalFrames / animationTime;
    delay = Math.round(e.scrollPos * heightPerFrame);
    anim.goToAndStop(delay, true);
  });

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
