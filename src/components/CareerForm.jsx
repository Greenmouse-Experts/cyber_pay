import { useQuery } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NaijaStates from "naija-state-local-government";
import { getCareerRole } from "../services/api";
import InputText from "./InputText";
import SelectInput from "./SelectInput";
import axios from "axios";
import toast from "react-hot-toast";

export default function CareerForm() {
  const { data, isLoading } = useQuery({
    queryKey: ["careers"],
    queryFn: getCareerRole,
  });

  const options = data?.map((role) => role?.role) || [];

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    date_of_birth: Yup.date().required("Date of birth is required"),
    state: Yup.string().required("State of residence is required"),
    location: Yup.string().required("Location is required"),
    yearOfExperience: Yup.number()
      .integer()
      .required("Years of experience is required"),
    levelOfExperience: Yup.string().required("Experience level is required"),
    role: Yup.string().required("Role is required"),
    courseOfStudy: Yup.string().required("Course of study is required"),
    graduatingGrade: Yup.string().required("Graduating grade is required"),
    yearOfGraduation: Yup.number()
      .integer()
      .required("Year of graduation is required"),
    cv: Yup.mixed().required("CV is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        gender: "",
        date_of_birth: "",
        state: "",
        location: "",
        yearOfExperience: "",
        levelOfExperience: "",
        role: "",
        courseOfStudy: "",
        graduatingGrade: "",
        yearOfGraduation: "",
        cv: null,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        // Create FormData object
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("gender", values.gender);
        formData.append("date_of_birth", values.date_of_birth);
        formData.append("state", values.state);
        formData.append("location", values.location);
        formData.append("yearOfExperience", parseInt(values.yearOfExperience)); // Ensure integer
        formData.append("levelOfExperience", values.levelOfExperience);
        formData.append("role", values.role);
        formData.append("courseOfStudy", values.courseOfStudy);
        formData.append("graduatingGrade", values.graduatingGrade);
        formData.append("yearOfGraduation", parseInt(values.yearOfGraduation)); // Ensure integer
        formData.append("cv", values.cv);

        try {
          const response = await axios.post(
            `http://cyberpay.victornwadinobi.com/api/submit/career`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            resetForm(); // Reset form fields after successful submission
          } else {
            toast.error("Failed to submit form");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          toast.error("Failed to submit form");
        }
      }}
    >
      {({ setFieldValue, handleChange, handleBlur, values }) => (
        <Form className="lg:w-[45%] w-full flex flex-col gap-5">
          <InputText
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage name="name" component="div" className="text-red-500" />

          <div className="font-monstrat flex flex-col gap-2 w-full">
            <label className="text-lg font-montserrat font-semibold">
              Gender
            </label>
            <Field
              as="select"
              name="gender"
              className="bg-[#F4F4F4] 2xl:h-[60px] placeholder:text-[text-grayPrimary2] dark:text-black h-[50px] pl-5 w-full border border-black"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage
              name="gender"
              component="div"
              className="text-red-500"
            />
          </div>

          <InputText
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            placeholder="Enter your date of birth"
            value={values.date_of_birth}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="date_of_birth"
            component="div"
            className="text-red-500"
          />

          <SelectInput
            id="state"
            items={NaijaStates.states()}
            label="State of residence"
            name="state"
            value={values.state}
            onChange={(value) => setFieldValue("state", value)}
            onBlur={handleBlur}
          />
          <ErrorMessage name="state" component="div" className="text-red-500" />

          <InputText
            label="Location you're applying to"
            name="location"
            type="text"
            placeholder="Location you're applying to"
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="location"
            component="div"
            className="text-red-500"
          />

          <SelectInput
            id="yearOfExperience"
            items={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            label="Years of experience"
            name="yearOfExperience"
            value={values.yearOfExperience}
            onChange={(value) => setFieldValue("yearOfExperience", value)}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="yearOfExperience"
            component="div"
            className="text-red-500"
          />

          <SelectInput
            id="levelOfExperience"
            items={["Entry", "Intermediate", "Senior"]}
            label="Level of experience"
            name="levelOfExperience"
            value={values.levelOfExperience}
            onChange={(value) => setFieldValue("levelOfExperience", value)}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="levelOfExperience"
            component="div"
            className="text-red-500"
          />

          <SelectInput
            id="role"
            items={options}
            label="Role you are applying for"
            name="role"
            value={values.role}
            onChange={(value) => setFieldValue("role", value)}
            onBlur={handleBlur}
          />
          <ErrorMessage name="role" component="div" className="text-red-500" />

          <InputText
            label="Course of study"
            name="courseOfStudy"
            type="text"
            placeholder="Course of study"
            value={values.courseOfStudy}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="courseOfStudy"
            component="div"
            className="text-red-500"
          />

          <SelectInput
            id="graduatingGrade"
            items={[
              "First class",
              "Second Class",
              "Third class",
              "Distinction",
              "Upper credit",
              "Lower credit",
            ]}
            label="Graduating Grade"
            name="graduatingGrade"
            value={values.graduatingGrade}
            onChange={(value) => setFieldValue("graduatingGrade", value)}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="graduatingGrade"
            component="div"
            className="text-red-500"
          />

          <InputText
            label="Year of graduation"
            name="yearOfGraduation"
            type="number"
            placeholder="Year of graduation"
            value={values.yearOfGraduation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="yearOfGraduation"
            component="div"
            className="text-red-500"
          />

          <div className="font-monstrat flex flex-col gap-2 w-full">
            <label className="text-lg font-montserrat font-semibold">
              Add your CV
            </label>
            <input
              type="file"
              name="cv"
              onChange={(event) =>
                setFieldValue("cv", event.currentTarget.files[0])
              }
              className="2xl:h-[60px] placeholder:text-[text-grayPrimary2] dark:text-black h-[50px] pl-5 w-full border border-black"
            />
            <ErrorMessage name="cv" component="div" className="text-red-500" />
          </div>

          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              className="bg-[#DD0A35] px-10 py-3 para rounded-[5rem] text-white"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
