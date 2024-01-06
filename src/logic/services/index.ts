
export * from './apiClient'
export * from './authentication'
export * from './courses'



export const useUploadFile = async (uploadUrl: string, uploadedFile: DocumentPickerResponse) => {
    // const appstate = await AsyncStorage.getItem('app-state');
    // const token = appstate && JSON.parse(appstate).state.token

    // let data = new FormData()
    // data.append('file', { uri: uploadedFile.uri, type: uploadedFile.type, name: uploadedFile.name })
    // console.log('https://www.thisdomainisonlyfortestingpurposes.xyz/api'+uploadUrl)
    // return axios.post('https://www.thisdomainisonlyfortestingpurposes.xyz/api'+uploadUrl, data, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         Accept: "application/json",
    //         "Content-Type": "multipart/form-data"
    //     }
    // });
}