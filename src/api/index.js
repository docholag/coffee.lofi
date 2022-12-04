import axios from "axios";

const baseURL = "http://localhost:8080/";

export const getAllChill = async () => {
  try {
    const res = await axios.get(`${baseURL}api/chill/`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllJazzy = async () => {
  try {
    const res = await axios.get(`${baseURL}api/jazzy/`);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const getAllSleep = async () => {
  try {
    const res = await axios.get(`${baseURL}api/sleep/`);
    return res.data;
  } catch (error) {
    return null;
  }
};
