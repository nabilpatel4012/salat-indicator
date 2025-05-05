import { Link } from "react-router-dom";
import { useState } from "react";
import {
  BookOpenIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  ClockIcon,
  ArrowPathIcon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const Resources = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-zinc-100 text-gray-900">
      <NavBar />
      <div className="px-6 py-8 sm:py-8 lg:py-12 max-w-screen-xl mx-auto mt-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-black-700">Resources</h1>
          <p className="mt-6 text-xl font-medium text-gray-700 max-w-3xl mx-auto">
            Access guides, tutorials, and support materials for Mercury STAR
            Salat Indicators.
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center p-10 bg-white shadow-lg rounded-xl">
            <ClockIcon className="h-16 w-16 text-indigo-600 mx-auto" />
            <h2 className="mt-6 text-3xl font-bold text-black-700">
              Coming Soon
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're currently preparing a comprehensive resource center for our
              products. Check back soon for user manuals, installation guides,
              and more.
            </p>
            <div className="mt-8 flex items-center justify-center">
              <ArrowPathIcon className="h-6 w-6 text-indigo-600 animate-spin" />
              <span className="ml-2 text-indigo-600 font-medium">
                In development
              </span>
            </div>
          </div>
        </div>

        {/* Future Resources Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-black-700 text-center mb-8">
            Coming Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <DocumentTextIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">User Manuals</h3>
              <p className="mt-2 text-gray-600">
                Comprehensive guides for setup and operation of all our
                products.
              </p>
              <div className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                Coming Soon
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <VideoCameraIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Tutorial Videos</h3>
              <p className="mt-2 text-gray-600">
                Step-by-step video guides for installation and troubleshooting.
              </p>
              <div className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                Coming Soon
              </div>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-xl">
              <AcademicCapIcon className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-xl font-semibold">Knowledge Base</h3>
              <p className="mt-2 text-gray-600">
                Frequently asked questions and technical support articles.
              </p>
              <div className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                Coming Soon
              </div>
            </div>
          </div>
        </div>

        {/* Information Panel */}
        <div className="mt-16 p-6 bg-indigo-50 rounded-lg border border-indigo-100 max-w-4xl mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <BookOpenIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-indigo-800">
                Need Immediate Help?
              </h3>
              <div className="mt-2 text-indigo-700">
                <p>
                  While our resource center is under development, our support
                  team is available to assist you with any questions or
                  concerns.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-4 ">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center  bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 rounded-full"
                  >
                    Contact Support
                  </button>
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm border border-indigo-200 hover:bg-indigo-50"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-100"
            style={{ zIndex: 100 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-2/5 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-gray-600" />
                  <p className="text-lg">
                    Email -{" "}
                    <a
                      href="mailto:support@salatindicator.com"
                      className="text-blue-500 hover:underline"
                    >
                      support@salatindicator.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-gray-600" />
                  <p className="text-lg">
                    Phone -{" "}
                    <a
                      href="tel:+919767860654"
                      className="text-blue-500 hover:underline"
                    >
                      +91 9767860654
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-gray-600" />
                  <p className="text-lg">
                    Phone -{" "}
                    <a
                      href="tel:+919767860832"
                      className="text-blue-500 hover:underline"
                    >
                      +91 9767860832
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                For any inquiries, please reach out via phone or email.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
