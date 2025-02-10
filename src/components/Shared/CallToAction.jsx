import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section id="cta" className="bg-customGreen md:m-20 m-5 rounded-xl">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-between md:px-40 px-6 py-24 mx-auto my-10 space-y-12 md:py-12 lg:flex-row lg:space-y-0">
        {/* Heading */}
        <h2 className="text-2xl font-bold leading-tight text-center text-white md:text-3xl md:max-w-xl md:text-left">
          Let us assist you in switching to solar and securing your government
          subsidy with ease!
        </h2>
        {/* Button */}
        <div>
          <Link
            to="#"
            className="md:px-6 px-4 py-2 text-customGreen1 w-full text-sm font-semibold bg-white rounded-full shadow-2xl baseline hover:bg-customGreen5 hover:text-white"
          >
            Get a Free Consultation Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
