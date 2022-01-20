import { LoginPayLoad } from "@/models/index";
import axiosClient from "./axiosClient";

export const authApi ={
    login(payload:LoginPayLoad){
        return axiosClient.post("/login",payload);
    },
    logout(){
        return axiosClient.post("/logout");
    },
    getProfile(){
        return axiosClient.get("/profile");
    },
}