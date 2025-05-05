import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/products";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  TagIcon,
  CubeIcon,
  SwatchIcon,
  ClipboardDocumentIcon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

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

  // Add classes for animations
  const accordionContentClass =
    "transition-[max-height] duration-300 ease-in-out overflow-hidden";
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
      <>
        <NavBar />
        <div className="container mx-auto px-6 mt-20 py-8 min-h-dvh">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Left Section: Image Slider + Thumbnails */}
            <div className="flex flex-col space-y-6">
              {/* Main Image */}
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg border">
                <img
                  className="w-full h-full object-scale-down"
                  src={data.images[currentImageIndex]}
                  alt={data.name}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex mt-4 space-x-4 overflow-x-auto">
                {data.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-24 h-24 cursor-pointer rounded-lg overflow-hidden bg-gray-200 transition-all ${
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
                <button
                  onClick={handlePrevImage}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/50/chevron-left.png"
                    alt="chevron-left"
                  />
                </button>
                <button
                  onClick={handleNextImage}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/material-rounded/50/chevron-right.png"
                    alt="chevron-right"
                  />
                </button>
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-extrabold text-gray-900">
                  {data.name}
                </h1>
                {data.tags && (
                  <div className="flex items-center space-x-2">
                    <TagIcon className="h-6 w-6 text-indigo-600" />
                    <span className="bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {data.tags}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Attributes */}
              <div className="space-y-4 p-4 rounded-lg bg-gray-100">
                <div className="flex items-center space-x-3">
                  <CubeIcon className="h-6 w-6 text-indigo-600" />
                  <span className="text-lg text-gray-700">
                    Size: {data.size}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClipboardDocumentIcon className="h-6 w-6 text-indigo-600" />
                  <span className="text-lg text-gray-700">
                    Type: {data.type}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <SwatchIcon className="h-6 w-6 text-indigo-600" />
                  <span className="text-lg text-gray-700 flex items-center">
                    Color: {data.color}{" "}
                    <span
                      className="ml-2 w-6 h-6 rounded-full border"
                      style={{ backgroundColor: data.color }}
                    ></span>
                  </span>
                </div>
              </div>

              {/* Accordions */}
              <div className="space-y-4">
                {/* Features Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("features")}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span className="capitalize text-xl font-semibold">
                        Features
                      </span>
                    </div>
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
                    className={accordionContentClass}
                    style={{
                      maxHeight:
                        openAccordion === "features" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-6 bg-gray-50 rounded-lg m-4">
                      <div className="flex flex-wrap gap-2">
                        {data.feature_list
                          ?.split(",")
                          .map((feature: string, index: number) => (
                            <div
                              key={index}
                              className="flex items-start space-x-2 p-3 bg-white rounded-lg shadow-sm"
                            >
                              <div className="flex-shrink-0">
                                <svg
                                  className="w-5 h-5 text-indigo-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-800">
                                  {feature.trim()}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-indigo-800">
                              Feature Information
                            </h3>
                            <div className="mt-2 text-sm text-indigo-700">
                              <p>
                                These features represent the core capabilities
                                of this product. For additional feature
                                requests, please contact our product development
                                team.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("description")}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="capitalize text-xl font-semibold">
                        Description
                      </span>
                    </div>
                    <img
                      width="20"
                      height="20"
                      className={`${chevronIconClass} ${
                        openAccordion === "description"
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className={accordionContentClass}
                    style={{
                      maxHeight:
                        openAccordion === "description" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-6 bg-gray-50 rounded-lg m-4">
                      <div className="bg-white rounded-lg shadow-sm p-5">
                        <div className="prose max-w-none text-gray-700">
                          <p>{data.description}</p>
                        </div>
                      </div>

                      {data.highlights && (
                        <div className="mt-6">
                          <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Product Highlights
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.highlights
                              .split(",")
                              .map((highlight: string, index: number) => (
                                <div
                                  key={index}
                                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                                >
                                  <div className="flex-shrink-0">
                                    <svg
                                      className="w-5 h-5 text-indigo-600"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                      />
                                    </svg>
                                  </div>
                                  <div>
                                    <p className="text-sm text-gray-700">
                                      {highlight.trim()}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-indigo-800">
                              Product Information
                            </h3>
                            <div className="mt-2 text-sm text-indigo-700">
                              <p>
                                For additional product documentation and user
                                guides, please refer to the resources section of
                                our website.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("support")}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span className="capitalize text-xl font-semibold">
                        Support & Service
                      </span>
                    </div>
                    <img
                      width="20"
                      height="20"
                      className={`${chevronIconClass} ${
                        openAccordion === "support" ? "rotate-180" : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className={accordionContentClass}
                    style={{
                      maxHeight: openAccordion === "support" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-6 bg-gray-50 rounded-lg m-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              xmlns="http so://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Warranty Coverage
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {data.warranty || "6 Months standard warranty"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Technical Specifications
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {data.specifications ||
                                "See product manual for details"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Call Support
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {data.call_support ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Available
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Not Available
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                          <div className="flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              Pickup & Drop Service
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {data.pickup_drop ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Available
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                  Not Available
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-6 w-6 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-indigo-800">
                              Support Information
                            </h3>
                            <div className="mt-2 text-sm text-indigo-700">
                              <p>
                                Our support team is available Monday through
                                Friday, 9AM to 5PM. For urgent matters, please
                                contact our 24/7 hotline.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQs Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("faqs")}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-2 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="capitalize text-xl font-semibold">
                        Frequently Asked Questions
                      </span>
                    </div>
                    <img
                      width="20"
                      height="20"
                      className={`${chevronIconClass} ${
                        openAccordion === "faqs" ? "rotate-180" : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className={accordionContentClass}
                    style={{
                      maxHeight: openAccordion === "faqs" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-6">
                      {/* Dynamic FAQs from API */}
                      {data.faqs_list &&
                        data.faqs_list.split(",").length > 0 && (
                          <div className="mb-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                              Product-Specific FAQs
                            </h3>
                            <div className="space-y-4">
                              {data.faqs_list
                                .split(",")
                                .map((faq: string, index: number) => (
                                  <div
                                    key={index}
                                    className="bg-gray-50 rounded-lg p-4 shadow-sm"
                                  >
                                    <div className="font-medium text-indigo-600">
                                      {faq.trim()}
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        )}

                      {/* Static FAQs with better formatting */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          General FAQs
                        </h3>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="p-4 border-b">
                            <h4 className="text-md font-semibold text-gray-900 flex items-center">
                              <svg
                                className="w-5 h-5 mr-2 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              What is the warranty policy?
                            </h4>
                          </div>
                          <div className="p-4 bg-gray-50">
                            <p className="text-gray-700">
                              All products come with a standard 1-year
                              manufacturer warranty that covers defects in
                              materials and workmanship. Extended warranty
                              options are available at checkout.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="p-4 border-b">
                            <h4 className="text-md font-semibold text-gray-900 flex items-center">
                              <svg
                                className="w-5 h-5 mr-2 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              What is your return policy?
                            </h4>
                          </div>{" "}
                          <div className="p-4 bg-gray-50">
                            <p className="text-gray-700">
                              We offer a 30-day return policy for most products.
                              Items must be returned in their original packaging
                              and in new condition. Shipping costs for returns
                              are the responsibility of the customer unless the
                              item is defective.
                            </p>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                          <div className="p-4 border-b">
                            <h4 className="text-md font-semibold text-gray-900 flex items-center">
                              <svg
                                className="w-5 h-5 mr-2 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              How do I schedule a service appointment?
                            </h4>
                          </div>
                          <div className="p-4 bg-gray-50">
                            <p className="text-gray-700">
                              Service appointments can be scheduled through our
                              customer service line or via your account on our
                              website. For eligible products, we offer pickup
                              and drop service at your convenience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications Accordion */}
                <div className="border-b overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 text-left"
                    onClick={() => toggleAccordion("specifications")}
                  >
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-indigo-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                        />
                      </svg>

                      <span className="capitalize text-xl font-semibold ml-2">
                        Technical Specifications
                      </span>
                    </div>
                    <img
                      width="20"
                      height="20"
                      className={`${chevronIconClass} ${
                        openAccordion === "specifications"
                          ? "rotate-180"
                          : "rotate-0"
                      }`}
                      src="https://img.icons8.com/material-rounded/50/chevron-down.png"
                      alt="chevron"
                    />
                  </button>
                  <div
                    className={accordionContentClass}
                    style={{
                      maxHeight:
                        openAccordion === "specifications" ? "1000px" : "0px",
                    }}
                  >
                    <div className="p-4">
                      {data.specification ? (
                        <p>{data.specification}</p>
                      ) : (
                        <p className="text-gray-600">
                          Oh ho! no data available
                        </p>
                      )}
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
      </>
    )
  );
};

export default ProductDetailPage;
