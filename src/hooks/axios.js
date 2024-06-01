import axios from "axios"


const getAllUsers = async () => {
    const response = await axios.get('http://localhost:4000/api/user')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}
const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:4000/api/user/${id}`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}




export { getAllUsers, getUserById }