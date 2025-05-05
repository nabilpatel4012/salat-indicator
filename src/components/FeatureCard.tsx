import React from "react";

interface FeatureCardProps {
  src: string;
  heading: string;
  paragraph: string;
  alt: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  src,
  heading,
  paragraph,
  alt,
}) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="p-6">
        <div className="flex items-center mb-5">
          <div className="flex-shrink-0 rounded-full bg-indigo-100 p-3">
            <img src={src} alt={alt} className="w-8 h-8" />
          </div>
          <h3 className="ml-4 text-xl font-bold text-gray-900">{heading}</h3>
        </div>

        <div className="mt-2">
          <p className="text-gray-600">{paragraph}</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
