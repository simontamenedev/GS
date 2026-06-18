"use client"
import React from 'react';
import { Camera, Search } from 'lucide-react';

const Page = () => {
  // Sample data
  const galleryImages = [
    { id: 1, title: "Mining Operations", category: "Mining", image: "/images/gallery/1.jpg" },
    { id: 2, title: "Green Energy", category: "Energy", image: "/images/gallery/2.jpg" },
    { id: 4, title: "Electric Mobility", category: "Mobility", image: "/images/gallery/4.jpg" },
    { id: 6, title: "Tech Innovation", category: "Technology", image: "/images/gallery/6.jpg" },
  ];

  const categories = ['All', 'Mining', 'Energy',  'Mobility', 'Technology'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-green-600 dark:text-green-400">Gallery</span>
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A visual journey through our projects and impact
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
                  ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-purple-100 dark:from-green-900/30 dark:to-purple-900/30 flex items-center justify-center">
                <div className="text-6xl opacity-30">📷</div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">{image.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;