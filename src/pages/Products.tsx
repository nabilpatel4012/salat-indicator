import React from "react";
import NavBar from "../components/NavBar";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/products";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const Products: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Error fetching products.
      </div>
    );

  const products = data?.items || [];

  return (
    <div className="text-gray-600 work-sans leading-normal text-base tracking-normal h-dvh">
      <NavBar />
      <div className="flex flex-wrap justify-center gap-10 py-24 min-h-dvh">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <ProductCard
              id={product.id}
              imageUrls={product.images?.[0] || "/fallback-image.jpg"} // Ensure at least one image
              name={product.name}
              alt={product.name}
              size={product.size}
              price_range={product.price_range}
              tags={product.tags}
              total_features={product.total_features - 1}
            />
          </Link>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
