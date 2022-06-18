const state = {
    deleted: []
};

const getters = {
    deletedState(state) {
        return state.deleted;
    },
};

const mutations = {
    ADD_TO_DELETED(state, item) {
        state.deleted.push(item);
        localStorage.setItem('deleted', JSON.stringify(state.deleted))
    },
    SPREAD_DEL_LS(state, arr) {
        state.deleted = [...arr]
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