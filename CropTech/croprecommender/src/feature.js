import "./feature.css";
import bg from "./img/bg2.mp4";

function Feature() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center" style={{ marginTop: "100px" }}>
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src={bg}
        autoPlay
        loop
        muted
      />

      {/* Content */}
      <div className="flex flex-row justify-center py-12 px-4 space-x-8 w-full gap-20">
        <div className="card flex flex-col items-center justify-between w-full lg:w-1/2 bg-white bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out p-6">
          <h3 className="text-4xl font-serif font-bold mb-6 text-blue-600">
            Crop Recommendation Model
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get personalized crop recommendations based on soil and environmental factors.
          </p>
          <a href="#croprecommender">
            <button className="bg-lime-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-lime-600 transition duration-300 ease-in-out">
              Try Now
            </button>
          </a>
        </div>

        <div className="card flex flex-col items-center justify-between w-full lg:w-1/2 bg-white bg-opacity-80 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out p-6">
          <h3 className="text-4xl font-serif font-bold mb-6 text-blue-600">
            Fertilizer Recommender
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Receive tailored fertilizer recommendations to optimize plant health.
          </p>
          <a href="#fertilizer">
            <button className="bg-lime-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-lime-600 transition duration-300 ease-in-out">
              Try Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Feature;
