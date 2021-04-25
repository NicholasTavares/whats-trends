import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getToday() {
    const request = axios.get(`${BASE_URL}/`)
    return {
        type: 'TODAY',
        payload: request
    }
}