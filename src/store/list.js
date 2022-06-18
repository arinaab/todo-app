const state = {
    list: [],
};

const getters = {
    listState(state) {
        return state.list
    }
};

const mutations = {
    ADD_TODO(state, item) {
        state.list.push(item);
        localStorage.setItem('names', JSON.stringify(state.list))
    },
    DELETE_TODO(state, i) {
        state.list.splice(i, 1);
        localStorage.setItem('names', JSON.stringify(state.list))
    },
    SPREAD_LS(state, arr) {
        state.list = [...arr]
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