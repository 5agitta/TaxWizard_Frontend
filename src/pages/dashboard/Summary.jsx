import { useEffect, useState } from "react";
import { initTE, Chart } from "tw-elements";

const Summary = () => {
  useEffect(() => {
    // Initialize the Traffic Chart
    initTE({ Chart });
  }, []);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="w-1/3 p-8 bg-slate-700 rounded-xl space-y-10">
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
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover-bg-gray-100 dark:hover:bg-gray-600 dark:hover-text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <p className="text-white text-lg">Paid: $1207</p>
            <p className="text-white text-lg">Owed: $208</p>

          </div>
        </div>
        <div>
          <div className="mx-auto w-3/5 overflow-hidden pt-8">
            <canvas
              data-te-chart="line"
              data-te-dataset-label="Traffic"
              data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
              data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
