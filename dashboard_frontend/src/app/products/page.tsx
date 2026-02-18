"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Card from "@/components/Card";
import { mockProducts, Product } from "@/data/mockData";
import { Package, Plus, Edit, Trash2, TrendingUp, AlertCircle } from "lucide-react";

// PUBLIC_INTERFACE
/**
 * Modern products page with enhanced grid layout and visual improvements
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
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#111827] mb-2">Products</h2>
            <p className="text-[#6B7280] text-lg">Manage your product catalog and inventory</p>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#16A34A] to-[#15803D] text-white rounded-xl hover:shadow-lg transition-all font-medium">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all capitalize ${
                filterCategory === category
                  ? "bg-gradient-to-r from-[#111827] to-[#1f2937] text-white shadow-lg"
                  : "bg-white text-[#6B7280] border border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300">
              <div className="space-y-4">
                {/* Product Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#15803D] rounded-xl flex items-center justify-center shadow-md">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#111827] mb-1">{product.name}</h3>
                      <p className="text-sm text-[#6B7280]">{product.category}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                      product.stock > 20
                        ? "bg-green-100 text-green-800"
                        : product.stock > 0
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stock > 0 ? (
                      <>
                        <div className={`w-1.5 h-1.5 rounded-full ${product.stock > 20 ? "bg-green-500" : "bg-yellow-500"}`}></div>
                        {product.stock} in stock
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3" />
                        Out of stock
                      </>
                    )}
                  </span>
                </div>

                {/* Product Details */}
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#6B7280]">Price</span>
                    <span className="text-xl font-bold text-[#111827]">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#6B7280]">Units Sold</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#111827]">
                      <TrendingUp className="w-4 h-4 text-[#16A34A]" />
                      {product.sold}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#6B7280]">Product ID</span>
                    <span className="text-sm text-[#6B7280] font-mono">{product.id}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#111827] text-white rounded-xl hover:bg-[#1f2937] transition-colors text-sm font-medium">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="px-4 py-2.5 border border-gray-200 text-[#EF4444] rounded-xl hover:bg-red-50 transition-colors text-sm font-medium">
                    <Trash2 className="w-4 h-4" />
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
