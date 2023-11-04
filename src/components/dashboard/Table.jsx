import  { useState } from 'react';

const Table = ({ data, itemsPerPage, totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

  return (
    <div>
      <table className="min-w-full bg-slate-700 p-6 rounded-xl text-white ">
        <thead>
          <tr className='bg-slate-500'>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Income</th>
            <th className="px-4 py-2">Tax</th>
            <th className="px-4 py-2">TaxPaid</th>
            <th className="px-4 py-2">TaxOwed</th>

          </tr>
        </thead>
        <tbody className='text-center'>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{item.year}</td>
              <td className="px-4 py-2">{item.income}</td>
              <td className="px-4 py-2">{item.tax}</td>
              <td className="px-4 py-2">{item.taxPaid}</td>
              <td className="px-4 py-2">{item.taxOwed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(totalPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-2 ${
              i + 1 === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Table;
