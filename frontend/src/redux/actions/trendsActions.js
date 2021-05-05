import axios from 'axios'
const BASE_URL = 'http://localhost:3002/api'

export function getDailyTrends() {
    const request = axios.get(`${BASE_URL}/dailytrends`)
    console.log(`REQUISÇÂO KEYWORD: ${request.data}`)
    return {
        type: 'KEYWORD',
        payload: request
    }
}