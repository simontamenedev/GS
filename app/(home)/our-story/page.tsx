"use client"
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-green-600 dark:text-green-400">Story</span>
          </h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Story Content */}
        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Beginning
            </h2>
            <p>
              GS Mining and Trading PLC was founded in 2015 with a clear vision: to transform Ethiopia's 
              mining sector through sustainable practices and innovation. What started as a small mining 
              operation has grown into a diversified company spanning green energy, smart infrastructure, 
              electric mobility, and technology solutions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Growth
            </h2>
            <p>
              Over the years, we've expanded our operations across Ethiopia and beyond, bringing integrated 
              solutions that address the continent's most pressing challenges. From mining to renewable energy, 
              from infrastructure to electric mobility, we've consistently pushed boundaries to create 
              sustainable value for our communities and partners.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p>
              Green Share Future is committed to transforming Ethiopia's future through renewable energy 
              systems, smart technologies, electric mobility, sustainable mining, digital infrastructure, 
              and strategic industrial solutions. The company strives to create innovative, environmentally 
              responsible, and economically impactful businesses that empower communities, create jobs, 
              accelerate technological advancement, and contribute to national development.
            </p>
          </div>

          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h2>
            <p>
              As we look to the future, we remain committed to our mission of driving sustainable 
              transformation across Africa. With our integrated approach and unwavering dedication to 
              excellence, we continue to build solutions that empower communities, protect the environment, 
              and create lasting economic impact.
            </p>
            <p className="mt-4 font-medium text-green-600 dark:text-green-400">
              Join us in building a sustainable future.
            </p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Page;