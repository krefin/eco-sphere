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
        const data = await sessionStorage.getItem('data');
        const user = await sessionStorage.getItem('user');
        let token = null;
        if(data){
            token = JSON.parse(data);
        } 
        if(user){
            token = JSON.parse(user);
        }
        
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/user/${id_user}`, updatedItem,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
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
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/user/${id_user}`,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error deleting User:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}

const createContent = async (addItem) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contents`, addItem,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response.addItem;
    } catch (error) {
        console.error("Error updating waste:", error);
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
const getContentById = async (contentId) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/contents/${contentId}`)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        console.log(error)
    })
    return response
}

const updateContent = async (contentId, updatedItem) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/contents/${contentId}`, updatedItem,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response.updatedItem;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const deleteContent = async (contentId) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/contents/${contentId}`,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error deleting content:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
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
const getRecyclingById = async (recyclingId) => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/recycling/${recyclingId}`)
    .then((response) => response.data
    )
    .catch((error) => {
        console.log(error)
    })
    return response
}
const createRecycling = async (addItem) => {
    try {
        const formData = new FormData();

        // Tambahkan steps sebagai array
        // eslint-disable-next-line no-unused-vars
        addItem.steps.forEach((step, index) => {
            formData.append(`steps`, step);
        });

        formData.append('wasteId', addItem.wasteId);
        
        // Tambahkan gambar sebagai array
        // eslint-disable-next-line no-unused-vars
        addItem.image.forEach((img, index) => {
            formData.append(`image`, img);
        });
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/recycling`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error Add Recycling:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
};




const updateRecycling = async (recyclingId, updatedItem) => {
    try {

        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/recycling/${recyclingId}`, updatedItem, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response.updatedItem;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const deleteRecycling = async (recyclingId) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/recycling/${recyclingId}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error deleting content:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const createWaste = async (addItem) => {
    try {
        const formData = new FormData();

        // Tambahkan steps sebagai array
        // eslint-disable-next-line no-unused-vars
        addItem.impacts.forEach((dampak, index) => {
            formData.append(`impacts`, dampak);
        });

        formData.append('recyclingId', addItem.recyclingId);
        formData.append('contentId', addItem.contentId);
        formData.append('name', addItem.name);
        formData.append('description', addItem.description);
        formData.append('image', addItem.image);
        
        // Tambahkan gambar sebagai array
        // eslint-disable-next-line no-unused-vars
        addItem.characteristics.forEach((karakter, index) => {
            formData.append(`characteristics`, karakter);
        });
        
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/waste`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const updateWaste = async (wasteId, updatedItem) => {
    try {
        
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.patch(`${import.meta.env.VITE_API_URL}/api/waste/${wasteId}`, updatedItem,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}
const deleteWaste = async (wasteId) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/waste/${wasteId}`,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error deleting waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}

const getUserById = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/${id}`);
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching user data:', error.response || error.message || error);
      throw error; // re-throw the error to handle it in the calling function
    }
  };



const createPostByUser = async (dataPost) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/community`, dataPost,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        
        return response;
    } catch (error) {
        console.error("Error creating community post:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
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
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/api/community/${communityId}`,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        return response;
    } catch (error) {
        console.error("Error deleting waste:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}

const commentOnPost = async (dataPost) => {
    try {
        const data = await sessionStorage.getItem('data');
        const token = JSON.parse(data);
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/post`, dataPost,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token.token}`
            }
        });
        
        return response;
    } catch (error) {
        console.error("Error creating community post:", error);
        throw error; // Lempar kesalahan untuk ditangani di tempat lain
    }
}




export { 
    loginUser,
    getAllUsers,
    updateUser,
    deleteUser, 
    getUserById,
    createContent,
    updateContent,
    getAllContents, 
    getContentById,
    deleteContent,
    getAllWastes,
    getWasteById,
    createWaste,
    updateWaste,
    deleteWaste,
    createPostByUser,
    getAllCommunities,
    deleteCommunity,
    getAllRecycling,
    getRecyclingById,
    createRecycling,
    updateRecycling,
    deleteRecycling,
    commentOnPost

 }