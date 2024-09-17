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


//solutions

export const getMarket = async () => {
  const response = await axiosInstance.get("/solution/market/place"); 
  return response.data.data;
};

export const getMobileApp = async () => {
  const response = await axiosInstance.get("/solution/mobile/app"); 
  return response.data.data;
};

export const getPaymentLink= async () => {
  const response = await axiosInstance.get("/solution/payment/link"); 
  return response.data.data;
};

export const getUssdSolution= async () => {
  const response = await axiosInstance.get("/solution/ussd/collection"); 
  return response.data.data;
};

export const getBulkSms= async () => {
  const response = await axiosInstance.get("/solution/bulk/sms"); 
  return response.data.data;
};

export const getDirectDebit= async () => {
  const response = await axiosInstance.get("/solution/direct/debit"); 
  return response.data.data;
};

export const getPenRemit= async () => {
  const response = await axiosInstance.get("/solution/pen/remit"); 
  return response.data.data;
};

export const getPayment= async () => {
  const response = await axiosInstance.get("/solution/payment"); 
  return response.data.data;
};

export const getDisbursement= async () => {
  const response = await axiosInstance.get("/solution/disbursement"); 
  return response.data.data;
};
