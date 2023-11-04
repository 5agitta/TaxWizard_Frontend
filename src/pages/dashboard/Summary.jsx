import React, { useEffect, useState } from "react";
import { initTE, Chart } from "tw-elements";
import axios from "axios";
import ChartCard from "../../components/dashboard/ChartCard";

const Summary = () => {
  useEffect(() => {
    // Initialize the Traffic Chart
    initTE({ Chart });
  }, []);

  const etin = localStorage.getItem('etin');

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState(null);
  const [yearData, setYearData] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const years = [2019, 2020, 2021, 2022, 2023]; // Replace with your API response

  const handleYearSelect = (year) => {
    setSelectedYear(year);

    // Fetch data for the selected year from your API
    axios
        .post(`${import.meta.env.VITE_BASE_URL}}/tax/history`,{etin:etin})
        .then((response) => {
          const selectedYearData = response.data.find((data) => data.year === year);

          if (selectedYearData) {
            setYearData(selectedYearData);
          } else {
            // Handle the case where data for the selected year is not available
            setYearData(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });

    setDropdownOpen(false);
  };

  return (
      <div>
        <div>
          <div className="flex flex-row justify-center gap-2 items-center">
            <div className="w-1/3 p-8 bg-slate-700 rounded-xl space-y-10">
              <div className="relative inline-block text-center">
                <button
                    id="dropdownDefaultButton"
                    onClick={toggleDropdown}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800"
                    type="button"
                >
                  {selectedYear ? selectedYear : "Choose Year"}
                  <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                      aria-hidden="true"
                  >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                    <div
                        id="dropdown"
                        className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                      >
                        {years.map((year) => (
                            <li key={year}>
                              <a
                                  href="#"
                                  className="block px-4 py-2 hover-bg-gray-100 dark-hover-bg-gray-600 dark-hover-text-white"
                                  onClick={() => handleYearSelect(year)}
                              >
                                {year}
                              </a>
                            </li>
                        ))}
                      </ul>
                    </div>
                )}
              </div>
              {yearData && (
                  <div>
                    <p className="text-white text-lg">Income: ${yearData.income}</p>
                    <p className="text-white text-lg">Tax: ${yearData.tax}</p>
                    <p className="text-white text-lg">Tax Paid: ${yearData.taxPaid}</p>
                    <p className="text-white text-lg">Tax Owed: ${yearData.taxOwed}</p>
                  </div>
              )}
            </div>
            <div>
              <div className="w-full text-center pt-8">
                <ChartCard />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Summary;
