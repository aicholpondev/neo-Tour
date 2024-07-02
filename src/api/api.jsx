import axios from "axios";
const instance = axios.create({
    baseURL: 'https://muha-backender.org.kg/',
});
export const getPopular =() => instance.get(`https://muha-backender.org.kg/category-tour/popular/`);
export const getFeatured =() => instance.get(`https://muha-backender.org.kg/category-tour/featured/`);
export const getMostVisited  =() => instance.get(`https://muha-backender.org.kg/category-tour/mostvisited%20/`);
export const getAsia =() => instance.get(`https://muha-backender.org.kg/category-tour/asia/`);
export const getEurope=() => instance.get(`https://muha-backender.org.kg/category-tour/europe/`);
export const getTours =() => instance.get(`https://muha-backender.org.kg/filtered-tours/`);
export const getReview =() => instance.get(`https://muha-backender.org.kg/list-tours/`);
export const getTourById =(id) => instance.get(`https://muha-backender.org.kg/retrieve-tour/f5f06de8-0ef8-4c9d-ab02-fae2a1c42961`);