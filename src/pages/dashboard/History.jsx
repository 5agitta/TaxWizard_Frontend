import { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [incomeAndTaxes, setIncomeAndTaxes] = useState([]);
  const etin = localStorage.getItem('etin');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the 'tax/history' API
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/tax/history`,etin);
        if (response.status === 200) {
          setIncomeAndTaxes(response.data);
        }
      } catch (error) {
        console.error('Error fetching tax history:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tax History</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Income</th>
            <th className="px-4 py-2">Tax</th>
            <th className="px-4 py-2">Tax Paid</th>
            <th className="px-4 py-2">Tax Owed</th>
          </tr>
        </thead>
        <tbody>
          {incomeAndTaxes.map((data, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{data.year}</td>
              <td className="border px-4 py-2">{data.income}</td>
              <td className="border px-4 py-2">{data.tax}</td>
              <td className="border px-4 py-2">{data.taxPaid}</td>
              <td className="border px-4 py-2">{data.taxOwed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
