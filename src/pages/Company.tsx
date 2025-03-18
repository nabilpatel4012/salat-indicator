import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Company = () => {
  return (
    <div className="bg-zinc-100 text-gray-900">
      <NavBar />
      <div className="px-6 py-12 sm:py-16 lg:py-20 max-w-screen-xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-black-700">
          About Mercury STAR Salat Indicator
        </h1>
        <p className="mt-6 text-xl font-medium text-gray-700 max-w-3xl mx-auto">
          We specialize in high-quality Namaz Time Indicators for mosques,
          offices, and homes, ensuring precise prayer time tracking.
        </p>

        <div className="mt-12 text-left max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black-700 text-center">
            Our Mission
          </h2>
          <div className="mt-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <GlobeAltIcon className="h-8 w-8 text-indigo-600" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Expanding access to accurate prayer timing solutions for
                individuals and communities worldwide.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <LightBulbIcon className="h-8 w-8 text-indigo-600" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Leveraging innovative technology to enhance the spiritual
                experience and encourage timely prayers.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-left">
          <h2 className="text-4xl font-bold text-black-700 text-center">
            Why Choose Us?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <BriefcaseIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Expertise</h3>
              <p className="mt-2 text-gray-600">
                Years of experience in the electronics industry.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <ShieldCheckIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Quality Assurance</h3>
              <p className="mt-2 text-gray-600">
                High manufacturing standards ensuring top-tier products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <UsersIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Customer Support</h3>
              <p className="mt-2 text-gray-600">
                Dedicated assistance for all inquiries and support.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-x-6 rounded-full">
          <Link
            to="/products"
            className="rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Our collections
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
