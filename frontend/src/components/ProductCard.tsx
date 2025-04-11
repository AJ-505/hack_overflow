// src/components/ProductCard.tsx
import React, { useState } from "react";

export type ProductCardProps = {
  name: string;
  description: string;
  initialUpvotes: number;
  category?: string; // optional
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  initialUpvotes,
  category,
}) => {
  // Local state for upvotes
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  // Increase upvote count when button clicked
  const handleUpvote = () => {
    setUpvotes((prev) => prev + 1);
  };

  return (
    <div className="bg-[#2c2535] text-white rounded-lg p-4 flex flex-col shadow">
      {/* Product info */}
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-300 mt-1 mb-2 flex-1">{description}</p>
      {category && (
        <span className="text-xs text-[#6a5acd] font-semibold uppercase mb-2">
          {category}
        </span>
      )}

      {/* Upvote area */}
      <div className="flex items-center justify-between mt-auto">
          <button
            onClick={handleUpvote}
            className="bg-[#6a5acd] text-white text-sm px-3 py-1 rounded hover:opacity-90 transition duration-200 flex flex-col items-center justify-center hover:cursor-pointer min-w-13"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-caret-up "
            viewBox="0 0 16 16"
          >
            <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
          </svg>
            {upvotes}
          </button>
        <a href="#" className="text-sm text-[#6a5acd] hover:underline">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
