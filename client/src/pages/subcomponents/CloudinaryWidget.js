import { __UploadPhoto, __LoadImages} from "../services/CloudinaryService"

const CloudinaryWidget = props => {
    const {userId, projectOrProfilePic } = props
    const oneOrMany = projectOrProfilePic === "Project" ? true: false
    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: CLOUD_NAME,
            uploadPreset: UPLOAD_PRESET,
            multiple: oneOrMany,
            resourceType: "image",
            maxFileSize: 1500000,
            autoUpload: false
        },
        (error, result) => {checkUpload(result)})

    const checkUpload = async (resultEvent) => {
        if (resultEvent.event === 'success') {
            try {
                const url = await resultEvent.info.secure_url
                if (url) {
                    await __UploadPhoto(url)
                    await updateRender()
                }
            }
            catch (err) { throw err }
        }
    }
    const updateRender = async () => {
        await props.setImages()
    }

    return (
        <div className="uploader">
            <div className="uploader">
                <button className="btn indigo darken-3" onClick={() => widget.open()}><i className="material-icons left">cloud_upload</i>Upload file</button>
            </div>
        </div>
    )
}

export default CloudinaryWidget;



