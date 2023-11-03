import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/dashboard/Table';

const History = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(0); // Change itemsPerPage to 6
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page) => {
    // Fetch data from the API for the specified page
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        setData(response.data.data);
        setTotalPages(response.data.total_pages);
        setItemsPerPage(response.data.per_page);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-24 ">
      <h1 className="text-2xl font-bold mb-4 text-center">History</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <Table data={data} itemsPerPage={itemsPerPage} totalPage={totalPages} />
          <div className="mt-4 flex justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-blue-500 text-white rounded"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default History;
