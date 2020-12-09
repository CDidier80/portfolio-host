import ApiClient from './ApiClient'


// in the project change it to upload
export const __ChangePhoto = async (url) => {
    try {
        let userId = 1
        let updatePhoto = { picture: url }
        console.log(updatePhoto)
        const res = await ApiClient.put(`/users/update/${userId}`, updatePhoto)
        return res.config.data
    } catch (error) {
        throw error
    }
}


// to display image on the screen

export const __LoadImages = async () => {
    try {
        let userId = 1
        const res = await ApiClient.get(`users/read/${userId}`)
        console.log('after res: ', res.data.picture)
        return res.data.picture
    } catch (error) {
        throw error
    }
}