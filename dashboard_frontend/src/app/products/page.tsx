"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockProducts, Product } from "@/data/mockData";

// PUBLIC_INTERFACE
/**
 * Products page displaying all products with inventory and sales data
 */
export default function ProductsPage() {
  const [products] = useState<Product[]>(mockProducts);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((p) => p.category === filterCategory);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-2">Products</h2>
            <p className="text-[#6B7280]">Manage your product catalog and inventory.</p>
          </div>
          <button className="px-6 py-2 bg-[#16A34A] text-white rounded-lg hover:bg-[#15803D] transition-colors font-medium">
            + Add Product
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                filterCategory === category
                  ? "bg-[#111827] text-white"
                  : "bg-white text-[#6B7280] border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827]">{product.name}</h3>
                    <p className="text-sm text-[#6B7280]">{product.category}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.stock > 20
                        ? "bg-green-100 text-green-800"
                        : product.stock > 0
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B7280]">Price</span>
                    <span className="text-lg font-bold text-[#111827]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B7280]">Units Sold</span>
                    <span className="text-sm font-semibold text-[#111827]">{product.sold}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#6B7280]">Product ID</span>
                    <span className="text-sm text-[#6B7280]">{product.id}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button className="flex-1 px-4 py-2 bg-[#111827] text-white rounded-lg hover:bg-[#1f2937] transition-colors text-sm font-medium">
                    Edit
                  </button>
                  <button className="px-4 py-2 border border-gray-200 text-[#6B7280] rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                    Delete
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
