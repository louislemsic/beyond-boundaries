
"use client"

import { useState } from "react"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HIVDataPage() {
  const [activeTab, setActiveTab] = useState("global")

  // Global HIV Statistics Data
  const globalData = [
    { year: '2019', infections: 1.7, deaths: 0.69 },
    { year: '2020', infections: 1.5, deaths: 0.65 },
    { year: '2021', infections: 1.3, deaths: 0.61 },
    { year: '2022', infections: 1.3, deaths: 0.58 },
    { year: '2023', infections: 1.2, deaths: 0.54 },
  ]

  // Regional HIV Distribution Data
  const regionalData = [
    { name: "Eastern and Southern Africa", value: 20.6 },
    { name: "Western and Central Africa", value: 4.9 },
    { name: "Asia and the Pacific", value: 6.0 },
    { name: "Western and Central Europe and North America", value: 2.2 },
    { name: "Latin America", value: 2.3 },
    { name: "Eastern Europe and Central Asia", value: 1.8 },
    { name: "Caribbean", value: 0.3 },
    { name: "Middle East and North Africa", value: 0.2 }
  ]

  // Treatment Coverage Data
  const treatmentData = [
    { category: "Adults", coverage: 75 },
    { category: "Children", coverage: 52 },
    { category: "Pregnant Women", coverage: 85 },
    { category: "Key Populations", coverage: 43 }
  ]

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#a64d79', '#674ea7', '#e06666', '#f6b26b']

  return (
    <main className="min-h-screen">
        <div className="bg-bc-1"> <NavBar /></div>
     
      
      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-80">
        <Image 
          src={`${basePath}/images/hiv-data.jpg`} 
          alt="Latest HIV Data Banner" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Latest Data about HIV</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">By Hazel</span>
          <span>April 20, 2025</span>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            This article presents the most recent data on the global HIV epidemic, 
            including infection rates, treatment coverage, and regional distribution. 
            The data shows significant progress in addressing HIV worldwide, though 
            challenges remain in certain regions and demographic groups.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab("global")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "global"
                  ? "border-[#e22226] text-[#e22226]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Global Trends
            </button>
            <button
              onClick={() => setActiveTab("regional")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "regional"
                  ? "border-[#e22226] text-[#e22226]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Regional Distribution
            </button>
            <button
              onClick={() => setActiveTab("treatment")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "treatment"
                  ? "border-[#e22226] text-[#e22226]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Treatment Coverage
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === "global" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Global HIV Trends (2019-2023)</h2>
              <p className="mb-6">
                The chart below shows the annual new HIV infections and AIDS-related deaths 
                worldwide from 2019 to 2023, measured in millions. There has been a steady 
                decline in both metrics over this period, demonstrating progress in global 
                HIV prevention and treatment efforts.
              </p>
              <div className="h-80 w-full bg-gray-50 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={globalData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="infections" name="New HIV Infections (millions)" fill="#e22226" />
                    <Bar dataKey="deaths" name="AIDS-related Deaths (millions)" fill="#636363" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === "regional" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Regional HIV Distribution</h2>
              <p className="mb-6">
                This chart displays the distribution of people living with HIV across different 
                world regions in 2023. Eastern and Southern Africa continues to have the highest 
                burden, accounting for more than half of all people living with HIV globally.
              </p>
              <div className="h-96 w-full bg-gray-50 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={regionalData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {regionalData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value} million`, "People Living with HIV"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === "treatment" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">HIV Treatment Coverage</h2>
              <p className="mb-6">
                The chart below shows the percentage of different population groups who had access 
                to antiretroviral therapy (ART) in 2023. While progress has been made, significant 
                gaps remain, particularly in treatment access for children and key populations.
              </p>
              <div className="h-80 w-full bg-gray-50 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={treatmentData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} unit="%"/>
                    <YAxis dataKey="category" type="category" width={120} />
                    <Tooltip formatter={(value) => [`${value}%`, "ART Coverage"]} />
                    <Legend />
                    <Bar dataKey="coverage" name="ART Coverage (%)" fill="#e22226" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>

        {/* Key Findings Section */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>New HIV infections have decreased by approximately 29% from 2019 to 2023</li>
            <li>AIDS-related deaths have decreased by about 22% in the same period</li>
            <li>Eastern and Southern Africa remains the region most affected by HIV</li>
            <li>Treatment coverage is highest among pregnant women (85%) and lowest among key populations (43%)</li>
            <li>Children continue to have significantly lower treatment access compared to adults</li>
          </ul>
        </div>

        {/* Methodology and Sources */}
        <div className="border-t border-gray-300 pt-6">
          <h2 className="text-xl font-bold mb-3">Methodology and Sources</h2>
          <p>
            The data presented in this article comes from UNAIDS, the World Health Organization, 
            and national health surveys. Figures for 2023 represent the most recent estimates 
            available at the time of publication. Regional classifications follow the UNAIDS 
            geographical divisions. Treatment coverage is defined as the percentage of people 
            living with HIV who have access to antiretroviral therapy.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}