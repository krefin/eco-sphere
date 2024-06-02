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
const getAllContents = async () => {
    const response = await axios.get('http://localhost:4000/api/contents')
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}
const getAllWastes = async () => {
    const response = await axios.get('http://localhost:4000/api/waste')
    .then((response) => response.data
    )
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




export { 
    getAllUsers, 
    getUserById, 
    getAllContents, 
    getAllWastes
 }