import { useEffect, useState } from "react";
import { initTE, Chart } from "tw-elements";
import axios from "axios";
import ChartCard from "../../components/dashboard/ChartCard";
// import LineChart from "../../components/dashboard/LineChart";

const Summary = () => {
  const [chartData, setChartData] = useState({ labels: '', data: '' });
  useEffect(() => {
    // Initialize the Traffic Chart
    initTE({ Chart });
  }, []);

  const etin = localStorage.getItem('etin');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/tax/recent`, { etin });
        if (response.status === 200) {
          const data = response.data;

          // Extract years and taxes from the response and format them as strings
          const years = data.map(item => item.year).join("','");
          const taxes = data.map(item => item.tax).join(',');

          setChartData({ labels: `['${years}']`, data: `[${taxes}]` });
        }
      } catch (error) {
        console.error('Error fetching tax data:', error);
      }
    };

    fetchData();

    return () => {
      // Clean-up code (if needed)
    };
  }, [etin]);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div>
        <div className="flex flex-row justify-center gap-2 items-center">
          <div className="w-1/3 p-8 bg-slate-700 rounded-xl space-y-10 ">
            <div className="relative inline-block text-center">
              <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Choose Year
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
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        2019
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                      >
                        2021
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                      >
                        2022
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                      >
                        2023
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className="text-white text-lg">Paid: $1207</p>
            <p className="text-white text-lg">Owed: $208</p>

          </div>
          <div>
          <div className=" w-full text-center pt-8">
          <ChartCard />

          {/* <canvas
              data-te-chart="line"
              data-te-dataset-label="Tax"
              data-te-labels={chartData.labels}
              data-te-dataset-data={JSON.stringify(chartData.data)}
            ></canvas> */}
          </div>
          {/* <LineChart /> */}
          {/* <ChartCard /> */}
        </div>
        </div>
        

      </div>
    </div>
  );
};

export default Summary;
