import { GeneralObject } from "."

export interface RegisterInfo {
    name_en: string
    name_ar: string
    phone: string,
    password: string
    password_confirmation: string
    email: string
    date_of_birth: string
    nationality_id: string
    education_level_id: string
    address: string
    reference: string
}

export interface RegisterInfoAPI {
    education_levels: GeneralObject
    nationalities: GeneralObject
}

export interface LoginInfo {
    phone: string
    password: string
}

export interface ProfileInfo {
    phone: string
    name_ar: string
    name_en: string
    email: string
    date_of_birth: string
    address: string
    reference: string
    education_level: GeneralObject
    nationality: GeneralObject
}

export interface EditProfileInfo {
    name_en: string
    name_ar: string
    email: string
    date_of_birth: string
    nationality_id: string
    education_level_id: string
    address: string
    reference: string
}

export interface PasswordConfigs {
    old_password: string
    new_password: string
    new_password_confirmation: string
}

export interface Notification {
    id: string
    title: string
    text: string
    read: boolean
    actionUrl: NotificationRedirectUrl
}

export interface NotificationRedirectUrl {
    screen_name: string
    params: any
}