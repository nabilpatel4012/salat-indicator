// // import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import FeatureCard from "../components/FeatureCard";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className="bg-zinc-100 text-white">
//       <NavBar />
//       <div className="relative isolate px-6 mt-20 lg:px-8 h-dvh">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               SALAT INDICATOR
//             </h1>
//             <p className="mt-6 text-xl font-semibold leading-8 text-gray-600">
//               Elevate your mosque experience with our Salat Indicator.
//               Seamlessly guiding congregations through prayer times and the
//               Islamic calendar with unparalleled accuracy and clarity.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 rounded-full">
//               <Link
//                 to="/products"
//                 className="rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Our products
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//       </div>
//       <section
//         id="features"
//         className="text-gray-900 max-h-full flex align-middle justify-center"
//       >
//         <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 align-middle gap-10 ">
//           <div className="flex justify-center">
//             <div className="max-w-xl flex flex-col justify-center text-center">
//               <h2 className="text-4xl font-bold sm:text-5xl">
//                 What makes us special
//               </h2>

//               <p className="mt-4 text-xl font-semibold text-gray-700">
//                 Our Salat Indicators are meticulously crafted for precision in
//                 prayer timings and seamless integration with the Islamic
//                 calendar. We're dedicated to innovation, constantly
//                 incorporating the latest technology to meet the evolving needs
//                 of mosques worldwide.
//               </p>
//             </div>
//           </div>
//           <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-22 lg:grid-cols-3">
//             <FeatureCard
//               src="https://img.icons8.com/ios/50/delivery-time--v1.png"
//               alt="delivery-time--v1"
//               heading="Accurate Prayer Timings"
//               paragraph="Our devices provide precise prayer timings, ensuring congregants never miss a prayer."
//             ></FeatureCard>

//             <FeatureCard
//               src="https://img.icons8.com/ios/50/sorting-options--v1.png"
//               alt="sorting-options--v1"
//               heading="Customizable Alerts"
//               paragraph="Tailor alerts to suit your mosque's schedule, with options for adhan notifications and namaz reminders."
//             ></FeatureCard>

//             <FeatureCard
//               src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/50/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
//               alt="experimental-calendar-hieroglyphs"
//               heading="Integration with Islamic Calendar"
//               paragraph="Seamlessly sync with the Islamic calendar to provide accurate dates for important religious events and occasions."
//             ></FeatureCard>

//             <FeatureCard
//               src="https://img.icons8.com/ios/50/channel-mosaic.png"
//               alt="channel-mosaic"
//               heading="User-Friendly Interface"
//               paragraph="Intuitive controls make it easy for mosque administrators to manage and customize settings."
//             ></FeatureCard>

//             <FeatureCard
//               src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/50/external-shield-security-tanah-basah-basic-outline-tanah-basah.png"
//               alt="external-shield-security-tanah-basah-basic-outline-tanah-basah"
//               heading="Durable Construction"
//               paragraph="Built to withstand the rigors of daily use, our Salat Indicators are designed to last."
//             ></FeatureCard>

