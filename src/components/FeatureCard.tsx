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
    <div className="flex items-start gap-4 border-2 border-slate-300 rounded-lg p-6">
      <span className="shrink-0 rounded-lg bg-gray-100 p-4 mt-auto mb-auto">
        <img src={src} alt={alt} />
      </span>
      <div>
        <h2 className="text-lg font-bold">{heading}</h2>

        <p className="mt-1 text-sm text-gray-600">{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
