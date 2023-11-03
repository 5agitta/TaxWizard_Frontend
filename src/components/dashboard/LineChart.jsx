// import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import { useEffect } from 'react';

const LineChart = () => {
  useEffect(() => {
    const options = {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "line",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -26,
          },
        },
        series: [
          {
            name: "Clicks",
            data: [6500, 6418, 6456, 6526, 6356, 6456],
            color: "#1A56DB",
          },
          {
            name: "CPC",
            data: [6456, 6356, 6526, 6332, 6418, 6500],
            color: "#7E3AF2",
          },
        ],
        legend: {
          show: false,
        },
        xaxis: {
          categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
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
        stroke: {
          width: 6,
          curve: 'smooth', // Move the curve property inside the "stroke" object
        },
      };
      

    if (document.getElementById("line-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("line-chart"), options);
      chart.render();
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Clicks
              <svg
                data-popover-target="clicks-info"
                data-popover-placement="bottom"
                className="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* Add your SVG path here */}
              </svg>
              {/* Add your popover content here */}
            </h5>
            <p className="text-gray-900 dark:text-white text-2xl leading-none font-bold">42.3k</p>
          </div>
          <div>
            <h5 className="inline-flex items-cendark:hover:text-white hover:text-blue-700 hover:underline">Read more</h5>
            </div>
          </div>
        </div>
        <div id="line-chart" />
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5">
          <div className="pt-5">
            <a href="#" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                {/* Add your SVG path here */}
              </svg>
              View full report
            </a>
          </div>
        </div>
      </div>
  );
};

export default LineChart;
