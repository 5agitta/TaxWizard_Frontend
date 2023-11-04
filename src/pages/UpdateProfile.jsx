import { useState } from "react";
import axios from "axios";

function UpdateProfile() {
  const etin = localStorage.getItem("etin");
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
  });

  const dobParts = updatedData.dob.split("-"); // Split the DOB into year, month, and day
  const formattedDob = `${dobParts[2]}/${dobParts[1]}/${dobParts[0]}`;

  const updateProfile = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL3}/user/update`,
        {
          etin: etin,
          name: updatedData.name,
          email: updatedData.email,
          password: updatedData.password,
          phone: updatedData.phone,
          address: updatedData.address,
          dob: formattedDob,
          gender: updatedData.gender,
        }
      );

      if (response.status === 200) {
        // Handle successful update, e.g., show a success message
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle errors, e.g., show an error message
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <h1 className="text-3xl text-black font-bold pb-3">Update Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateProfile();
        }}
        className="bg-slate-900 rounded-lg p-4 md:p-6"
      >
        <div className="flex flex-col">
          <label className="text-gray-800 dark:text-white">Name:</label>
          <input
            type="text"
            name="name"
            value={updatedData.name}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-800 dark:text-white">Email:</label>
          <input
            type="text"
            name="email"
            value={updatedData.email}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-800 dark:text-white">Password:</label>
          <input
            type="password"
            name="password"
            value={updatedData.password}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-800 dark:text-white">Phone:</label>
          <input
            type="text"
            name="phone"
            value={updatedData.phone}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-800 dark:text-white">Address:</label>
          <input
            type="text"
            name="address"
            value={updatedData.address}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-800 dark:text-white">
            Date of Birth:
          </label>
          <input
            type="date"
            name="dob"
            value={updatedData.dob}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-gray-800 dark:text-white">Gender:</label>
          <select
            name="gender"
            value={updatedData.gender}
            onChange={handleInputChange}
            className="px-2 py-1 rounded-md"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 text-white"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default UpdateProfile;
