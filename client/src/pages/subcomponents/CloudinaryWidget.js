import React, {useEffect} from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { __UploadPhoto, __LoadImages } from "../../Services/CloudinaryService"


const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME
const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET


const CloudinaryWidget = props => {
    console.log('inside widget', props)
    const { userId, projectOrProfilePic } = props
  
    const oneOrMany = projectOrProfilePic === "Project" ? true : false
    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: CLOUD_NAME,
            uploadPreset: UPLOAD_PRESET,
            multiple: oneOrMany,
            resourceType: "image",
            maxFileSize: 1500000,
            autoUpload: false
        },
        (error, result) => { checkUpload(result) })

    const checkUpload = async (resultEvent) => {
        if (resultEvent.event === 'success') {
            try {
                const url = await resultEvent.info.secure_url
                if (url) {
                    // take on two parameters, the user id and url of photo
                    await __UploadPhoto(userId, url)
                    // await updateRender()
                }
            }
            catch (err) { throw err }
        }
    }

    useEffect(() => {
        props.widgetOpen ? widget.open() : widget.close()
    }, [props.widgetOpen]) 

    return (
        <div className="uploader">
            <div style ={{backgroundColor: "green"}}className="uploader">
            </div>
        </div>
    )
}

export default CloudinaryWidget;



