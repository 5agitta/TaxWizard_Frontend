import { Formik, Field, Form, ErrorMessage } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Img from "../image/home.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="w-full mx-auto pt-16">
      <div className="flex md:flex-row flex-col items-center justify-between ">
        <div data-aos="fade-up" data-aos-duration="3000">
          <img className="pt-2 pl-16 text-center w-[800px]" src={Img} alt="" />
        </div>
        <Formik initialValues={{ tin: "", message: "" }}>
          <Form className="bg-slate-700 p-4 md:p-24 relative w-full md:w-[30%] wrap space-y-4 rounded-xl mx-auto" data-aos="fade-right" data-aos-duration="3000">
            <h1 className="text-center text-4xl font-bold text-white">
              Sign In
            </h1>
            <div>
              <label className="pb-2 text-white">TIN</label>
              <Field
                type="text"
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
              <label className="pb-2 text-white">Password</label>
              <Field
                type="password"
                name="message"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name="message"
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
