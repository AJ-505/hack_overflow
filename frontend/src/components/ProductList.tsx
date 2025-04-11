// src/components/ProductList.tsx
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import AddIncidentModal from "./AddIncidentModal";

type Product = {
  name: string;
  description: string;
  upvotes: number;
  category?: string;
};

const ProductList: React.FC = () => {
  // Example product data (could be fetched from an API)
  const [products, setProducts] = useState<Product[]>([
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
      upvotes: 348,
      category: "Dev Tools",
    },
    // ... more items if needed
  ]);

  // Modal open/close state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler to add a new incident to the products list
  const addIncident = (incident: {
    name: string;
    description: string;
    category: string;
  }) => {
    const newIncident: Product = {
      name: incident.name,
      description: incident.description,
      upvotes: 0, // start with zero upvotes
      category: incident.category,
    };
    setProducts((prev) => [...prev, newIncident]);
  };

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Trending Incidents</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
        {products.map((prod, idx) => (
          <ProductCard
            key={idx}
            name={prod.name}
            description={prod.description}
            initialUpvotes={prod.upvotes}
            category={prod.category}
          />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#6a5acd] text-white px-4 py-2 rounded hover:cursor-pointer hover:opacity-75 transition"
        >
          ✚ Add Incident
        </button>
      </div>

      {/* Modal for Adding New Incident */}
      <AddIncidentModal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addIncident}
      />
    </section>
  );
};

export default ProductList;
