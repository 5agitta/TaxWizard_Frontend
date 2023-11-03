import { Form, Formik, Field, ErrorMessage } from "formik";
import { ToastContainer } from "react-toastify";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const TaxCalculator = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex md:flex-row flex-col items-center justify-between h-screen">
      <Formik initialValues={{ tin: "", message: "" }}>
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
              name="tin"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">Income</label>
            <Field
              type="number"
              name="tin"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">City</label>
            <Field
              as="select" // Use the "select" element for a dropdown
              name="city" // Name attribute for the dropdown field
              className="w-full p-2 border rounded"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Non-City Corporation">Non-City Corporation</option>
              <option value="Other City Corporation">
                Other City Corporation
              </option>
            </Field>

            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">Gender</label>
            <div>
              <label className="pr-2 text-white">
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label className="pr-2 text-white">
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
            </div>
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label className="pb-2 text-white">Age</label>
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
      <ToastContainer />
    </div>
  );
};

export default TaxCalculator;
