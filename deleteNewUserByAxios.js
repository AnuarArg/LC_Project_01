import axios from "axios";
import users from '../LC_Project_01/data/users.data';
const host = 'https://server-stage.pasv.us';

export  const userDelete = async userEmail =>{
    const response = await axios.post(`${host}/user/login`, {
        email: users.admin.email,
        password: users.admin.password,
    });
    const  token = response.data.token;

    return axios({
        method: 'delete',
        url: `${host}/user/email/${userEmail}`,
        headers: {
            Authorization: token,
        }
    })
        .then(res => res.data)
        .catch(err => err.response.data);
    }
