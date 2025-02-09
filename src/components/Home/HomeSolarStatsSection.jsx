const SolarStatsSection = () => {
    return (
      <div className="stats-section py-10 px-5 mb-10 relative overflow-hidden" id="cta">
        {/* Background SVG */}
        <div className="absolute inset-0 ">
          <svg
            viewBox="0 0 1440 320"
            className="absolute w-full h-full opacity-40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="0.1"
              d="M0,128L48,154.7C96,181,192,235,288,234.7C384,235,480,181,576,144C672,107,768,85,864,74.7C960,64,1056,64,1152,90.7C1248,117,1344,171,1392,197.3L1440,224V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z"
            ></path>
          </svg>
        </div>
  
        <div className="stats-grid z-20 max-w-5xl rounded-xl bg-customGreen mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between md:px-10 gap-x-10 py-10 px-5 lg:px-10 gap-y-5">
          {/* Header */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl md:pb-5 md:text-3xl text-white font-bold text-center">
              Switch to Solar & Power Your Future
            </h2>
          </div>
  
          {/* Stats */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl lg:text-4xl text-white font-bold">500 MW+</h2>
            <p className="text-center text-sm md:text-base text-white">Solar energy generated</p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl lg:text-4xl text-white font-bold">2M+ Tons</h2>
            <p className="text-center text-sm md:text-base text-white">Carbon emissions saved</p>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl lg:text-4xl text-white font-bold">10,000+</h2>
            <p className="text-center text-sm md:text-base text-white">Solar installations worldwide</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SolarStatsSection;
  