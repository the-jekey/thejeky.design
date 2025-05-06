
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
       el: document.querySelector(".Main"),
       smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".Main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".Main", {
       scrollTop(value) {
              return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
       getBoundingClientRect() {
              return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
       },
       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
       pinType: document.querySelector(".Main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();










var tl = gsap.timeline()

tl.from(".main-1 h1", {
       y: 50,
       opacity: 0,
       stagger: 0.1,
       delay: 0.2,
})
tl.from(".main-1 p", {
       y: 50,
       opacity: 0,
       stagger: 0.1,
}, "start")
tl.from(".main-1 button", {
       y: 50,
       opacity: 0,
       delay: 0.06,
       stagger: 0.2,
       ease: "power4.out",
}, "start")
tl.from("#image img", {
       opacity: 0,
       stagger: 0.2,
}, "start")
tl.from(".bottom h2", {
       y: -50,
       opacity: 0,
       stagger: 0.2,
}, "start")
tl.from(".navbar h1", {
       opacity: 0,
       ease: "power4.out",
})


