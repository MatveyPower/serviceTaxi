import axios from "axios";
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        auth: false,
        cars: [],
        organizations: [],
        users: []
    },
    mutations: {
        SET_AUTH: (state) => {
            state.auth = true;
        },
        SET_CARS: (state, data) => {
            state.cars = data
        },
        SET_ORGANIZATIONS: (state, data) => {
            state.organizations = data
        },
        SET_USERS: (state, data) => {
            state.users = data
        },
        ADD_ONE_OFFICE: (state, data) => {
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
        API_ORGANIZATIONS({commit}){
            

            return axios('http://localhost:8000/organizations/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                console.log(data)
                    commit('SET_ORGANIZATIONS', data.data)
                    
                
                return data;
            })
            .catch(error => {
                return error.response.data
                
            })
        },
        API_USERS({commit}){
            

            return axios('http://localhost:8000/users/', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(data => {
                console.log(data)
                    commit('SET_USERS', data.data)
                    
                
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
        ADD_ONE_OFFICE_ACTION({commit}, data){
            commit('ADD_ONE_OFFICE', data)
        }
    },
    getters: {
        GET_AUTH(state){
            return state.auth
        },
        GET_CARS(state){
            return state.cars
        },
        GET_ORGANIZATIONS(state){
            return state.organizations
        },
        GET_USERS(state){
            return state.users
        }
    }
})

export default store;