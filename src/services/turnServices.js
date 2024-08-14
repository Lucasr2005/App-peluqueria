import axios from "axios";
const baseUrl = "https://app-peluqueria-backend.vercel.app/api/turnos"
const getTurns = async (data) => {
    // console.log(data)

    try {
        const result = await axios.get(baseUrl, { params: data });
        return result.data

    } catch (error) {
        throw new Error({ error })
    }
}
const newTurn = async (data) => {
    try {
        const result = await axios.post(baseUrl, data)
        return result.data
    } catch (error) {
        console.log("error", error)
    }
}

export default { getTurns, newTurn }