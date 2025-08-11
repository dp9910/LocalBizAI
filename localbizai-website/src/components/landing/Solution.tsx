
export function Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Your Guided Journey to AI Success
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-600"></div>

          {/* Step 1 */}
          <div className="flex items-center w-full mb-12">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-semibold text-gray-900">Business Discovery</h3>
              <p className="text-gray-600">We learn YOUR business first</p>
            </div>
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center w-full mb-12">
            <div className="w-1/2 pr-8"></div>
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Custom Strategy</h3>
              <p className="text-gray-600">AI creates your roadmap</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center w-full mb-12">
            <div className="w-1/2 pr-8 text-right">
              <h3 className="text-2xl font-semibold text-gray-900">Guided Implementation</h3>
              <p className="text-gray-600">No $485 repair bills</p>
            </div>
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="w-1/2 pl-8"></div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center w-full">
            <div className="w-1/2 pr-8"></div>
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold">4</span>
            </div>
            <div className="w-1/2 pl-8 text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Continuous Optimization</h3>
              <p className="text-gray-600">Gets smarter every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
