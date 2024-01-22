import { USER_STATUS } from "@/logic/config";
import { useCoursesStore } from "@/logic/store";
import { PropsWithChildren, useEffect } from "react";



export const AppProvider = (props: PropsWithChildren) => {
    const { fetchNotificationCount, fetchCategoriesInfo, authenticatedStatus, updateUserStatus } = useCoursesStore();
    useEffect(() => {
        const getData = () => {
            try {
                let accessTokenObj = localStorage.getItem('token') ?? ''
                if (accessTokenObj !== null) updateUserStatus(USER_STATUS.LOGGED_IN)
                else updateUserStatus(USER_STATUS.NOT_LOGGEN_IN)

            } catch (e) {
                updateUserStatus(USER_STATUS.UNDEFINED)
            }
            if (authenticatedStatus === USER_STATUS.LOGGED_IN) fetchNotificationCount()
        }
        getData()
    }, [authenticatedStatus])

    return (
        <>{props.children}</>
    )
}