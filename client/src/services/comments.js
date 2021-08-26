import api from './api-config';

export const getAllComments = async (location_id, food_id) => {
    try {
        let res = await api.get(`/locations/${location_id}/foods/${food_id}/comments`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}

export const getComment = async (location_id, food_id, id) => {
    try {
        let res = await api.get(`/locations/${location_id}/foods/${food_id}/comments/${id}`);
        return res.data
    } catch (e) {
        return ({ errors: e })
    }
}

export const postFood = async (location_id, food_id, commentData) => {
    try {
        let res = await api.post(`/locations/${location_id}/foods/${food_id}/comments`, { comment: commentData });
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}

export const putFood = async (location_id, food_id, id, commentData) => {
    try {
        let res = await api.put(`/locations/${location_id}/foods/${food_id}/comments/${id}`, { comment: commentData });
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}

export const deleteFood = async (location_id, food_id, id) => {
    try {
        let res = await api.delete(`/locations/${location_id}/foods/${food_id}/comments/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e })
    }
}