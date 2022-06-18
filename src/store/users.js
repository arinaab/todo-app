const state = {
    users: []
};

const getters = {
    getUsers(state) {
        return state.users
    }
};

const mutations = {
    ADD_TO_USERS(state, item) {
        state.users.push(item)
    },
    SPREAD_USERS(state, arr) {
        state.users = [...arr]
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