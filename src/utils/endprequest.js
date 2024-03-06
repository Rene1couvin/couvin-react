import {apiUrl, senderurl} from   './env'
import axios from 'axios'
 const sender = axios.create({
    baseURL:senderurl
 })
 export default sender