// import React, { useEffect } from 'react'
// import { ArrowRight, Beaker, Palette, Shield, Zap } from 'lucide-react'

// const Hero = () => {
//   const features = [
//     { icon: Beaker, text: 'Premium Chemicals' },
//     { icon: Palette, text: 'Quality Tiles' },
//     { icon: Shield, text: 'Safe & Reliable' },
//     { icon: Zap, text: 'Fast Delivery' }
//   ]

//   useEffect(() => {
//     // Load Spline viewer script
//     const script = document.createElement('script')
//     script.type = 'module'
//     script.src = 'https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js'
//     document.head.appendChild(script)

//     return () => {
//       // Cleanup script on unmount
//       document.head.removeChild(script)
//     }
//   }, [])

//   return (
//     <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gray-900 pt-15">
//       {/* Spline 3D Background */}
//       <spline-viewer
//         style={{
//           width: '100%',
//           height: '100vh',
//           transform: 'scale(1.2)',
//           zIndex: '-1',
//           position: 'absolute',
//           top: '0',
//           left: '0'
//         }}
//         url="undefined"
//       />

//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         <div className="absolute top-0 left-0 w-full h-full opacity-20">
//           <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//           <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//           <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Content */}
//           <div className="text-center lg:text-left space-y-8">
//             <div className="space-y-6">
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
//                 <span className="block">Premium</span>
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-500 to-purple-500 animate-gradient-x">
//                   Chemicals & Tiles
//                 </span>
//                 <span className="block text-gray-300">for Every Need</span>
//               </h1>

//               <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//                 Your trusted partner for high-quality industrial chemicals and premium tiles.
//                 We deliver excellence with every product, ensuring safety, reliability, and
//                 superior performance for your projects.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
//               <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
//                 <span>Explore Products</span>
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>

//               <button className="group relative px-8 py-4 border-2 border-primary-500 text-primary-400 hover:text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105">
//                 <span className="relative z-10">Request Quote</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
//               </button>
//             </div>

//             {/* Features */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="group relative flex flex-col items-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-primary-500/50 hover:bg-gray-800/80 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer"
//                 >
//                   <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   <feature.icon className="h-10 w-10 text-primary-400 mb-3 group-hover:text-primary-300 group-hover:scale-125 transition-all duration-300" />
//                   <span className="text-sm font-semibold text-gray-300 group-hover:text-white text-center transition-colors duration-300">
//                     {feature.text}
//                   </span>
//                   <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Hero Visual - INCREASED SIZE */}
//           <div className="relative flex justify-center lg:justify-end">
//             <div className="relative group">
//               {/* Main Card - LARGER SIZE */}
//               <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-16 transform rotate-3 group-hover:rotate-0 transition-all duration-700 border border-gray-700/50 hover:border-primary-500/30 w-full max-w-2xl">

//                 {/* Glow Effect */}
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-gradient-x"></div>

//                 {/* Chemical Tubes - LARGER */}
//                 <div className="grid grid-cols-3 gap-8 mb-12 relative z-10">
//                   {[1, 2, 3, 4, 5, 6].map((item) => (
//                     <div
//                       key={item}
//                       className={`h-28 rounded-full bg-gradient-to-t shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-500 cursor-pointer ${
//                         item % 3 === 0
//                           ? 'from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600'
//                           : item % 2 === 0
//                           ? 'from-green-500 to-green-700 hover:from-green-400 hover:to-green-600'
//                           : 'from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600'
//                       } animate-pulse hover:animate-none`}
//                       style={{
//                         animationDelay: `${item * 0.3}s`,
//                         animationDuration: '2s'
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* Tile Pattern - LARGER */}
//                 <div className="grid grid-cols-4 gap-4 relative z-10">
//                   {Array.from({ length: 16 }).map((_, index) => (
//                     <div
//                       key={index}
//                       className={`aspect-square rounded-lg cursor-pointer transform hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-lg w-12 h-12 ${
//                         index % 4 === 0
//                           ? 'bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600'
//                           : index % 3 === 0
//                           ? 'bg-gradient-to-br from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700'
//                           : 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700'
//                       }`}
//                       style={{
//                         animationDelay: `${index * 0.1}s`
//                       }}
//                     />
//                   ))}
//                 </div>

