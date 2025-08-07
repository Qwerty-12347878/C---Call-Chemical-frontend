import tileWood from '../assets/i (2).webp';

export default function Home() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <img
        src={tileWood}
        alt="Wooden tiles"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 max-w-5xl mx-auto py-24 px-6 text-white text-center flex flex-col items-center bg-gradient-to-tr from-blue-700/90 to-green-600/60 rounded-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">Premium Chemicals & Stylish Tiles for Every Project</h2>
        <p className="max-w-2xl text-lg sm:text-xl mb-8 font-medium">
          Elevate your lab, workplace, or living space with the finest chemicals and creative tiling solutions. CCT delivers quality, reliability, and innovation for professionals, institutions, and individuals.
        </p>
        <a
          href="/services"
          className="mt-2 bg-white text-blue-700 font-bold px-7 py-3 rounded-xl shadow-lg hover:bg-gray-100 active:scale-95 transition"
        >
          View Our Services
        </a>
      </div>
    </section>
  );
}
