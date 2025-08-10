import axios from "axios";

async function fetchUserData(...querys) {
    let url = '';
    let params = '';
    if ((querys.length) == 1 ) {
        params = querys[0]
        url = `https://api.github.com/users/${params}`;
    } else {
        querys.map(query => {
            for (let [key, value] of Object.entries(query)) {
                console.log(key, value)
                params += `${key}:${value}+`
            }
        })
        params = params.slice(0, -1);
        url = `https://api.github.com/search/users?q=${params}`
    }

    console.log(url)

    try {
        const response = await axios.get(url)
         return response;
        
    } catch (error) {
        console.log(error);
        return error
    }

    
}

export default fetchUserData;