//                 {/* Floating Elements - LARGER */}
//                 <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-bounce shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-125 transition-all duration-300" />
//                 <div
//                   className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-bounce shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-125 transition-all duration-300"
//                   style={{ animationDelay: '1s' }}
//                 />
//                 <div
//                   className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-125 transition-all duration-300"
//                   style={{ animationDelay: '2s' }}
//                 />
//               </div>

//               {/* Additional Floating Elements - LARGER */}
//               <div className="absolute top-12 -left-12 w-10 h-10 bg-yellow-500 rounded-full animate-ping"></div>
//               <div className="absolute bottom-24 -right-10 w-8 h-8 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import React, { useEffect } from "react";
import { ArrowRight, Beaker, Palette, Shield, Zap } from "lucide-react";

const Hero = () => {
  const features = [
    { icon: Beaker, text: "Premium Chemicals" },
    { icon: Palette, text: "Quality Tiles" },
    { icon: Shield, text: "Safe & Reliable" },
    { icon: Zap, text: "Fast Delivery" },
  ];

  useEffect(() => {
    // Dynamically load the Spline viewer script
    if (!document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gray-900 pt-15">
      <spline-viewer
        style={{
          width: "100%",
          height: "100vh",
          transform: "scale(1.2)",
          zIndex: 1,
          position: "absolute",
          top: 0,
          left: 0,
          opacity: 0.7,
        }}
        url="https://prod.spline.design/CQXdhP2a6i9NFj57/scene.splinecode"
      />
      <section id="home" className="min-h-screen flex items-center relative">
        {/* Spline 3D Background */}

        {/* Semi-transparent overlay to blend Spline with content */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}></div>

        {/* Animated Background - Made more transparent */}
        <div
          className="absolute inset-0 bg-gradient-to-br "
          style={{ zIndex: 3 }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-15">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative"
          style={{ zIndex: 10 }}
        >
          <div className=" gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                  <span className="block">Premium</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-purple-500 animate-gradient-x">
                    Chemicals & Tiles
                  </span>
                  <span className="block text-gray-300">for Every Need</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                  Your trusted partner for high-quality industrial chemicals and
                  premium tiles. We deliver excellence with every product,
                  ensuring safety, reliability, and superior performance for
                  your projects.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:shadow-primary-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                  <span>Explore Products</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group relative px-8 py-4 border-2 border-primary-500 text-primary-400 hover:text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 transform hover:scale-105">
                  <span className="relative z-10">Request Quote</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center p-6 bg-gray-800/70 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-primary-500/50 hover:bg-gray-800/90 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <feature.icon className="h-10 w-10 text-primary-400 mb-3 group-hover:text-primary-300 group-hover:scale-125 transition-all duration-300" />
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white text-center transition-colors duration-300">
                      {feature.text}
                    </span>
                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md rounded-3xl shadow-2xl p-16 transform rotate-3 group-hover:rotate-0 transition-all duration-700 border border-gray-700/50 hover:border-primary-500/30 w-full max-w-2xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-700 animate-gradient-x"></div>

                  <div className="grid grid-cols-3 gap-8 mb-12 relative z-10">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div
                        key={item}
                        className={`h-28 rounded-full bg-gradient-to-t shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-500 cursor-pointer ${
                          item % 3 === 0
                            ? "from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600"
                            : item % 2 === 0
                            ? "from-green-500 to-green-700 hover:from-green-400 hover:to-green-600"
                            : "from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600"
                        } animate-pulse hover:animate-none`}
                        style={{
                          animationDelay: `${item * 0.3}s`,
                          animationDuration: "2s",
                        }}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-4 gap-4 relative z-10">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <div
                        key={index}
                        className={`aspect-square rounded-lg cursor-pointer transform hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-md hover:shadow-lg w-12 h-12 ${
                          index % 4 === 0
                            ? "bg-gradient-to-br from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600"
                            : index % 3 === 0
                            ? "bg-gradient-to-br from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700"
                            : "bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700"
                        }`}
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full animate-bounce shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-125 transition-all duration-300" />
                  <div
                    className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full animate-bounce shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-125 transition-all duration-300"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-1/2 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full animate-pulse shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-125 transition-all duration-300"
                    style={{ animationDelay: "2s" }}
                  />
                </div>

                <div className="absolute top-12 -left-12 w-10 h-10 bg-yellow-500 rounded-full animate-ping"></div>
                <div
                  className="absolute bottom-24 -right-10 w-8 h-8 bg-pink-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
