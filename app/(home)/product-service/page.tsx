"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { services } from "@/constants/productsService";

export default function Page() {
  const t = useTranslations("Solutions");

  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            {t("title")}{" "}
            <span className="text-green-600">
              {t("titleHighlight")}
            </span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service)}
                className={`flex items-center gap-2 rounded-full px-5 py-3 transition-all ${
                  activeTab.id === service.id
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon size={18} />
                {t(`${service.id}.title`)}     
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-10">

          <div className="flex items-center gap-4 mb-6">
            <activeTab.icon
              className="text-green-600"
              size={45}
            />

            <div>
              <h2 className="text-3xl font-bold dark:text-white">
                {t(`${activeTab.id}.title`)}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {t(`${activeTab.id}.description`)}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {/* Products */}
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {t("products")}
              </h3>

              <div className="space-y-3">
                {t
                  .raw(`${activeTab.id}.products`)
                  .map((item: string) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="text-green-600"
                        size={18}
                      />
                      <span className="dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {t("industries")}
              </h3>

              <div className="flex flex-wrap gap-3">
                {t
                  .raw(`${activeTab.id}.industries`)
                  .map((item: string) => (
                    <span
                      key={item}
                      className="rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {t("benefits")}
              </h3>

              <div className="space-y-3">
                {t
                  .raw(`${activeTab.id}.benefits`)
                  .map((item: string) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        className="text-green-600"
                        size={18}
                      />
                      <span className="dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}