import axios from "axios";
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        auth: false,
        cars: [],
        drivers: [],
        users: []
    },
    mutations: {
        SET_AUTH: (state) => {
            state.auth = true;
        },
        SET_CARS: (state, data) => {
            state.cars = data
        },
        SET_DRIVER: (state, data) => {
            state.organizations = data
        },
        SET_ORDERS: (state, data) => {
            state.users = data
        },
        ADD_ONE_DRIVER: (state, data) => {
            state.offices.push(data)
        }
    },
    actions: {
        REGISTRATION({commit}, data){
            return axios('http://localhost:8000/auth/users/', {
                method: 'POST',
                data
            })
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
            })
        },
        LOGIN({commit}, data){
            

            return axios('http://localhost:8000/auth/jwt/create/', {
                method: 'POST',
                data
            })
            .then(data => {
                if(data.status === 200){
                    commit('SET_AUTH', null)
                }
                return data;
            })
            .catch(error => {
                return error.response.data
            })
        },
        API_CARS({commit}){
            

            return axios('http://localhost:8000/car/', {
                method: 'GET',
            })
            .then(data => {
                    commit('SET_CARS', data.data)
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        API_DRIVERS({commit}){
            

            return axios('http://localhost:8000/drivers/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                console.log(data)
                    commit('SET_DRIVERS', data.data)
                    
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        API_ORDERS({commit}){
            

            return axios('http://localhost:8000/orders/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                console.log(data)
                    commit('SET_ORDERS', data.data)
                    
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        ADD_CAR({commit}, data){

            return axios('http://localhost:8000/car/', {
                method: 'POST',
                data,
            })
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        EDIT_CAR({commit}, data){
            console.log(data.obj)
            return axios.put('http://localhost:8000/car/' + data.numb + '/', 
                data.obj,{
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token')
            }})
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        DELETE_CAR({commit}, data){
            console.log(data.obj)
            return axios.delete('http://localhost:8000/car/' + data.numb + '/')
            .then(data => {
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        ADD_ONE_CAR_ACTION({commit}, data){
            commit('ADD_ONE_CAR', data)
        }
    },
    getters: {
        GET_AUTH(state){
            return state.auth
        },
        GET_CARS(state){
            return state.cars
        },
        GET_DRIVER(state){
            return state.drivers
        },
        GET_USERS(state){
            return state.users
        }
    }
})

export default store;