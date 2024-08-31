import { BASE_URL } from "../utils/backend_services"
import Cookies from 'js-cookie'

const login = async({formData}) => {
    const now = new Date();
    const threeHoursLater = new Date(now.getTime() + 3 * 60 * 60 * 1000); // 3 hours in milliseconds

    console.log(formData);
  
    try {
        const response = await fetch(`${BASE_URL}/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
    
        if(response.ok){
            console.log(response)
            const data = await response.json()
            Cookies.set('token', data.token, {expires: threeHoursLater})
            return data;
        }else{
            console.log(`Please check your email and password`)
        }
    } catch (error) {
        console.log(error);
        alert(`An error occurred while logging in: ${error.message}`);
        throw new Error('Error logging in');
    }
    
}

// eslint-disable-next-line no-undef
module.exports = { login }