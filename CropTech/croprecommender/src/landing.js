import landing from "./img/landingbg.mp4";

function Landing() {
  return (
    <>
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={landing} type="video/mp4" />
        </video>
        
        <header className="absolute top-0 left-0 w-full py-10 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between">
              <div className="flex items-center md:gap-x-12">
                <h3
                  className="text-6xl font-bold font-serif tracking-wide text-lime-500 "
                  style={{
                    marginLeft:"470px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                    //fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  CropTech
                </h3>
              </div>
            </nav>
          </div>
        </header>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
          <h1 className="mx-auto max-w-4xl font-display sm:text-6xl font-semibold text-6xl tracking-tight text-lime-300 font-mono">
            Transforming Agriculture
            <span className="block text-slate-300">with the Power of</span>
            <span className="text-lime-300">Machine Learning</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-300 font-sans">
            CropTech is a revolutionary initiative leveraging the power of machine learning to transform agricultural practices
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
              href="#features"
            >
              VIEW PREDICTIONS
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
