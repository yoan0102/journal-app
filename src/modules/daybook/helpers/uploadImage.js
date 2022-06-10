import axios from "axios"

const uploadImage = async (file) => {
  if (!file) {
    return
  }
  try {
    const FD = new FormData()
    FD.append("upload_preset", "curso-vue")
    FD.append("file", file)

    const url = "https://api.cloudinary.com/v1_1/dxrdytbzb/image/upload"
    const { data } = await axios.post(url, FD)
    return data.secure_url
  } catch (error) {
    console.log("Error al cargar la imagen")
    console.error(error)
    return null
  }
}

export default uploadImage
