import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/products";
import Footer from "../components/Footer";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const productId = id!!;
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: ({ queryKey }) => getProductById(queryKey[1]),
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>("features");
  // Add this class to handle the height animation
  const accordionContentClass =
    "transition-[max-height] duration-300 ease-in-out overflow-hidden";

  // Add this class for the chevron icon rotation
  const chevronIconClass = "transform transition-transform duration-300";

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data?.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data?.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Error fetching product.
      </div>
    );

  return (
    data && (
      <div className="mt-10 text-gray-800">
        <NavBar />
        <div className="container mx-auto px-6 py-16 min-h-dvh">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Section: Image Slider + Product Attributes */}
            <div className="flex flex-col space-y-6">
              {/* Image Slider */}
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg border">
                <img
                  className="w-full h-full object-scale-down"
                  src={data.images[currentImageIndex]}
                  alt={data.name}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex mt-4 space-x-4 overflow-x-auto">
                {data.images.map((image: any, index: any) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-[100px] h-[100px] cursor-pointer rounded-lg overflow-hidden bg-gray-200 transition-all ${
                      currentImageIndex === index
                        ? "border-4 border-purple-600"
                        : "border-2 border-transparent"
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt={`Thumbnail ${index}`}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button onClick={handlePrevImage}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/50/chevron-left.png"
                    alt="chevron-left"
                  />
                </button>
                <button onClick={handleNextImage}>
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/50/chevron-right.png"
                    alt="chevron-right"
                  />
                </button>
              </div>
            </div>

            {/* Right Section: Product Details + Accordions */}
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h1 className="text-5xl font-extrabold text-gray-900">
                  {data.name}
                </h1>
                {data.tags && (
                  <span className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {data.tags}
                  </span>
                )}
              </div>
              <div className="space-y-4 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-gray-600">Size</span>
                  <span className="bg-indigo-200 text-black text-sm font-semibold px-3 py-1 rounded-full">
                    {data.size}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-gray-600">Type</span>
                  <span className="bg-indigo-200 text-black text-sm font-semibold px-3 py-1 rounded-full">
                    {data.type}
                  </span>
                </div>
                <div className="flex items-center align-middle space-x-3">
                  <span className="text-xl text-gray-600">Color</span>
                  <div
                    className="border-2 border-slate-400 rounded-full h-5 w-5"
                    style={{ backgroundColor: data.color.toLowerCase() }}
                  ></div>
                  <span className="text-md font-semibold">{data.color}</span>
                </div>
              </div>
              <div className="space-y-4">
                {/* Features Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("features")}
                  >
                    <span className="capitalize text-xl font-semibold">
                      Features
                    </span>
                    <img
                      width="20"
                      height="20"
                      className={`${chevronIconClass} ${
                        openAccordion === "features" ? "rotate-180" : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className={`${accordionContentClass}`}
                    style={{
                      maxHeight:
                        openAccordion === "features" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-4">
                      <ul className="list-none">
                        {data.feature_list
                          .split(",")
                          .map((feature: any, index: any) => (
                            <li
                              key={index}
                              className="mb-4 bg-indigo-200 text-black text-sm font-semibold px-3 py-1 rounded-full w-fit"
                            >
                              {feature.trim()}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Description Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("description")}
                  >
                    <span className="capitalize text-xl font-semibold">
                      Description
                    </span>
                    <img
                      width="20"
                      height="20"
                      className={`transform transition-transform duration-300 ${
                        openAccordion === "description"
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight:
                        openAccordion === "description" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-4">
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>

                {/* Support Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("support")}
                  >
                    <span className="capitalize text-xl font-semibold">
                      Support
                    </span>
                    <img
                      width="20"
                      height="20"
                      className={`transform transition-transform duration-300 ${
                        openAccordion === "support" ? "rotate-180" : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: openAccordion === "support" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-4">
                      <p>
                        <strong className="me-2">Warranty:</strong>
                        {"  "}
                        {data.warranty || "6 Months standard warranty"}
                      </p>
                      <p>
                        <strong className="me-2">Technical Specs:</strong>
                        {"  "}
                        {data.specifications ||
                          "See product manual for details"}
                      </p>
                      <p>
                        <strong className="me-2">Call Support:</strong>
                        {"  "}
                        {data.call_support ? "Yes" : "No"}
                      </p>
                      <p>
                        <strong className="me-2">
                          Pickup and Drop Service:
                        </strong>
                        {"  "}
                        {data.pickup_drop ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* FAQ Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("faq")}
                  >
                    <span className="capitalize text-xl font-semibold">
                      FAQ
                    </span>
                    <img
                      width="20"
                      height="20"
                      className={`transform transition-transform duration-300 ${
                        openAccordion === "faq" ? "rotate-180" : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className="transition-[max-height] duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: openAccordion === "faq" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-4">
                      <p className="mb-2">
                        <strong>Q:</strong> What is the warranty?
                      </p>
                      <p className="mb-4">
                        <strong>A:</strong> 1-year warranty included.
                      </p>
                      <p className="mb-2">
                        <strong>Q:</strong> Return policy?
                      </p>
                      <p>
                        <strong>A:</strong> 30-day return policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-500 transition"
              >
                Contact for Queries
              </button>
            </div>
          </div>
        </div>

        <Footer />

        {/* Contact Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-lg font-semibold mb-4">
                Email:{" "}
                <a href="mailto:support@example.com" className="text-blue-500">
                  support@example.com
                </a>
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ProductDetailPage;
