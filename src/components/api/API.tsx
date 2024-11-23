import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "0f51c733-1238-4284-9bea-09e60bc2f6da",
  },
});

export const API_USERS = {
  getUser(page: number) {
    return instance.get("users", {
      params: {
        page: page,
        count: 20,
      },
    });
  },
  followUser(userId: string) {
    return instance.post(`/follow/${userId}`);
  },
  unFollowUser(userId: string) {
    return instance.delete(`/follow/${userId}`);
  },
};

export const API_PROFILE = {
  getProfile(userId: any) {
    return instance.get(`profile/${userId}`, {});
  },
  updateStatus(status: string) {
    return instance.put("/profile/status", { status: status });
  },
  getStatus(userId: string) {
    return instance.get("/profile/status/" + userId);
  },
  savePhoto(photo: any) {
    let formData = new FormData();
    formData.append("image", photo);
    return instance.put(`/profile/photo/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateProfile(profile: any) {
    return instance.put(`/profile/`, profile);
  },
};

export const API_LOGIN = {
  getAuth() {
    return instance.get(`/auth/me`);
  },
  login(
    email: any,
    password: any,
    rememberMe: boolean = false,
    captcha = null
  ) {
    return instance.post(`/auth/login`, {
      email: email,
      password: password,
      rememberMe: rememberMe,
      captcha: captcha,
    });
  },
  loginOut() {
    return instance.delete(`/auth/login`);
  },
};
export const API_SECURITY = {
  getCaptcha() {
    return instance.get(`/security/get-captcha-url`);
  },
};
