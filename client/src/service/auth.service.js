import api from "./api"
import TokenService from "./token.service";

const API_URL = import.meta.env.VITE_AUTH_API;

const register = async (username, fullname, email, password) => {
    return api.post(API_URL + "register", {username, fullname, email, password });
};

const login = async(username, password) =>{
    const response = await api.post(API_URL + "singin", { username, password });
    //saving user data to local storage
    if(!response.data.token){
        return response;
    }
    TokenService.setUser(response.data);
};

const logout = ()=>{
    TokenService.removeUser();
};

const AuthService = {
    register,
    login,
    logout,
};

export default AuthService;;