//             <FeatureCard
//               src="https://img.icons8.com/windows/50/discount-ticket.png"
//               alt="discount-ticket"
//               heading="Affordability"
//               paragraph="We believe in providing cost-effective solutions without compromising on quality, making our Salat Indicators accessible to mosques of all sizes."
//             ></FeatureCard>
//           </div>
//         </div>
//       </section>
//       <section
//         id="about-us"
//         className="text-gray-900 px-6 py-12 sm:py-16 lg:py-20"
//       >
//         <div className="max-w-screen-xl mx-auto text-center">
//           <h2 className="text-4xl font-bold sm:text-5xl">About Us</h2>
//           <p className="mt-4 text-xl font-semibold text-gray-700">
//             At Mercury STAR Salat Indicator, we specialize in manufacturing
//             high-quality Namaz Time Indicators designed for mosques, offices,
//             and homes. Our innovative products ensure that users can easily keep
//             track of prayer times, fostering a deeper connection to their faith.
//             With a commitment to precision and reliability, our indicators are
//             equipped with advanced technology to provide accurate prayer times
//             based on specific geographical locations.
//           </p>
//           <div className="mt-8 flex justify-center">
//             <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//               <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                 {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//                 SALAT INDICATOR
//               </h1> */}
//                 {/* Announcing our next round of funding.{" "} */}
//                 <a href="/company" className="font-semibold text-indigo-600">
//                   <span className="absolute inset-0" aria-hidden="true" />
//                   Learn More <span aria-hidden="true">&rarr;</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Home;

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import FeatureCard from "../components/FeatureCard";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className="bg-zinc-100 text-white">
//       <NavBar />
//       <div className="relative isolate px-6 mt-20 lg:px-8 h-dvh">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               SALAT INDICATOR
//             </h1>
//             <p className="mt-6 text-xl font-semibold leading-8 text-gray-600">
//               Elevate your mosque experience with our Salat Indicator.
//               Seamlessly guiding congregations through prayer times and the
//               Islamic calendar with unparalleled accuracy and clarity.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 rounded-full">
//               <Link
//                 to="/products"
//                 className="rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Our products
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Features Section - Improved */}
//       <section id="features" className="bg-white py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
//               Excellence in Every Detail
//             </h2>
//             <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               What Makes Us Special
//             </p>
//             <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
//               Our Salat Indicators are meticulously crafted for precision in
//               prayer timings and seamless integration with the Islamic calendar.
//               We're dedicated to innovation, constantly incorporating the latest
//               technology to meet the evolving needs of mosques worldwide.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               src="https://img.icons8.com/ios/50/delivery-time--v1.png"
//               alt="delivery-time--v1"
//               heading="Accurate Prayer Timings"
//               paragraph="Our devices provide precise prayer timings, ensuring congregants never miss a prayer."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/ios/50/sorting-options--v1.png"
//               alt="sorting-options--v1"
//               heading="Customizable Alerts"
//               paragraph="Tailor alerts to suit your mosque's schedule, with options for adhan notifications and namaz reminders."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/50/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
//               alt="experimental-calendar-hieroglyphs"
//               heading="Integration with Islamic Calendar"
//               paragraph="Seamlessly sync with the Islamic calendar to provide accurate dates for important religious events and occasions."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/ios/50/channel-mosaic.png"
//               alt="channel-mosaic"
//               heading="User-Friendly Interface"
//               paragraph="Intuitive controls make it easy for mosque administrators to manage and customize settings."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/50/external-shield-security-tanah-basah-basic-outline-tanah-basah.png"
//               alt="external-shield-security-tanah-basah-basic-outline-tanah-basah"
//               heading="Durable Construction"
//               paragraph="Built to withstand the rigors of daily use, our Salat Indicators are designed to last."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/windows/50/discount-ticket.png"
//               alt="discount-ticket"
//               heading="Affordability"
//               paragraph="We believe in providing cost-effective solutions without compromising on quality, making our Salat Indicators accessible to mosques of all sizes."
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Us Section - Improved */}
//       <section id="about-us" className="bg-gray-50 py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
//             <div>
//               <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
//                 Our Story
//               </h2>
//               <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 About Us
//               </p>
//               <p className="mt-6 text-lg text-gray-600 space-y-4">
//                 <span className="block">
//                   At Mercury STAR Salat Indicator, we specialize in
//                   manufacturing high-quality Namaz Time Indicators designed for
//                   mosques, offices, and homes.
//                 </span>
//                 <span className="block mt-4">
//                   Our innovative products ensure that users can easily keep
//                   track of prayer times, fostering a deeper connection to their
//                   faith. With a commitment to precision and reliability, our
//                   indicators are equipped with advanced technology to provide
//                   accurate prayer times based on specific geographical
//                   locations.
//                 </span>
//               </p>
//               <div className="mt-8">
//                 <Link
//                   to="/company"
//                   className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
//                 >
//                   Learn More
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="ml-2 h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//             <div className="mt-12 lg:mt-0">
//               <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//                 <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-indigo-50 to-blue-50">
//                   <div className="text-center">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Our Mission
//                     </h3>
//                     <div className="mt-4 flex items-center justify-center">
//                       <span className="text-5xl font-extrabold text-indigo-600">
//                         <img
//                           src="/company_logo.png"
//                           alt="Company Logo"
//                           className="h-20 w-auto mx-auto"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <p className="text-gray-600 text-center">
//                       To provide innovative, reliable, and user-friendly prayer
//                       time solutions that enhance the spiritual experience for
//                       Muslim communities worldwide.
//                     </p>
//                   </div>
//                   <div className="mt-6">
//                     <ul className="space-y-4">
//                       <li className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <svg
//                             className="h-6 w-6 text-green-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <p className="ml-3 text-base text-gray-700">
//                           Quality craftsmanship in every product
//                         </p>
//                       </li>
//                       <li className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <svg
//                             className="h-6 w-6 text-green-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <p className="ml-3 text-base text-gray-700">
//                           Dedication to technical innovation
//                         </p>
//                       </li>
//                       <li className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <svg
//                             className="h-6 w-6 text-green-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <p className="ml-3 text-base text-gray-700">
//                           Committed customer support
//                         </p>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import NavBar from "../components/NavBar";
// import { Link } from "react-router-dom";
// import FeatureCard from "../components/FeatureCard";
// import Footer from "../components/Footer";

