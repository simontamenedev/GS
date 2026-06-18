"use client"
import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Page = () => {
  const testimonials = [
    {
      id: 1,
      name: "Abebe Kebede",
      role: "CEO, Green Energy Solutions",
      content: "GS Mining has been instrumental in our transition to sustainable energy. Their expertise and commitment to quality is unmatched.",
      rating: 5,
      image: "/images/testimonials/1.jpg"
    },
    {
      id: 2,
      name: "Tigist Haile",
      role: "Project Manager, Infrastructure Corp",
      content: "Working with GS Mining on our infrastructure project was seamless. They delivered ahead of schedule with exceptional quality.",
      rating: 5,
      image: "/images/testimonials/2.jpg"
    },
    {
      id: 3,
      name: "Daniel Worku",
      role: "Director, Tech Innovation Hub",
      content: "The digital transformation solutions provided by GS Mining have revolutionized our operations. Highly recommended!",
      rating: 4,
      image: "/images/testimonials/3.jpg"
    },
    {
      id: 4,
      name: "Mekdes Ayele",
      role: "Operations Lead, Mobility Solutions",
      content: "Their electric mobility solutions are changing the game in Ethiopia. Reliable, efficient, and forward-thinking.",
      rating: 5,
      image: "/images/testimonials/4.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('all');

  const tabs = ['all', 'mining', 'energy', 'infrastructure', 'mobility', 'technology'];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 mb-4">
            <Star className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">Testimonials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What Our <span className="text-green-600 dark:text-green-400">Clients Say</span>
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real stories from partners who trusted us to deliver
          </p>
        </div>

        
        {/* Testimonial Cards - Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <Quote className="w-8 h-8 text-green-200 dark:text-green-800 absolute -top-1 -left-1 opacity-50" />
                <p className="text-gray-700 dark:text-gray-300 pl-6 leading-relaxed">
                  {testimonial.content}
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