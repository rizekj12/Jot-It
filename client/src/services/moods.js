import api from './api-helper'

export const getMoods = async () => {
    const resp = await api.get('/moods')
    return resp.data
}