import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa'; // You can use any icon you prefer


function Profile() {
    const etin = localStorage.getItem('etin');
    const [userData, setUserData] = useState({
      etin: 'Loading...',
      name: 'Loading...',
      email: 'Loading...',
      phone: 'Loading...',
      address: 'Loading...',
      age: 0,
      gender: 'Loading...',
    });
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/info`,{etin:etin});
            if (response.status === 200) {
              const data = response.data;
              setUserData(data);
              console.log(data);
            }
          } catch (error) {
            console.error('Error fetching user information:', error);
          }
        };
      
        fetchData(); // Call the async function immediately
      
        return () => {
          // Clean-up code (if needed)
        };
      }, [etin]);
      
      
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="h-16 w-16 bg-blue-400 rounded-full flex items-center justify-center">
            <FaUser className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-semibold">{userData.name}</h1>
            <p className="text-gray-500">{userData.email}</p>
          </div>
        </div>
  
        <ul>
          <li className="flex items-center mb-2">
            <span className="w-20 font-semibold">ETIN:</span>
            <span>{etin}</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="w-20 font-semibold">Phone:</span>
            <span>{userData.phone}</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="w-20 font-semibold">Address:</span>
            <span>{userData.address}</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="w-20 font-semibold">Age:</span>
            <span>{userData.age}</span>
          </li>
          <li className="flex items-center mb-2">
            <span className="w-20 font-semibold">Gender:</span>
            <span>{userData.gender}</span>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Profile;
  