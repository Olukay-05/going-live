// import { gsap } from "gsap";

// const title = gsap.utils.toArray('p')
// const tl = gsap.timeline()

// DataTransferItemList.forEach(title => {
//   const splitTitle = new SplitTextJS(title)

//   tl.from(splitTitle.chars, {
//     opacity: 0,
//     y: 80,
//     rotateX: -90,
//     stagger: .02
//   }, "<")

//   .to(splitTitle.chars, {
//     opacity: 0,
//     y: -80,
//     rotateX: 90,
//     stagger: .02
//   }, "<1")
// })



// export default function Home() {
//   return (
//   <section className="container">
//     <div className="text-wrapper">
//       <p>We&apos;re busy creating something amazing behind the scenes!</p>
//       <p>Our website will be live soon—</p>
//       <p>stay tuned!</p>
//     </div>
//   </section>
//   );
// }


// "use client";

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import SplitType from "split-type"; // Importing SplitType correctly

// export default function Home() {
//   useEffect(() => {
//     const titles = gsap.utils.toArray("p"); // Get all <p> elements
//     const tl = gsap.timeline();

//     titles.forEach((title) => {
//       const splitTitle = new SplitType(title, { types: "chars" }); // Correctly initializing SplitType

//       tl.from(splitTitle.chars, {
//         opacity: 0,
//         y: 80,
//         rotateX: -90,
//         stagger: 0.02,
//       }, "<")

//       .to(splitTitle.chars, {
//         opacity: 0,
//         y: -80,
//         rotateX: 90,
//         stagger: 0.02,
//       }, "<1");
//     });

//     return () => {
//       titles.forEach((title) => {
//         SplitType.revert(title); // Cleanup to avoid memory leaks
//       });
//     };
//   }, []);

//   return (
//     <section className="container mt-[30rem]">
//       <div className="text-wrapper">
//         <p>We&apos;re busy creating something amazing behind the scenes!</p>
//         <p>Our website will be live soon—</p>
//         <p>stay tuned!</p>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import SplitType from "split-type"; // Using SplitType as a free alternative

// export default function Home() {
//   useEffect(() => {
//     const titles = gsap.utils.toArray("p"); // Get all <p> elements
//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite loop with delay

//     titles.forEach((title) => {
//       const splitTitle = new SplitType(title, { types: "chars" });

//       tl.fromTo(
//         splitTitle.chars,
//         {
//           opacity: 0,
//           y: 80,
//           rotateX: -90,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           stagger: 0.02,
//           duration: 1,
//         }
//       )
//       .to(
//         splitTitle.chars,
//         {
//           opacity: 0,
//           y: -80,
//           rotateX: 90,
//           stagger: 0.02,
//           duration: 1,
//         },
//         "+=1" // Adds a slight delay before disappearing
//       );
//     });

//     return () => {
//       titles.forEach((title) => {
//         SplitType.revert(title); // Cleanup on unmount
//       });
//     };
//   }, []);

//   return (
//     <section className="container flex justify-center items-center">
//       <div className="text-wrapper mx-auto mt-[25rem]">
//         <p>We&apos;re busy creating something amazing behind the scenes!</p>
//         <p>Our website will be live soon;</p>
//         <p>Stay tuned!</p>
//       </div>
//     </section>
//   );
// }



"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type"; // Using SplitType as a free alternative

export default function Home() {
  useEffect(() => {
    // Check if screen width is above 768px (desktop)
    if (window.innerWidth > 768) {
      const titles = gsap.utils.toArray("p"); // Get all <p> elements
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite loop with delay

      titles.forEach((title) => {
        const splitTitle = new SplitType(title, { types: "chars" });

        tl.fromTo(
          splitTitle.chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 1,
          }
        )
        .to(
          splitTitle.chars,
          {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
            duration: 1,
          },
          "+=1" // Adds a slight delay before disappearing
        );
      });

      return () => {
        titles.forEach((title) => {
          SplitType.revert(title); // Cleanup on unmount
        });
      };
    }
  }, []); // Empty array ensures this effect only runs once on mount

  return (
    // <section className="container flex justify-center items-center">
    //   <div className="text-wrapper mx-auto mt-[10rem] lg:mt-[25rem]">
    //     <p>We&apos;re busy creating something amazing behind the scenes!</p>
    //     <p>Our website will be live soon;</p>
    //     <p>Stay tuned!</p>
    //   </div>
    // </section>

    <section className="container flex justify-center items-center px-4 sm:px-6 lg:px-8">
  <div className="text-wrapper mx-auto mt-[15rem] lg:mt-[25rem]">
    <p className="text-3xl sm:text-4xl lg:text-5xl sm:leading-normal lg:leading-none">
      We&apos;re busy creating something amazing behind the scenes!
    </p>
    <p className="text-3xl sm:text-4xl lg:text-5xl sm:leading-normal lg:leading-none">
      Our website will be live soon;
    </p>
    <p className=" text-3xl sm:text-4xl lg:text-5xl sm:leading-normal lg:leading-none">
      Stay tuned!
    </p>
  </div>
</section>
  );
}

