export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 py-12">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-red-600 sm:text-6xl">
          Knocked Out MMA 🥊
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          The ultimate fight companion for real MMA fans.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-200">
            Live Events
          </button>
          <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg shadow-md transition-all duration-200">
            Score a Fight
          </button>
        </div>
      </div>
    </main>
  );
}
