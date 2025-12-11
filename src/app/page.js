"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  // Load all products on first render
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios.get("/api/product", {
          headers: { "x-internal": "ok" },
        });

        const data = res.data; // ✅ axios returns JSON already
        setProducts(data);
        console.log("ALL PRODUCTS:", data);
      } catch (err) {
        console.log("ERROR LOADING PRODUCTS:", err);
      }
    }

    loadProducts();
  }, []);

  // Create new product
  async function addProduct() {
    try {
      const res = await axios.post(
        "/api/product",
        {
          name: "New Product " + Date.now(),
          price: Math.floor(Math.random() * 5000),
        },
        {
          headers: { "x-internal": "ok" },
        }
      );

      console.log("PRODUCT CREATED:", res.data);

      // Refresh product list after adding
      setProducts((prev) => [...prev, res.data.product]);
    } catch (err) {
      console.log("ERROR ADDING PRODUCT:", err);
    }
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-6 p-6 bg-zinc-50 dark:bg-black text-black dark:text-white">

      <h1 className="text-2xl font-bold">Ram Adventure Product Manager</h1>

      {/* Add Product Button */}
      <button
        onClick={addProduct}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Add Product
      </button>

      {/* Product List */}
      <div className="mt-6 w-full max-w-md bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-3">Products:</h2>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul className="space-y-2">
            {products.map((p) => (
              <li
                key={p._id}
                className="p-2 bg-zinc-100 dark:bg-zinc-700 rounded"
              >
                <strong>{p.name}</strong> — ₹{p.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
