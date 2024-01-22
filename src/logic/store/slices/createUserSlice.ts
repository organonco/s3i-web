import { USER_STATUS } from "@/logic/config"
import { EditProfileInfo, LoginInfo, PasswordConfigs, ProfileInfo, RegisterInfo, RegisterInfoAPI } from "@/logic/interfaces"
import { changePassword, fetchProfileData, fetchRegisterData, getNotification, getNotificationNumber, login, readNotifications, registerUser, updateProfileInfo } from "@/logic/services"
import { produce } from "immer"
import { StateCreator } from "zustand"

export interface UserSlice {
    authenticatedStatus: USER_STATUS
    registerInfo: RegisterInfoAPI | null
    token: string
    profileInfo: ProfileInfo | null
    loadingNotifications: boolean
    notifications: Notification[]
    notificationNumber: number
    fetchRegisterInfo: () => void
    registerUser: (userInfo: RegisterInfo, redirectToThankYou: () => void, setSubmitting: Function) => void
    loginUser: (userInfo: LoginInfo, redirectToApp: () => void, setSubmitting: Function) => void
    fetchProfileInfo: () => void
    logUserOut: () => void
    updatePassword: (passwordConfigs: PasswordConfigs, redirectAfterUpdate: () => void, setSubmitting: Function) => void
    saveProfileData: (profileInfo: EditProfileInfo, navigateToProfile: () => void, stopLoading: () => void) => void
    fetchNotification: () => void
    fetchNotificationCount: () => void
    markNotificationsAsRead: (id: string) => void
    updateUserStatus: (status: USER_STATUS) => void
}


export const createUserSlice: StateCreator<UserSlice> = (set, get, api) => ({
    authenticatedStatus: USER_STATUS.UNDEFINED,
    registerInfo: null,
    token: '',
    profileInfo: null,
    notificationNumber: 0,
    loadingNotifications: false,
    notifications: [{}, {}, {}],
    fetchRegisterInfo: () => {
        fetchRegisterData().then(data => set(produce(draftState => { draftState.registerInfo = data.data })))
    },
    markNotificationsAsRead: (id: string) => {
        readNotifications(id).then((data) => {
            set(produce(draftState => {
                draftState.notifications = data.notifications
                draftState.notificationNumber = data.count
            }))
        })
    },
    registerUser: (userInfo: RegisterInfo, redirectToThankYou: () => void, setSubmitting: Function) => registerUser(userInfo).then(data => {
        redirectToThankYou()
        setSubmitting(false)
    }),
    loginUser: (userInfo: LoginInfo, redirectToApp: () => void, setSubmitting: Function) => {
        login(userInfo).then((data) => {
            set(produce(draftState => {
                draftState.token = data.token
                draftState.authenticatedStatus = USER_STATUS.LOGGED_IN
            }))
            localStorage.setItem('token', data.token);
            setSubmitting(false)
            redirectToApp()
        }).catch((error) => {
            setSubmitting(false)
            // if (error.data.code == 'invalid_credentials') ToastAndroid.show(t('toast.' + error.data.code), ToastAndroid.SHORT);
            // if (error.data.code == 'account_frozen') ToastAndroid.show(t('toast.' + error.data.code), ToastAndroid.SHORT);
        })
    },
    fetchProfileInfo: () => fetchProfileData().then((data) => set(produce(draftState => { draftState.profileInfo = data.data }))),
    logUserOut: () => set(produce(draftState => {
        draftState.token = ''
        draftState.authenticatedStatus = USER_STATUS.NOT_LOGGEN_IN
        draftState.notificationNumber = 0
    })),
    fetchNotification: () => {
        set(produce(draftState => { draftState.loadingNotifications = true }))
        getNotification().then((data) => {
            set(produce(draftState => {
                draftState.notifications = data.notifications
                draftState.notificationNumber = data.count
                draftState.loadingNotifications = false
            }))
        })
    },
    fetchNotificationCount: () => {
        getNotificationNumber().then((data) => {
            set(produce(draftState => {
                draftState.notificationNumber = JSON.stringify(parseInt(data))
            }))
        })
    },
    updatePassword: (passwordConfigs: PasswordConfigs, redirectAfterUpdate: () => void, setSubmitting: Function) => {
        changePassword(passwordConfigs).then(() => {
            redirectAfterUpdate()
            setSubmitting(false)
        }).catch(() => setSubmitting(false))
    },
    saveProfileData: (profileInfo: EditProfileInfo, navigateToProfile: () => void, stopLoading: () => void) => {
        updateProfileInfo(profileInfo).then((data) => {
            set(produce(draftState => { draftState.profileInfo = data.data }))
            stopLoading()
        }).catch(() => stopLoading())
    },
    updateUserStatus: (status: USER_STATUS) => {
        set(produce(draftState => {
            draftState.authenticatedStatus = status
        }))

    }
})
