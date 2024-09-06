import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.cyberpay.net.ng/api", 
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

export const getStory = async () => {
  const response = await axiosInstance.get("/stories"); 
  return response.data.data;
};

export const getPeople = async () => {
  const response = await axiosInstance.get("/peoples"); 
  return response.data.data;
};

export const getAdsBanner = async () => {
  const response = await axiosInstance.get("/ads/banners"); 
  return response.data.data;
};

export const getWhy = async () => {
  const response = await axiosInstance.get("/why/cyberpay"); 
  return response.data.data;
};
export const getTerms = async () => {
  const response = await axiosInstance.get("/terms/conditions"); 
  return response.data.data;
};
export const getPolicy = async () => {
  const response = await axiosInstance.get("/privacy/policies"); 
  return response.data.data;
};




export const getCareerRole = async () => {
  const response = await axiosInstance.get("/career/role"); 
  return response.data.data;
};

