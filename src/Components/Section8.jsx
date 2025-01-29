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
              <th className="border border-white text-center p-3 font-semibold">
                ADAMYA PROJECTS
              </th>
              <th className="border border-white text-center p-3 font-semibold">
                TRADITIONAL CLOTHING MANUFACTURERS
              </th>
              <th className="border border-white text-center p-3 font-semibold">
                PRINT-ON-DEMAND COMPANIES
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Cost-Efficient for Both Large & Small Orders
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Flexible Minimum Order Quantities (MOQ)
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                End-to-End Design & Delivery Solutions
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Seasonal & Custom Collections
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Comprehensive Product Development
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Custom Branding & Packaging
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Exclusive, 100% Customizable Products
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
            </tr>
            <tr>
              <td className="border border-white p-3 text-center align-middle">
                Trend Analysis & Concept Ideation
              </td>
              <td className="border border-white text-green-500 text-center align-middle">✔</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
              <td className="border border-white text-red-500 text-center align-middle">✖</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Section8;
