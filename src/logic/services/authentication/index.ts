import { API_URLS } from "@/logic/config";
import { EditProfileInfo, LoginInfo, PasswordConfigs, RegisterInfo } from "@/logic/interfaces";
import { apiClient } from "..";


export const login = async (userInfo: LoginInfo) => {
  const userInfo2 = { ...userInfo, phone: userInfo.phone.slice(2) }
  return apiClient({ url: API_URLS.login, method: "POST", data: { ...userInfo2 } })
};

export const verify = async (info: {code: string, id: string}) => {
	return apiClient({ url: API_URLS.verify + "/" + info.id, method: "POST", data: { code: info.code } })
  };

export const fetchRegisterData = () => {
  return apiClient({ url: API_URLS.register, method: "GET" })
};

export const registerUser = (registerInfo: RegisterInfo) => {
  const registerInfo2 = { ...registerInfo, phone: registerInfo.phone.slice(2) }
  return apiClient({ url: API_URLS.register, method: "POST", data: { ...registerInfo2 } })
}

export const fetchProfileData = () => {
  return apiClient({ url: API_URLS.profile, method: "GET" })
}

export const updateProfileInfo = (profileInfo: EditProfileInfo) => {
  return apiClient({ url: API_URLS.profile, method: "PUT", data: { ...profileInfo } })
}

export const changePassword = (passwordConfigs: PasswordConfigs) => {
  return apiClient({ url: API_URLS.resetPassword, method: "POST", data: { ...passwordConfigs } })
}

export const getNotification = () => {
  return apiClient({ url: API_URLS.notification, method: "GET" })
}

export const getNotificationNumber = () => {
  return apiClient({ url: API_URLS.notification + API_URLS.count, method: "GET" })
}

export const readNotifications = (id: string) => {
  return apiClient({ url: API_URLS.notification + "/" + id + API_URLS.markAsRead, method: "GET" })
}


export const sendForgetPassword = async (info: {phone: string}) => {
	return apiClient({ url: API_URLS.sendForgetPassword, method: "POST", data: { phone: info.phone.slice(2) } })
}

export const resetForgetPassword = async (info: {id: string, code: string, password: string}) => {
	return apiClient({ url: API_URLS.resetForgetPassword + info.id, method: "POST", data: { code: info.code, password: info.password, password_confirmation: info.password } })
}