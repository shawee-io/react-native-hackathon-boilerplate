import api from './api'

export function login (payload) {
    return api.post('/sessions', payload)
        .then(response => { return response.data })
        .catch(error => { console.error(error) })
}