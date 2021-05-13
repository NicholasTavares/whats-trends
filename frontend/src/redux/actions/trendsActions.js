import axios from 'axios'
import { Component } from 'react'
const BASE_URL = 'http://localhost:3002/api'

export function getDailyTrends() {
    const request = axios.get(`${BASE_URL}/dailytrends`)
    return {
        type: 'DAILY',
        payload: request
    }
}

export function getRealTimeTrendsSports(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'SPORTS',
        payload: request
    }
}

export function getRealTimeTrendsBusiness(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'BUSINESS',
        payload: request
    }
}

export function getRealTimeTrendsEntertainment(category) {
    const request = axios.get(`${BASE_URL}/realtimetrends?category=${category}`)
    return {
        type: 'ENTERTAINMENT',
        payload: request
    }
}

export function getInterestByRegion(keyword, region) {
    console.log('KEYWORD: ', keyword)
    const request = axios.get(`${BASE_URL}/interestbyregiontrends?keyword=${keyword}`)
    return {
        type: 'REGION',
        payload: request
    }
}