// const Home = () => {
//   return (
//     <div className="bg-zinc-100 text-white">
//       <NavBar />
//       <div className="relative isolate px-6 mt-20 lg:px-8 h-dvh">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               SALAT INDICATOR
//             </h1>
//             <p className="mt-6 text-xl font-semibold leading-8 text-gray-600">
//               Elevate your mosque experience with our Salat Indicator.
//               Seamlessly guiding congregations through prayer times and the
//               Islamic calendar with unparalleled accuracy and clarity.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6 rounded-full">
//               <Link
//                 to="/products"
//                 className="rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Our products
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Features Section - Improved */}
//       <section id="features" className="text-gray-900 py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
//               Excellence in Every Detail
//             </h2>
//             <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               What Makes Us Special
//             </p>
//             <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
//               Our Salat Indicators are meticulously crafted for precision in
//               prayer timings and seamless integration with the Islamic calendar.
//               We're dedicated to innovation, constantly incorporating the latest
//               technology to meet the evolving needs of mosques worldwide.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             <FeatureCard
//               src="https://img.icons8.com/ios/50/delivery-time--v1.png"
//               alt="delivery-time--v1"
//               heading="Accurate Prayer Timings"
//               paragraph="Our devices provide precise prayer timings, ensuring congregants never miss a prayer."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/ios/50/sorting-options--v1.png"
//               alt="sorting-options--v1"
//               heading="Customizable Alerts"
//               paragraph="Tailor alerts to suit your mosque's schedule, with options for adhan notifications and namaz reminders."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/50/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
//               alt="experimental-calendar-hieroglyphs"
//               heading="Integration with Islamic Calendar"
//               paragraph="Seamlessly sync with the Islamic calendar to provide accurate dates for important religious events and occasions."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/ios/50/channel-mosaic.png"
//               alt="channel-mosaic"
//               heading="User-Friendly Interface"
//               paragraph="Intuitive controls make it easy for mosque administrators to manage and customize settings."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/50/external-shield-security-tanah-basah-basic-outline-tanah-basah.png"
//               alt="external-shield-security-tanah-basah-basic-outline-tanah-basah"
//               heading="Durable Construction"
//               paragraph="Built to withstand the rigors of daily use, our Salat Indicators are designed to last."
//             />

