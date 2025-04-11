import React from "react";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  // Example data (could be fetched from an API):
  const products = [
    {
      name: "Canva Visual Suite 2.0",
      description: "Meet Canva 3.0, AI, and more in one creation tool.",
      upvotes: 1245,
      category: "Design Tools",
    },
    {
      name: "Pippit AI",
      description: "Your smart video creator for marketing success",
      upvotes: 347,
      category: "AI / Video Art",
    },
    {
      name: "Promptflow",
      description: "Designers using Cursor, where do we jump in?",
      upvotes: 190,
      category: "Dev Tools",
    },
    // ... more items
  ];

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">
        Trending Incidents
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((prod, idx) => (
          <ProductCard
            key={idx}
            name={prod.name}
            description={prod.description}
            upvotes={prod.upvotes}
            category={prod.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
