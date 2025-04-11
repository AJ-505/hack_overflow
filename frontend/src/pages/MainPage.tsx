// App.tsx
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#5f5a78] flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Banner Section */}
      <Hero />

      {/* Product List */}
      <main className="flex-grow">
        <ProductList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
