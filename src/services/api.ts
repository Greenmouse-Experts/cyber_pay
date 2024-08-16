import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cyberpay.victornwadinobi.com/api", 
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

