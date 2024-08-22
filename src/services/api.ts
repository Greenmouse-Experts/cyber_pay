import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cyberpay.greenmouseonline.com/api", 
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBanners = async () => {
  const response = await axiosInstance.get("/banners"); 
  return response.data.data;
};

export const getFaqs = async () => {
  const response = await axiosInstance.get("/faqs"); 
  return response.data.data;
};

export const getCertificates = async () => {
  const response = await axiosInstance.get("/certificate/licenses"); 
  return response.data.data;
};

export const getContacts = async () => {
  const response = await axiosInstance.get("/office"); 
  return response.data.data;
};

export const getBreadCrumbs = async () => {
  const response = await axiosInstance.get("/breadcrumbs"); 
  return response.data.data;
};



