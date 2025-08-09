import axios from "axios";

async function fetchUserData(username) {

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`)
         return response;
        
    } catch (error) {
        console.log(error);
        return error
    }

    
}

export default fetchUserData;
