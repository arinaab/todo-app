const state = {
    photos: []
};

const getters = {
    getPhotosState(state) {
        return state.photos
    }
};

const mutations = {
    ADD_SPREAD(state, arr) {
        state.photos = [...arr]
    }
};

const actions = {

};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}