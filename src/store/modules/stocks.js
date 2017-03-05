import stocks from '../../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS' (state, stocks) {
        console.log(stocks)
        state.stocks = stocks
    },
    'RANDOM_STOCKS' (state) {
        //
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit()
    },
    initStocks: ({ commit }) => {
        console.log(stocks)
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({ commit }) => {
        commit('RANDOM_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}