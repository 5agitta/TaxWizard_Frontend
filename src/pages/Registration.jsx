import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "../image/registration.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import axios from "axios";

export default function Registration() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      const handleSubmit = async (values, { setSubmitting }) => {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/auth/signup`,
            values
          );
    
          if (response.status === 200) {
            toast.success("Registration successful!");
          } else {
            toast.error("Registration failed. Please try again later.");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("An error occurred. Please try again later.");
        }
    
        setSubmitting(false);
      };
    
  return (
    <div className="w-full mx-auto pt-16">
      <div className="flex md:flex-row flex-col items-center justify-between ">
        <div data-aos="fade-up" data-aos-duration="3000">
          <img className="pt-2 pl-16 text-center w-[800px]" src={Img} alt="" />
        </div>
        <Formik 
        initialValues={{ etin:"", password: "" }}
        onSubmit={handleSubmit}
        >
          <Form className="bg-slate-700 p-4 md:p-24 relative w-full md:w-[30%] wrap space-y-4 rounded-xl mx-auto" data-aos="fade-right" data-aos-duration="3000">
            <h1 className="text-center text-4xl font-bold text-white">
              Sign Up
            </h1>
            <div>
              <label className="pb-2 text-white">TIN</label>
              <Field
                type="text"
                name="etin"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="pb-2 text-white">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="w-2/3 bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
        
        <ToastContainer />
      </div>
    </div>
  );
}
