import accountService from "../../services/accountService";


const state = {
    accounts: []
};

const getters = {
    accounts: state => {
        return state.accounts
    }
};

const actions = {
    getAccounts({ commit }) {
        accountService.fetchAccounts()
            .then(accounts => {
                commit('setAccount', accounts)
            })
    }
};

const mutations = {
    setAccount(state, accounts) {
        state.accounts = accounts
    }
};

export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
}
