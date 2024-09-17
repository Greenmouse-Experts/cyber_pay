import { useTheme } from "../../ThemeContext";
import Header from "../../layout/landing/Heading";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const { theme } = useTheme();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("subject number is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject:"",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      try {
        const response = await axios.post(
          `https://backend.cyberpay.net.ng/api/submit/contact/form`,
          {
            ...values,
            full_name: values.name,
            phone_number: values.phone,
          }
        );
        if (response.data.success) {
          toast.success(response.data.message);
          resetForm();
        } else {
          toast.error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Failed to submit form");
      }
    },
  });

  return (
    <div
      className={`landing-about ${theme === "light" ? "about" : "darkabout"}`}
    >
      <Header
        head="Contact Us"
        body="Setting up CyberPay is a breeze, offering your customers a range of secure and user-friendly payment options."
        img="/img/contact-banner.png"
      />

      <div className="padding">
        <div className="flex lg:flex-row gap-10 flex-col-reverse  mt-20">
          <div className="lg:w-[50%] w-full ">
            <div>
              <iframe
                title="Contact Map"
                width="100%"
                height="400px"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.750165491411!2d3.4140952757533904!3d6.426135924285578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8acdaec4eb6b%3A0x86a6056ae99642d9!2s12%20Ologun%20Agbaje%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717680371715!5m2!1sen!2sng"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className=" text-black border border-gray-400 rounded-md dark:text-white px-8 2xl:py-[70px] py-10 lg:w-[50%] w-full md:ml-3 ml-0 shadow-md">
            <form
              className="flex flex-col 2xl:gap-8 gap-5"
              onSubmit={formik.handleSubmit}
            >
              <h5 className="font-montserrat text-xl font-semibold">
                Contact Us
              </h5>
              <div className="flex md:flex-row flex-col justify-between gap-8">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={`bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white h-[50px] pl-5 w-full ${
                      formik.errors.name && formik.touched.name
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div className="text-red-500">{formik.errors.name}</div>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`bg-[#F4F4F4] border border-gray-300 rounded-lg w-full 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white h-[50px] pl-5 ${
                      formik.errors.email && formik.touched.email
                        ? "border-red-500"
                        : ""
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div className="text-red-500">{formik.errors.email}</div>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className={`bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white h-[50px] pl-5 w-full ${
                    formik.errors.phone && formik.touched.phone
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <div className="text-red-500">{formik.errors.phone}</div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`bg-[#F4F4F4] border border-gray-300 rounded-lg 2xl:h-[60px] placeholder:text-bluePrimary dark:placeholder:text-white h-[50px] pl-5 w-full ${
                    formik.errors.subject && formik.touched.subject
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                />
                {formik.errors.subject && formik.touched.subject && (
                  <div className="text-red-500">{formik.errors.subject}</div>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Additional details"
                  className={`bg-[#F4F4F4] border border-gray-300 rounded-lg text-black h-[120px] pl-5 w-full pt-4 placeholder:text-bluePrimary dark:placeholder:text-white ${
                    formik.errors.message && formik.touched.message
                      ? "border-red-500"
                      : ""
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.errors.message && formik.touched.message && (
                  <div className="text-red-500">{formik.errors.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#DD0A35] text-white font-medium py-3 rounded-[5rem]"
              >
                {formik.isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
