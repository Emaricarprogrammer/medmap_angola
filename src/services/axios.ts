import axios from "axios"

export const api = axios.create({
	baseURL: "http://192.168.188.179:3000/medmapangola.ao",
	withCredentials: true,
})
