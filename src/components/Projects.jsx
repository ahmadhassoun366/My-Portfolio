// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import project1 from "../assets/project-1.png";
// import project2 from "../assets/project-2.jpg";
// import project3 from "../assets/project-3.jpg";
// import project4 from "../assets/project-4.jpg";
// import project5 from "../assets/project-5.png";
// import project_person from "../assets/project_person1.png";

// import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css'
// import { Pagination, Autoplay } from "swiper";

// function Projects() {
//     const projects = [
//         {
//           img: project1,
//           name: "Movie App",
//           github_link: "https://github.com/Sridhar-C-25",
//           live_link: "https://myreactflix.netlify.app",
//         },
//         {
//           img: project2,
//           name: "Job search Web App",
//           github_link: "https://github.com/Sridhar-C-25/jobsearchapp",
//           live_link: "https://myjobsearch.netlify.app",
//         },
//         {
//           img: project3,
//           name: "Highking",
//           github_link: "https://github.com/Sridhar-C-25/highking",
//           live_link: "https://highking01.netlify.app",
//         },
//         {
//           img: project4,
//           name: "React Nav",
//           github_link:
//             "https://github.com/Sridhar-C-25/reacttailwindnavbar-with-dropdown",
//           live_link: "https://reacttailwindnavbar.netlify.app",
//         },
//         {
//           img: project5,
//           name: "Vue Country",
//           github_link: "https://github.com/Sridhar-C-25",
//           live_link: "https://vuecountry05.netlify.app",
//         },
//       ];
//       const MySwiper = () => {
//         const navigationPrevRef = React.useRef(null)
//         const navigationNextRef = React.useRef(null)
//   return (
    
//     <section id="projects" className="py-10 text-white">
//     <div className="text-center">
//       <h3 className="text-4xl font-semibold">
//         My <span className="text-cyan-600">Projects</span>
//       </h3>
//       <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
//     </div>
//     <br />
//     <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
//       <div className="lg:w-2/3 w-full">
//       <Swiper
//       navigation={{
//         // Both prevEl & nextEl are null at render so this does not work
//         prevEl: navigationPrevRef.current,
//         nextEl: navigationNextRef.current,
//       }}
//       onSwiper={(swiper) => {
//         // Delay execution for the refs to be defined
//         setTimeout(() => {
//           // Override prevEl & nextEl now that refs are defined
//           swiper.params.navigation.prevEl = navigationPrevRef.current
//           swiper.params.navigation.nextEl = navigationNextRef.current

//           // Re-init navigation
//           swiper.navigation.destroy()
//           swiper.navigation.init()
//           swiper.navigation.update()
//         })
//       }}
//     >
//       <SwiperSlide>slide 1</SwiperSlide>
//       <SwiperSlide>slide 2</SwiperSlide>
//       <div ref={navigationPrevRef} />
//       <div ref={navigationNextRef} />
//     </Swiper>
//       </div>
//       <div className="lg:block hidden">
//         <img src={project_person} alt="" />
//       </div>
//     </div>
//   </section>
//   )
// }

// export default Projects