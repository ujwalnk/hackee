function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()
const canvas = document.querySelector("canvas");
console.log(document.querySelector("canvas"));
console.log(canvas);
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `scene00116.png scene00117.png scene00118.png scene00119.png scene00120.png scene00121.png scene00122.png scene00123.png scene00124.png scene00125.png scene00126.png scene00127.png scene00128.png scene00129.png scene00130.png scene00131.png scene00132.png scene00133.png scene00134.png scene00135.png scene00136.png scene00137.png scene00138.png scene00139.png scene00140.png scene00141.png scene00142.png scene00143.png scene00144.png scene00145.png scene00146.png scene00147.png scene00148.png scene00149.png scene00150.png scene00151.png scene00152.png scene00153.png scene00154.png scene00155.png scene00156.png scene00157.png scene00158.png scene00159.png scene00160.png scene00161.png scene00162.png scene00163.png scene00164.png scene00165.png scene00166.png scene00167.png scene00168.png scene00169.png scene00170.png scene00171.png scene00172.png scene00173.png scene00174.png scene00175.png scene00176.png scene00177.png scene00178.png scene00179.png scene00180.png scene00181.png scene00182.png scene00183.png scene00184.png scene00185.png scene00186.png scene00187.png scene00188.png scene00189.png scene00190.png scene00191.png scene00192.png scene00193.png scene00194.png scene00195.png scene00196.png scene00197.png scene00198.png scene00199.png scene00200.png scene00201.png scene00202.png scene00203.png scene00204.png scene00205.png scene00206.png scene00207.png scene00208.png scene00209.png scene00210.png scene00211.png scene00212.png scene00213.png scene00214.png scene00215.png scene00216.png scene00217.png scene00218.png scene00219.png scene00220.png scene00221.png scene00222.png scene00223.png scene00224.png scene00225.png scene00226.png scene00227.png scene00228.png scene00229.png scene00230.png scene00231.png scene00232.png scene00233.png scene00234.png scene00235.png scene00236.png scene00237.png scene00238.png scene00239.png scene00240.png scene00241.png scene00242.png scene00243.png scene00244.png scene00245.png scene00246.png scene00247.png scene00248.png scene00249.png scene00250.png scene00251.png scene00252.png scene00253.png scene00254.png scene00255.png scene00256.png scene00257.png scene00258.png scene00259.png scene00260.png scene00261.png scene00262.png scene00263.png scene00264.png scene00265.png scene00266.png scene00267.png scene00268.png scene00269.png scene00270.png scene00271.png scene00272.png scene00273.png scene00274.png scene00275.png scene00276.png scene00277.png scene00278.png scene00279.png scene00280.png scene00281.png scene00282.png scene00283.png scene00284.png scene00285.png scene00286.png scene00287.png scene00288.png scene00289.png scene00290.png scene00291.png scene00292.png scene00293.png scene00294.png scene00295.png scene00296.png scene00297.png scene00298.png scene00299.png scene00300.png scene00301.png scene00302.png scene00303.png scene00304.png scene00305.png scene00306.png scene00307.png scene00308.png scene00309.png scene00310.png scene00311.png scene00312.png scene00313.png scene00314.png scene00315.png scene00316.png scene00317.png scene00318.png scene00319.png scene00320.png scene00321.png scene00322.png scene00323.png scene00324.png scene00325.png scene00326.png scene00327.png scene00328.png scene00329.png scene00330.png scene00331.png scene00332.png scene00333.png scene00334.png scene00335.png scene00336.png scene00337.png scene00338.png scene00339.png scene00340.png scene00341.png scene00342.png scene00343.png scene00344.png scene00345.png`
  return data.split(" ")[index];
}

const frameCount = 229;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.75,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
    markers: true
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});
gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})