import ApexCharts from "react-apexcharts";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function ChartCard() {
  const etin = localStorage.getItem("etin");

  const [chartData, setChartData] = useState({
    tax: [],
    income: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/tax/recent`,
          { etin }
        );

        // Assuming your API response is an array with objects like { year, tax, income }
        const taxData = response.data.map((item) => ({
          x: item.year.toString(),
          y: item.tax,
        }));

        const incomeData = response.data.map((item) => ({
          x: item.year.toString(),
          y: item.income,
        }));

        setChartData({
          tax: taxData,
          income: incomeData,
        });
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, [etin]);
  const chartOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Tax",
        data: chartData.tax,
      },
      {
        name: "Income",
        data: chartData.income,
      },
    ],
    chart: {
      type: "bar",
      height: "1000px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center"></div>
      </div>

      <div id="column-chart">
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="bar"
          height="320"
        />
      </div>

      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          
          <div
            id="lastDaysdropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            
          </div>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
          >
             Report
            <svg
              className="w-2.5 h-2.5 ml-1.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChartCard;
