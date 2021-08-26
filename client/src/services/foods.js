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

export const postFood = async (location_id, foodData) => {
    try {
        let res = await api.post(`/locations/${location_id}/foods`, { food: foodData });
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}

export const putFood = async (location_id, food_id, foodData) => {
    try {
        let res = await api.put(`/locations/${location_id}/foods/${food_id}`, foodData);
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}

export const deleteFood = async (location_id, food_id) => {
    try {
        let res = await api.delete(`/locations/${location_id}/foods/${food_id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}