//             <FeatureCard
//               src="https://img.icons8.com/windows/50/discount-ticket.png"
//               alt="discount-ticket"
//               heading="Affordability"
//               paragraph="We believe in providing cost-effective solutions without compromising on quality, making our Salat Indicators accessible to mosques of all sizes."
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Us Section - Improved */}
//       <section id="about-us" className="text-gray-900 py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
//             <div>
//               <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
//                 Our Story
//               </h2>
//               {/* <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 About Us
//               </p> */}
//               <p className="mt-6 text-lg text-gray-600 space-y-4">
//                 <span className="block">
//                   At Mercury STAR Salat Indicator, we specialize in
//                   manufacturing high-quality Namaz Time Indicators designed for
//                   mosques, offices, and homes.
//                 </span>
//                 <span className="block mt-4">
//                   Our innovative products ensure that users can easily keep
//                   track of prayer times, fostering a deeper connection to their
//                   faith. With a commitment to precision and reliability, our
//                   indicators are equipped with advanced technology to provide
//                   accurate prayer times based on specific geographical
//                   locations.
//                 </span>
//               </p>
//               <div className="mt-8 flex justify-center">
//                 <div className="hidden sm:mb-8 sm:flex sm:justify-center">
//                   <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
//                     <a
//                       href="/company"
//                       className="font-semibold text-indigo-600"
//                     >
//                       <span className="absolute inset-0" aria-hidden="true" />
//                       Learn More <span aria-hidden="true">&rarr;</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 lg:mt-0">
//               <div className="bg-white rounded-lg shadow-xl overflow-hidden">
//                 <div className="px-6 py-8 sm:p-10 bg-gradient-to-r from-indigo-50 to-blue-50">
//                   <div className="text-center">
//                     <h3 className="text-lg font-medium text-gray-900">
//                       Our Mission
//                     </h3>
//                     <div className="mt-4 flex items-center justify-center">
//                       <span className="text-5xl font-extrabold text-indigo-600">
//                         <img
//                           src="/company_logo.png"
//                           alt="Company Logo"
//                           className="h-20 w-auto mx-auto"
//                         />
//                       </span>
//                     </div>
//                   </div>
//                   <div className="mt-6">
//                     <p className="text-gray-600 text-center">
//                       To provide innovative, reliable, and user-friendly prayer
//                       time solutions that enhance the spiritual experience for
//                       Muslim communities worldwide.
//                     </p>
//                   </div>
//                   <div className="mt-6">
//                     <ul className="space-y-4">
//                       <li className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <svg
//                             className="h-6 w-6 text-green-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <p className="ml-3 text-base text-gray-700">
//                           Quality craftsmanship in every product
//                         </p>
//                       </li>
//                       <li className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <svg
//                             className="h-6 w-6 text-green-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <p className="ml-3 text-base text-gray-700">
//                           Dedication to technical innovation
//                         </p>
//                       </li>
//                       <li className="flex items-start">
//                         <div className="flex-shrink-0">
//                           <svg
//                             className="h-6 w-6 text-green-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M5 13l4 4L19 7"
//                             />
//                           </svg>
//                         </div>
//                         <p className="ml-3 text-base text-gray-700">
//                           Committed customer support
//                         </p>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-zinc-100 text-white">
      <NavBar />
      <div className="relative isolate px-6 mt-20 lg:px-8 h-dvh">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              SALAT INDICATOR
            </h1>
            <p className="mt-6 text-xl font-semibold leading-8 text-gray-600">
              Elevate your mosque experience with our Salat Indicator.
              Seamlessly guiding congregations through prayer times and the
              Islamic calendar with unparalleled accuracy and clarity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 rounded-full">
              <Link
                to="/products"
                className="rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Our products
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="text-gray-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Excellence in Every Detail
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Makes Us Special
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Our Salat Indicators are meticulously crafted for precision in
              prayer timings and seamless integration with the Islamic calendar.
              We're dedicated to innovation, constantly incorporating the latest
              technology to meet the evolving needs of mosques worldwide.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              src="https://img.icons8.com/ios/50/delivery-time--v1.png"
              alt="delivery-time--v1"
              heading="Accurate Prayer Timings"
              paragraph="Our devices provide precise prayer timings, ensuring congregants never miss a prayer."
            />
            <FeatureCard
              src="https://img.icons8.com/ios/50/sorting-options--v1.png"
              alt="sorting-options--v1"
              heading="Customizable Alerts"
              paragraph="Tailor alerts to suit your mosque's schedule, with options for adhan notifications and namaz reminders."
            />
            <FeatureCard
              src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/50/external-calender-time-and-date-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png"
              alt="experimental-calendar-hieroglyphs"
              heading="Integration with Islamic Calendar"
              paragraph="Seamlessly sync with the Islamic calendar to provide accurate dates for important religious events and occasions."
            />
            <FeatureCard
              src="https://img.icons8.com/ios/50/channel-mosaic.png"
              alt="channel-mosaic"
              heading="User-Friendly Interface"
              paragraph="Intuitive controls make it easy for mosque administrators to manage and customize settings."
            />
            <FeatureCard
              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/50/external-shield-security-tanah-basah-basic-outline-tanah-basah.png"
              alt="external-shield-security-tanah-basah-basic-outline-tanah-basah"
              heading="Durable Construction"
              paragraph="Built to withstand the rigors of daily use, our Salat Indicators are designed to last."
            />
            <FeatureCard
              src="https://img.icons8.com/windows/50/discount-ticket.png"
              alt="discount-ticket"
              heading="Affordability"
              paragraph="We believe in providing cost-effective solutions without compromising on quality, making our Salat Indicators accessible to mosques of all sizes."
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about-us"
        className="text-gray-900 py-16 sm:py-24 bg-gray-50"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            Our Story
          </h2>
          {/* <p className="mt-2 text-lg font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </p> */}
          <p className="mt-6 text-lg text-gray-600 space-y-4">
            <span className="block">
              At Mercury STAR Salat Indicator, we specialize in manufacturing
              high-quality Namaz Time Indicators designed for mosques, offices,
              and homes.
            </span>
            <span className="block mt-4">
              Our innovative products ensure that users can easily keep track of
              prayer times, fostering a deeper connection to their faith. With a
              commitment to precision and reliability, our indicators are
              equipped with advanced technology to provide accurate prayer times
              based on specific geographical locations.
            </span>
          </p>
          <div className="mt-8">
            <div className="sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <Link to="/company" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
