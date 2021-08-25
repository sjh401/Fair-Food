import api from './api-config';

export const getAllFoods = async (location_id) => {
    try {
        let res = await api.get(`/locations/${location_id}/foods`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}

export const getFood = async (location_id, id) => {
    try {
        let res = await api.get(`/locations/${location_id}/foods/${id}`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}