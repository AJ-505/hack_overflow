import React from "react";

type ProductCardProps = {
  name: string;
  description: string;
  upvotes: number;
  category?: string; // optional
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  upvotes,
  category,
}) => {
  return (
    <div className="bg-[#2c2535] text-white rounded-lg p-4 flex flex-col shadow">
      {/* Product info */}
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-300 mt-1 mb-2 flex-1">
        {description}
      </p>

      {category && (
        <span className="text-xs text-[#6a5acd] font-semibold uppercase mb-2">
          {category}
        </span>
      )}

      {/* Upvote area */}
      <div className="flex items-center justify-between mt-auto">
        <button className="bg-[#6a5acd] text-white text-sm px-3 py-1 rounded hover:opacity-90">
          {upvotes} Upvotes
        </button>
        <a
          href="#"
          className="text-sm text-[#6a5acd] hover:underline"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
