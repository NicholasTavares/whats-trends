import axios from 'axios'
const BASE_URL = 'http://localhost:3002/api'

export function getDailyTrends() {
    const request = axios.get(`${BASE_URL}/dailytrends`)
    return {
        type: 'DAILY',
        payload: request
    }
}

export function getRealTimeTrends(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    console.log(`REQUISÇÂO category: ${category}`)
    return {
        type: 'REALTIME',
        payload: request
    }
}