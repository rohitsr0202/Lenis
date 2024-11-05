import React, { useEffect } from "react";
import Lenis from "lenis";
import "./index.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
  });

    useGSAP(() =>{
      document.querySelectorAll(".elem").forEach((elem) => {
        let image = elem.querySelector("img");
        let t1 = gsap.timeline();

        let xTransform = gsap.utils.random(-100,100);

        t1.set(
          image,
          {
            transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
          },
          "start"
        )
          .to(
            image,
            {
              scale: 0,
              ease: "expo.out",  // Dramatic and smooth easing
              scrollTrigger: {
                trigger: image,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
            "start"
          )
          .to(
            elem,
            {
              xPercent: xTransform,
              ease: "expo.out",  // Same easing function for smooth scrolling
              scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
          })
      })
    })

  return (
    <div className="w-full h-[300vh] bg-[#846C64]">
      <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 1, "--c": 3 }}
        >
          <img src="./img/1.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 1, "--c": 7 }}
        >
          <img src="./img/2.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 2, "--c": 2 }}
        >
          <img src="./img/3.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 2, "--c": 6 }}
        >
          <img src="./img/4.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 3, "--c": 4 }}
        >
          <img src="./img/5.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 3, "--c": 8 }}
        >
          <img src="./img/6.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 4, "--c": 1 }}
        >
          <img src="./img/7.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 4, "--c": 4 }}
        >
          <img src="./img/8.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 5, "--c": 2 }}
        >
          <img src="./img/9.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 5, "--c": 6 }}
        >
          <img src="./img/10.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 6, "--c": 3 }}
        >
          <img src="./img/11.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 6, "--c": 7 }}
        >
          <img src="./img/12.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 7, "--c": 5 }}
        >
          <img src="./img/13.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 7, "--c": 8 }}
        >
          <img src="./img/14.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 8, "--c": 1 }}
        >
          <img src="./img/15.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 8, "--c": 4 }}
        >
          <img src="./img/16.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 9, "--c": 2 }}
        >
          <img src="./img/17.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 9, "--c": 6 }}
        >
          <img src="./img/18.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 10, "--c": 3 }}
        >
          <img src="./img/19.jpg" alt="Image" />
        </div>
        <div
          className="elem col-span-1 row-span"
          style={{ "--r": 10, "--c": 7 }}
        >
          <img src="./img/20.jpg" alt="Image" />
        </div>
      </div>

      <div className="fixed top-0 font-['Helvetica_Now_Display'] left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-8xl uppercase mb-4">
          Thomas Vance
          <sup>®</sup>
        </h1>

        <h2 className="text-5xl">並外れたファッション</h2>
      </div>

      <div className="w-full h-screen bg-[#D1D1D1] flex items-center justify-center mx-auto py-96 relative z-[999]">
        <p className="text-5xl w-3/4 leading-[4.2rem] text-black font-regular text-left">
          From the dawn of civilisation onwards crowds have always undergone the
          influence of illusions. It is to the creators of illusions that they
          have raised more temples, statues, and altars than to any other class
          of men.
        </p>
      </div>
    </div>
  );
}

export default App;
