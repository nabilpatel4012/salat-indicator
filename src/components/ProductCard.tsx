import React from "react";
import size_img from "../assets/size.png";
import feature_img from "../assets/feature.png";

interface PropertyCardProps {
  id: string;
  tags: string;
  imageUrls: string;
  name: string;
  alt?: string;
  size: string;
  price_range: string;
  total_features: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  tags,
  imageUrls,
  name,
  alt = "Property Image",
  size,
  price_range,
  total_features,
}) => {
  return (
    <div
      className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border pt-5"
      key={id}
    >
      <div className="relative w-full h-56 md:h-64">
        <img
          alt={alt}
          src={imageUrls}
          className="w-full h-full object-cover"
          onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
        />
        {tags && (
          <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {tags}
          </span>
        )}
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">Price: {price_range}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex gap-2 items-center">
            <img className="h-5 w-5" src={size_img} alt="Size" />
            <span className="font-semibold text-black">{size}</span>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-5 w-5" src={feature_img} alt="feature" />
            <span className="font-semibold text-black">
              {total_features}+ features
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
