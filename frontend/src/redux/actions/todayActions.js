import axios from 'axios'
const BASE_URL = 'http://localhost:3002/api'

export function getToday() {
    const request = axios.get(`${BASE_URL}/overtime/`, { keyword: 'Flamengo', startTime: new Date(Date.now() - (4 * 60 * 60 * 1000)) })
    console.log(`REQUISÇÂO KEYWORD: ${request}`)
    return {
        type: 'KEYWORD',
        payload: request
    }
}