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
      <div className="bg-gray-100 text-gray-800">
        <NavBar />

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* Left Section: Image Slider */}
            <div className="flex flex-col">
              {/* Main Product Image */}
              <div className="relative">
                <img
                  className="w-full rounded-lg shadow-lg"
                  src={data.images[currentImageIndex]}
                  alt={data.name}
                />
              </div>

              {/* Image Thumbnails */}
              <div className="flex mt-4 space-x-4 overflow-x-auto">
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className="w-24 h-24 cursor-pointer rounded-lg overflow-hidden bg-gray-200"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt={`Thumbnail ${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div className="space-y-6">
              {/* Product Name */}
              <h1 className="text-4xl font-bold text-gray-900">{data.name}</h1>

              {/* Product Size */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-600">
                  Size:
                </span>
                <span className="text-lg text-gray-800">{data.size}</span>
              </div>

              {/* Product Price */}
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-600">
                  Price:
                </span>
                <span className="text-xl text-indigo-600">
                  {data.price_range}
                </span>
              </div>

              {/* Product Features */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600">
                  {data.feature_list
                    ? data.feature_list.split(",").map((feature, index) => (
                        <li key={index} className="text-lg">
                          {feature.trim()}
                        </li>
                      ))
                    : null}
                </ul>
              </div>

              {/* Product Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Description
                </h3>
                <p className="text-lg text-gray-600">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  );
};

export default ProductDetailPage;
