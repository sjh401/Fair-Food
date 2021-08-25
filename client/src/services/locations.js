import api from './api-config';

export const getAllLocations = async () => {
    try {
        let res = await api.get('/locations');
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}

export const getLocation = async (id) => {
    try {
        let res = await api.get(`/locations/${id}`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}