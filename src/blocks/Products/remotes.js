import axios from "axios";
import api from "../utils/apiconfig";

export async function fetchAllProductsData(){
   return api.get('/posts').then((response) => response.data).catch((err) => Promise.reject(err));
}