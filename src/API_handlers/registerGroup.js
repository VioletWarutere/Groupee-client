import { BASE_URL } from "../utils/backend_services";
import Cookies from "js-cookie";

const registerGroup = async({formData}) => {
    const token = Cookies.get(`token`);
    console.log(formData);
    try {
        const response = await fetch(`${BASE_URL}/groups`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        })

        if(response.ok){
            const data = await response.json();
            console.log('Group registered successfully', data);
            return data;
        }else{
            console.log(`Group failed to register`);
        }
    } catch (error) {
        console.error(error);
        alert(`Error : ${error.message} registering groups`)
    }
}

// eslint-disable-next-line no-undef
module.exports = { registerGroup };