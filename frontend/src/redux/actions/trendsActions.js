import axios from 'axios'
const BASE_URL = 'http://localhost:3002/api'

export function getInterestKeyword() {
    const request = axios.get(`${BASE_URL}/overtime`)
    //console.log(`REQUISÇÂO KEYWORD: ${request.data}`)
    return {
        type: 'KEYWORD',
        payload: request
    }
}