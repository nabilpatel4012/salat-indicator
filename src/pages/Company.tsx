import { Link } from "react-router-dom";
import {
  BriefcaseIcon,
  GlobeAltIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UsersIcon,
  ClockIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Company = () => {
  return (
    <div className="bg-zinc-100 text-gray-900 mt-20">
      <NavBar />
      <div className="px-6 py-12 sm:py-16 lg:py-20 max-w-screen-xl mx-auto text-center">
        {/* Company Header */}
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          About Mercury STAR Salat Indicator
        </h1>
        <p className="mt-6 text-lg font-medium text-gray-700 max-w-3xl mx-auto">
          At Mercury STAR, we are dedicated to crafting high-quality Namaz Time
          Indicators for mosques, offices, and homes, ensuring precise and
          reliable prayer time tracking to enhance spiritual practices
          worldwide.
        </p>

        {/* Company Overview */}
        <div className="mt-16 text-left max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Our Story
          </h2>
          <div className="mt-6 flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <ClockIcon className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Founded in 2010
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mercury STAR was established with a vision to bridge
                  technology and spirituality. For over a decade, we have been
                  innovating to provide accurate and user-friendly prayer time
                  solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <HeartIcon className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Our Values
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Integrity, innovation, and community drive everything we do.
                  We are committed to delivering products that honor tradition
                  while embracing modern technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mt-16 text-left max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Our Mission
          </h2>
          <div className="mt-6 flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <GlobeAltIcon className="h-8 w-8 text-indigo-600" />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Expanding access to accurate prayer timing solutions for
                  individuals and communities worldwide, fostering a global
                  connection to faith.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <LightBulbIcon className="h-8 w-8 text-indigo-600" />
              <div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Leveraging cutting-edge technology to enhance the spiritual
                  experience, making prayer time tracking seamless and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Why Choose Us?
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <BriefcaseIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Expertise</h3>
              <p className="mt-2 text-gray-600">
                Over 15 years of experience in the electronics industry,
                specializing in precision timing devices.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <ShieldCheckIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Quality Assurance</h3>
              <p className="mt-2 text-gray-600">
                Rigorous testing and high manufacturing standards ensure
                durable, top-tier products.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <UsersIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Customer Support</h3>
              <p className="mt-2 text-gray-600">
                24/7 dedicated support team to assist with inquiries, setup, and
                troubleshooting.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Our passionate team of engineers, designers, and customer service
            experts work together to deliver exceptional products and services.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-white shadow-lg rounded-xl">
              <div className="flex-shrink-0">
                <UsersIcon className="h-10 w-10 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Engineering Excellence
                </h3>
                <p className="mt-2 text-gray-600">
                  Our engineers are experts in microelectronics and software,
                  ensuring precision in every device.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-white shadow-lg rounded-xl">
              <div className="flex-shrink-0">
                <HeartIcon className="h-10 w-10 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Customer-Centric Design
                </h3>
                <p className="mt-2 text-gray-600">
                  Our design team focuses on user-friendly interfaces tailored
                  to diverse needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Impact Section */}
        <div className="mt-16 max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Our Global Impact
          </h2>
          <div className="mt-6 flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <GlobeAltIcon className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Worldwide Reach
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Serving over 50 countries, our Namaz Time Indicators are
                  trusted by mosques, businesses, and households globally.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <HeartIcon className="h-8 w-8 text-indigo-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Community Engagement
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We partner with local communities to donate devices to
                  underprivileged mosques, promoting accessibility to prayer
                  time solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 max-w-4xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            What Our Customers Say
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <div className="flex items-center mb-4">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="text-gray-600 italic">
                "The Mercury STAR Salat Indicator has transformed our mosque's
                prayer scheduling. It's accurate, reliable, and easy to use!"
              </p>
              <p className="mt-4 text-gray-900 font-semibold">
                - Imam Ahmed, Community Mosque
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <div className="flex items-center mb-4">
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <StarIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="text-gray-600 italic">
                "Excellent product and outstanding customer support. The team
                helped us customize our office's prayer time display perfectly."
              </p>
              <p className="mt-4 text-gray-900 font-semibold">
                - Sarah Khan, Office Manager
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 flex flex-col items-center justify-center gap-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Join Our Journey</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/products"
              className="rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Explore Our Collections
            </Link>
            {/* <Link
              to="/contact"
              className="rounded-full bg-gray-900 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Contact Us
            </Link>
            <Link
              to="/newsletter"
              className="rounded-full border border-indigo-600 px-7 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe to Newsletter
            </Link> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
