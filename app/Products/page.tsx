"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { mockProducts } from "../services/products";
import { mockCategories } from "../services/categories";
import { useSearchParams } from "next/navigation";
import EmptyState from "./EmptyState";
import ProductGrid from "./ProductGrid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function CategoryPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const activeCategory = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("low-high");
  const [discountOnly, setDiscountOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);

  let filteredProducts = mockProducts;

  // Only filter if category exists
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category,
    );
  }

  //  Search filter
  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  //  Discount filter
  if (discountOnly) {
    filteredProducts = filteredProducts.filter((product) => product.discount);
  }

  //  In Stock filter
  if (inStockOnly) {
    filteredProducts = filteredProducts.filter((product) => product.inStock);
  }

  // Sorting
  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
    <main className="flex-1">
        {/* All the Categories */}

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-3 overflow-x-auto">
          {/* ALL */}
          <Link
            href="/Products"
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
              !activeCategory
                ? "bg-yellow-400 text-black font-medium"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All
          </Link>

          {/* Categories */}
          {mockCategories.map((cat, index) => (
            <Link
              key={index}
              href={`/Products?category=${encodeURIComponent(cat.category)}`}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeCategory === cat.category
                  ? "bg-yellow-400 text-black font-medium"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {cat.category}
            </Link>
          ))}
        </div>
      </div>

      {/* FILTER BAR */}
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search in this category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg pl-10 pr-4 py-2 w-full"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-6 justify-between">
          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-md px-3 py-2 "
          >
            <option value="low-high">Price: Low-High</option>
            <option value="high-low">Price: High-Low</option>
          </select>

         <div className="flex gap-4">
           {/* Discount */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={discountOnly}
              onChange={() => setDiscountOnly(!discountOnly)}
            />
            Discounts
          </label>

          {/* In Stock */}
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={() => setInStockOnly(!inStockOnly)}
            />
            In Stock
          </label>
         </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredProducts.length === 0 ? (
          <EmptyState />
        ) : (
          <ProductGrid products={filteredProducts} />
        )}
      </div>
    </main>
    <Footer />
    </div>
  );
}
