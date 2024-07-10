// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans" >
  {/* Hero Section */}
  <section className="bg-[url('/images/hero-background.png')] bg-cover bg-center py-20 md:py-55 text-black h-screen">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 py-10 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Experience the Future of Additive Manufacturing
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-5">
          Introducing our state-of-the-art 3D Filament Extruder - the ultimate tool for creating custom, high-quality filament for your 3D printing needs
        </p>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg mt-8">
          Learn More
        </button>
      </div>
    </div>
  </section>

  {/* Precision Section */}
  <section className="py-20">
    <div className="container mx-auto text-center px-4 md:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">Precision</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div>
          <Image src="/images/precision-1.jpg" alt="Consistent Filament" width={400} height={300} />
          <p className="mt-4">Consistent</p>
        </div>
        <div>
          <Image src="/images/precision-2.jpg" alt="Optimized Filament" width={400} height={300} />
          <p className="mt-4">Optimized</p>
        </div>
      </div>
    </div>
  </section>

  {/* Revolutionary Section */}
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 md:px-0 text-black">
      <div className="md:w-1/2">
        <Image src="/images/extruder-parts.jpg" alt="Extruder Parts" width={800} height={600} />
      </div>
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pl-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Our Revolutionary</h2>
        <p className="text-base sm:text-lg md:text-xl">
          At the heart of our 3D Filament Extruder is a cutting-edge design that combines advanced engineering with meticulous attention to detail. Crafted to deliver unparalleled performance, our extruder ensures smooth, consistent filament production, enabling you to create exceptional 3D printed parts with unrivaled precision and reliability
        </p>
      </div>
    </div>
  </section>

  {/* Unmatched Section */}
  <section className="py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-5">Unmatched</h2>
        <p className="text-base sm:text-lg md:text-xl">
          Unlock the full potential of your 3D printing with our revolutionary 3D Filament Extruder. Designed to deliver superior filament quality, our extruder features a state-of-the-art temperature control system, precision feed mechanism, and advanced extrusion process, ensuring consistent diameter, density, and strength across your entire filament production
        </p>
      </div>
      <div className="md:w-1/2">
        <Image src="/images/zelena_crni_kolut.jpg" alt="Extruder in Action" width={800} height={600} />
      </div>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto text-center px-4 md:px-0 text-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-5">Elevate your 3D printing capabilities with our innovative 3D Filament Extruder</h2>
      <p className="text-base sm:text-lg md:text-xl">Discover the future of additive manufacturing</p>
    </div>
  </section>



      {/* Footer Section */}
      {/*<footer className="bg-green-900 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-center">
          <div className="mb-5 md:mb-0">
            <Image src="/images/logo.svg" alt="Company Logo" width={100} height={50} />
            <p className="text-sm mt-3">© 2024 Filament3D, Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="font-bold mb-3 opacity-85">Products</h3>
              <ul className="text-sm space-y-2 opacity-75">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 opacity-85">Resources</h3>
              <ul className="text-sm space-y-2 opacity-75">
                <li>News</li>
                <li>Support</li>
                <li>Downloads</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 opacity-85">Company</h3>
              <ul className="text-sm space-y-2 opacity-75">
                <li>Careers</li>
                <li>Leadership</li>
                <li>Partners</li>
                <li>Locations</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>*/}
    </div>
  );
}