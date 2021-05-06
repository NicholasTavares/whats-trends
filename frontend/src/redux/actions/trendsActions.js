import axios from 'axios'
const BASE_URL = 'http://localhost:3002/api'

export function getDailyTrends() {
    const request = axios.get(`${BASE_URL}/dailytrends`)
    console.log(`REQUISÇÂO DAILY: ${request.data}`)
    return {
        type: 'DAILY',
        payload: request
    }
}

export function getRealTimeTrends() {
    const request = axios.get(`${BASE_URL}/realtimetrends`)
    console.log(`REQUISÇÂO REALTIME: ${request.data}`)
    return {
        type: 'REALTIME',
        payload: request
    }
}