import axios from 'axios'
// const ApiClient = axios.create({ baseURL: 'http://localhost:3001/api/' })   // for development
const ApiClient = axios.create({ baseURL: process.env.NODE_ENV === 'production'     // <-- for deployment
? `${window.location.origin}/api`
: '<your local backend server>/api' }) 



// used only after user is logged in and authenticated. They maintain authenticated status by checking the validity of the current tokenbuggi
ApiClient.interceptors.request.use(
    async (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
    },
    (err) => Promise.reject(err)
)

export default ApiClient