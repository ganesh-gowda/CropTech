import bg from "./img/bg-2.jpg";

function Des() {
  return (
    <>
      <section className="text-gray-600 body-font bg-gray-50 py-12">
        <div className="container px-5 mx-auto flex flex-wrap items-center">
          <div className="px-8 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-3xl overflow-hidden h-[calc(100vh-80px)]">
            <img
              alt="feature"
              className="rounded-3xl shadow-lg"
              src={bg}
            />
          </div>

          <div className="flex flex-col flex-wrap lg:w-1/2 lg:pl-8 lg:text-left text-center">
            <h2 className="text-blue-600 font-extrabold text-4xl mb-6">
              Why Choose <span className="text-lime-500">CropTech?</span>
            </h2>
            <p className="leading-relaxed text-gray-700 text-lg mb-8">
              CropTech is a cutting-edge platform combining the power of machine
              learning to revolutionize agriculture. Explore its capabilities
              below:
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h4 className="text-lime-600 font-bold text-lg mb-2">
                  1. Crop Recommendation Model
                </h4>
                <p className="text-gray-700 text-base">
                  Input data like nitrogen, potassium, phosphorus levels, soil
                  pH, and weather conditions to receive tailored crop
                  recommendations, ensuring optimal yield.
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <h4 className="text-lime-600 font-bold text-lg mb-2">
                  2. Fertilizer Recommender
                </h4>
                <p className="text-gray-700 text-base">
                  Suggests the best fertilizers based on nitrogen, potassium, phosphorus levels, soil
                  pH, and weather conditions, along with taking input data of soil type and plant
                  health.
                </p>
              </div>
            </div>

            <div className="mt-12 flex justify-center lg:justify-start gap-x-6">
              <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
                Learn More
              </button>
            
              <a
                href="#features"
                className="bg-lime-500 hover:bg-lime-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Des;
