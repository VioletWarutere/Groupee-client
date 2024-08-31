import { BASE_URL } from "../utils/backend_services";
import Cookies from "js-cookie";

const getGroup = async(id) => {
    const token = Cookies.get(`token`);
    console.log(id);
    try {
        const response = await fetch(`${BASE_URL}/groups/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(response.ok){
            const data = await response.json();
            return data;
        }else{
            console.log(response)
        }
}catch(error){
    console.log(error);
    alert(`Error: ${error.message}`);
}
}

// eslint-disable-next-line no-undef
module.exports = { getGroup } ;