"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { categories, galleryImages } from "@/constants/gallary";

const Page = () => {
  const navigation = useTranslations("Navigation");
  const gallery = useTranslations("Gallery");

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            <span className="text-green-600 dark:text-green-400">
              {navigation("gallery")}
            </span>
          </h1>

          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {gallery("subtitle")}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {gallery(`categories.${category.toLowerCase()}`)}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {gallery(`items.${item.category.toLowerCase()}`)}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gallery(`categories.${item.category.toLowerCase()}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;