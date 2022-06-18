const state = {
    done: []
};

const getters = {
    doneState(state) {
        return state.done
    }
};

const mutations = {
    ADD_TO_DONE(state, item) {
        state.done.push(item);
        localStorage.setItem('done', JSON.stringify(state.done))
    },
    SPREAD_DONE_LS(state, arr) {
        state.done = [...arr]
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