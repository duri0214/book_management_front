import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATE_BOOKS, UPDATE_CATEGORIES } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    books: {},
    categories: []
  },
  getters: {
    getPreviousURL (state) {
      return state.books.previous
    },
    getNextURL (state) {
      return state.books.next
    },
    hasPrevious (state) {
      return !!state.books.previous
    },
    hasNext (state) {
      return !!state.books.next
    },
    bookRangeFirst (state) {
      return state.books.range_first
    },
    bookRangeLast (state) {
      return state.books.range_last
    },
    bookCurrentPageNumber (state) {
      return state.books.current_page
    },
    bookCount (state) {
      return state.books.count
    },
    bookList (state) {
      return state.books.results
    },
    categoryList (state) {
      return state.categories
    }
  },
  mutations: {
    [UPDATE_BOOKS] (state, payload) {
      state.books = payload
    },
    [UPDATE_CATEGORIES] (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    [UPDATE_BOOKS] ({commit}, payload) {
      commit(UPDATE_BOOKS, payload)
    },
    [UPDATE_CATEGORIES] ({commit}, payload) {
      commit(UPDATE_CATEGORIES, payload)
    }
  },
  modules: {}
})
