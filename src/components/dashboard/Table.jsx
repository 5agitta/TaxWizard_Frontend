import  { useState } from 'react';

const Table = ({ data, itemsPerPage, totalPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <table className="min-w-full bg-slate-700 p-6 rounded-xl text-white ">
        <thead>
          <tr className='bg-indigo-700'>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Color</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.first_name}</td>
              <td className="px-4 py-2">{item.last_name}</td>
              <td className="px-4 py-2">{item.avatar}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
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
      </div>
    </div>
  );
};

export default Table;
