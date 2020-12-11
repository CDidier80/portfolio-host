import ApiClient from './ApiClient'

export const __UploadPhoto = async (profileId, url) => {
    try {
        let updatePhoto = { profilePicture: url }
        const res = await ApiClient.put(`/profile/update/${profileId}`, updatePhoto)
        return res.config.data
    } catch (error) {
        throw error
    }
}


// to display image on the screen

export const __LoadImages = async (profileId) => {
    try {

        const res = await ApiClient.get(`profile/read/${profileId}`)
        console.log('after res: ', res.data.picture)
        return res.data.picture
    } catch (error) {
        throw error
    }
}
export const __LoadProjectPhoto = async (projectId) => {
    try {
        let updatePhoto = { projectPicture: url }
        const res = await ApiClient.put(`/project/update/${projectId}`, updatePhoto)
        return res.config.data
    } catch (error) {
        throw error
    }
}