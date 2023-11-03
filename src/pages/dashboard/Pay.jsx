import { Form, Formik, Field, ErrorMessage } from "formik";
import { ToastContainer,toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const Pay = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [showCard, setShowCard] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const validate = (values) => {
    const errors = {};

    const currentYear = new Date().getFullYear();
    if (values.year > currentYear) {
      errors.year = "Year cannot be a future year";
    }

    return errors;
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Make a POST request to your API endpoint
      
      // const response = await axios.post('/greeting/save-for-name', values);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/tax/yearly`, values);

      // Check the response and show a success message
      if (response.status === 200) {
        setShowCard(true);
        setResponseData(response.data);
        toast.success("Calculated successfully!");
      } else {
        toast.error("Calculation failed. Please try again later.");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred. Please try again later.");
    }

    setSubmitting(false);
  };
  return (
    <div className="flex md:flex-row flex-col items-center justify-between h-screen">
      <Formik 
      initialValues={{ etin: "", year: "",income: "",city: "",gender: "",age: "" }}
      validate={validate}
      onSubmit={handleSubmit}
      >
        <Form
          className="bg-slate-700 p-4 md:p-24 relative w-full md:w-[30%] wrap space-y-4 rounded-xl mx-auto"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-center text-4xl font-bold text-white">
            Tax Pay
          </h1>
          <div>
            <label className="pb-2 text-white">Year</label>
            <Field
              type="number"
              name="year"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="year"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">Income</label>
            <Field
              type="number"
              name="income"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          
          <div>
            <label className="pb-2 text-white">Amount</label>
            <Field
              type="nubmer"
              name="age"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="age"
              component="div"
              className="text-red-500"
            />
          </div>

          {/* <div>
            <label className="pb-2 text-white">etin</label>
            <Field
              type="text"
              name="etin"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="etin"
              component="div"
              className="text-red-500"
            />
          </div> */}

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="w-2/3 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Pay
            </button>
          </div>
        </Form>
      </Formik>
      
      <ToastContainer />
      {showCard && (
      <div className="bg-slate-400 p-4 rounded-xl mt-4">
        <h2>Tax Calculation Result</h2>
        <ul>
          <li>Tax ID: {responseData.taxId}</li>
          <li>Year: {responseData.year}</li>
          <li>Total Income: {responseData.totalIncome}</li>
          <li>Total Tax: {responseData.totalTax}</li>
          <li>Total Tax Paid: {responseData.totalTaxPaid}</li>
          <li>Total Tax Owed: {responseData.totalTaxOwed}</li>
          <li>ETIN: {responseData.etin}</li>
        </ul>
      </div>
    )}
    </div>
  );
};

export default Pay;
