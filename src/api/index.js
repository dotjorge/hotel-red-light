// api.js
import Axios from "axios"

const api = Axios.create({
  baseURL: "https://redlight-backend.herokuapp.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default api
