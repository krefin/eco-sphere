import axios from "axios"

const loginUser = async (data) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/user/login`, data);
    return res.data
}

const getAllUsers = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}
const updateUser = async (id_user, updatedItem) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/user/${id_user}`, updatedItem, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.updatedItem;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}

const deleteUser = async (id_user) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/user/${id_user}`);
        return response;
    } catch (error) {
        console.error("Error deleting User:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const getAllContents = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/contents`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}
const getAllWastes = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/waste`)
    .then((response) => response.data
    )
    .catch((error) => {
        console.log(error)
    })
    return response
}
const getWasteById = async (wasteId) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/waste/${wasteId}`)
    .then((response) => response.data
    )
    .catch((error) => {
        console.log(error)
    })
    return response
}
const getAllRecycling = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/recycling`)
    .then((response) => response.data
    )
    .catch((error) => {
        console.log(error)
    })
    return response
}
const createWaste = async (addItem) => {
    try {
        console.log(addItem)
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/waste`, addItem, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.addItem;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const updateWaste = async (wasteId, updatedItem) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/waste/${wasteId}`, updatedItem, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.updatedItem;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const deleteWaste = async (wasteId) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/waste/${wasteId}`);
        return response;
    } catch (error) {
        console.error("Error deleting waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const getUserById = async (id) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/${id}`)
    .then((response) => {
        return response.data.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}

const getAllCommunities = async ()=>{
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/community`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}

const deleteCommunity = async (communityId) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/community/${communityId}`);
        return response;
    } catch (error) {
        console.error("Error deleting waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}




export { 
    loginUser,
    getAllUsers,
    updateUser,
    deleteUser, 
    getUserById, 
    getAllContents, 
    getAllWastes,
    getWasteById,
    createWaste,
    updateWaste,
    deleteWaste,
    getAllCommunities,
    deleteCommunity,
    getAllRecycling
 }