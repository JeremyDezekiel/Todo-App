import axios from 'axios'

const NoteAPI = axios.create({
    baseURL: 'https://flannel-shine-radar.glitch.me/api'
    // baseURL: 'http://localhost:3000'
})
export default NoteAPI