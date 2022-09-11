import axios from "axios";
import constants from "./utils/constants";

const http = axios.create({ baseURL: constants.API, headers: { "Content-type": "application/json" } });
export default http;
