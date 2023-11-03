import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// import PDFDocument from "../../components/dashboard/PDFDocument";
import jsPDF from "jspdf";

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
        `${import.meta.env.VITE_BASE_URL}/tax/yearly`,
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

  const downloadPDF = () => {
    const pdfDoc = new jsPDF();
    pdfDoc.text(`Tax ID: ${responseData.taxId}`, 10, 10);
    pdfDoc.text(`Year: ${responseData.year}`, 10, 20);
    pdfDoc.text(`Total Income: ${responseData.totalIncome}`, 10, 30);
    pdfDoc.text(`Total Tax: ${responseData.totalTax}`, 10, 40);
    pdfDoc.text(`Total Tax Paid: ${responseData.totalTaxPaid}`, 10, 50);
    pdfDoc.text(`Total Tax Owed: ${responseData.totalTaxOwed}`, 10, 60);
    pdfDoc.text(`ETIN: ${responseData.etin}`, 10, 70);

    pdfDoc.save("tax_calculation.pdf");
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
                <h2 className="text-center font-semibold text-3xl p-4 text-white">Tax Calculation Result</h2>
                <table className="text-white">
                  <tbody className="text-left p-2">
                    <tr className="border border-1">
                      <td className="border border-1 p-2">Tax ID:</td>
                      <td className="border border-1 p-2">
                        {responseData.taxId}
                      </td>
                    </tr>
                    <tr className="border border-1">
                      <td className="border border-1 p-2">Year:</td>
                      <td className="border border-1 p-2">
                        {responseData.year}
                      </td>
                    </tr>
                    <tr className="border border-1">
                      <td className="border border-1 p-2">Total Income:</td>
                      <td className="border border-1 p-2">
                        {responseData.totalIncome}
                      </td>
                    </tr>
                    <tr className="border border-1">
                      <td className="border border-1 p-2">Total Tax:</td>
                      <td className="border border-1 p-2">
                        {responseData.totalTax}
                      </td>
                    </tr>
                    <tr className="border border-1">
                      <td className="border border-1 p-2">Total Tax Paid:</td>
                      <td className="border border-1 p-2">
                        {responseData.totalTaxPaid}
                      </td>
                    </tr>
                    <tr className="border border-1">
                      <td className="border border-1 p-2">Total Tax Owed:</td>
                      <td className="border border-1 p-2">
                        {responseData.totalTaxOwed}
                      </td>
                    </tr>
                    <tr className="border border-1">
                      <td className="border border-1 p-2">ETIN:</td>
                      <td className="border border-1 p-2">
                        {responseData.etin}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className="p-2 mt-4 bg-blue-500 hover:bg-blue-800 hover:text-white rounded-xl" onClick={downloadPDF}>Download as PDF</button>
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
