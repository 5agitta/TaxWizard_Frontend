import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// import PDFDocument from "../../components/dashboard/PDFDocument";


const TaxCalculator = () => {
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
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/tax/calculate`,
        values
      );

      if (response.status === 200) {
        toast.success("Calculated successfully!");
        setShowCard(true);
        setResponseData(response.data);
      } else {
        toast.error("Calculation failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    }

    setSubmitting(false);
  };


  return (
    <div className="flex md:flex-col flex-row items-center justify-between h-screen">
      <Formik
        initialValues={{
          etin: "",
          year: "",
          income: "",
          city: "",
          gender: "",
          age: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form
          className="bg-slate-700 p-4 md:p-24 relative w-full md:w-[30%] wrap space-y-4 rounded-xl mx-auto"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-center text-4xl font-bold text-white">
            Tax Calculator
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
              name="income"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">City</label>
            <Field
              as="select"
              name="city"
              className="w-full p-2 border rounded"
            >
              <option value="Dhaka_Or_Chittagong">Dhaka</option>
              <option value="Dhaka_Or_Chittagong">Chattogram</option>
              <option value="Other_City">Non-City Corporation</option>
              <option value="Non_City">
                Other City Corporation
              </option>
            </Field>
            <ErrorMessage
              name="city"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">Choose Gender</label>
            <div>
              <label className="pr-2 text-white">
                <Field type="radio" name="gender" value="Male" />
                Male
              </label>
              <label className="pr-2 text-white">
                <Field type="radio" name="gender" value="Female" />
                Female
              </label>
            </div>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">Age</label>
            <Field
              type="number"
              name="age"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="age" component="div" className="text-red-500" />
          </div>
          <div>
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
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="w-2/3 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Calculate
            </button>
          </div>
        </Form>
      </Formik>
      <div className="g-slate-800 p-4 rounded-xl mt-4">
        {showCard && (
          // Inside your TaxCalculator component
          <div className="bg-slate-800 p-4 rounded-xl mt-4">
            {showCard && (
              <div>
                <p className="text-white p-2 font-semibold text-2xl">Tax Calculated:${responseData}</p>
              </div>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TaxCalculator;
