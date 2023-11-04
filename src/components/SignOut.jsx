
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function SignOut() {
  // Retrieve 'etin' and 'authToken' from local storage
  const etin = localStorage.getItem('etin');
  const authToken = localStorage.getItem('authToken');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Make a POST request to the /authenticate/logout endpoint
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
        etin,
        accessToken: authToken,
      });

      if (response.status === 200) {
        // Clear the 'authToken' from local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('etin');
        navigate('/')

        // Redirect to the login page or any other appropriate page
        // You can use react-router-dom's `useNavigate` to handle the navigation
      } else {
        // Handle logout error
      }
    } catch (error) {
      // Handle any errors that occur during the request
    }
  };
  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      Logging Out....
    </div>
  );
}

export default SignOut;
