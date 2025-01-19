import React from 'react';

const Section8 = () => {
  return (
    <section className="h-auto px-4 sm:px-6 md:px-10 lg:px-[150px] flex flex-col text-[#f8f7f6] bg-[#173180] py-8 sm:py-10 md:py-32">
      <div className="text-center mb-8">
        <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-bold">
          HOW ARE WE DIFFERENT FROM OTHERS?
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-white">
          {/* Table Header */}
          <thead>
            <tr className="bg-[#0D3A87]">
              <th className="border border-white text-left p-3 font-semibold"> </th>
              <th className="border border-white text-left p-3 font-semibold">
                ADAMYA PROJECTS
              </th>
              <th className="border border-white text-left p-3 font-semibold">
                TRADITIONAL CLOTHING MANUFACTURERS
              </th>
              <th className="border border-white text-left p-3 font-semibold">
                PRINT-ON-DEMAND COMPANIES
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <td className="border border-white p-3">Cost-Efficient for Both Large & Small Orders</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
            </tr>
            <tr>
              <td className="border border-white p-3">Flexible Minimum Order Quantities (MOQ)</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">✔</td>
            </tr>
            <tr>
              <td className="border border-white p-3">End-to-End Design & Delivery Solutions</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
            </tr>
            <tr>
              <td className="border border-white p-3">Seasonal & Custom Collections</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
            </tr>
            <tr>
              <td className="border border-white p-3">Comprehensive Product Development</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
            </tr>
            <tr>
              <td className="border border-white p-3">Custom Branding & Packaging</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">✔</td>
            </tr>
            <tr>
              <td className="border border-white p-3">Exclusive, 100% Customizable Products</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
            </tr>
            <tr>
              <td className="border border-white p-3">Trend Analysis & Concept Ideation</td>
              <td className="border border-white text-center">✔</td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
              <td className="border border-white text-center">
                <span className="text-red-500">✖</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Section8;
