export const state = () => ({
    postLoaded: [],
    cardsLoaded: [],
    token: null
})

import {getUserFromCookie, getUserFromSession} from '@/helpers'


export const actions = {
    
    async nuxtServerInit ({ dispatch, commit }, { req }) {
        const user = getUserFromCookie(req)
        if (user) {
          await dispatch('modules/user/setUSER', { name: user.name, email: user.email, avatar: user.picture, uid: user.user_id})
        }
      
        let [posts, cards] =  await Promise.all([
            this.$axios.$get('https://blog-app-b278b.firebaseio.com/posts.json')
            .then(res => {
               
                const postArray = []
                for (let key in res) {
                    postArray.push( { ...res[key], id: key } )
                }

                commit('setPosts', postArray)
            })
            .catch(e => console.log(e)),
            this.$axios.$get('https://blog-app-b278b.firebaseio.com/cards.json')
                .then(res => {
                    console.log(`Vlat vot result ${res}`);
                    const cardArray = []
                    for (let key in res) {
                        cardArray.push( { ...res[key], id: key } )
                    }
                    commit('setCards', cardArray)
                })
        ])
    
    },
    addPost ({commit}, post) {
        this.$axios.post('https://blog-app-b278b.firebaseio.com/posts.json', post)
            .then(res => {
                commit('addPost', { ...post, id: res.data.name })
            })
            .catch(e => console.log(e))
    },
    addCard ({commit}, card) {
        this.$axios.post('https://blog-app-b278b.firebaseio.com/cards.json', card)
            .then(res => {
                commit('addCard', { ...card, id: res.data.name })
            })
            .catch(e => console.log(e))
    },
    editPost ({commit, state}, post) {
        return this.$axios.put(`https://blog-app-b278b.firebaseio.com/posts/${post.id.slice(1)}.json?auth=${state.token}`, post)
            .then(res => {
                console.log(res)
                commit('editPost', post)
            })
            .catch(e => console.log(e))
    },
    addComment ({commit}, comments) {
        this.$axios.post('https://blog-app-b278b.firebaseio.com/comments.json', comments)
            .catch(e => console.log(e))
    },
    authUser ({commit}, authData) {
        const KEY = 'AIzaSyCd_U8mccij1TqAtI04YYwkGVEqDFJiH14'
        return this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${KEY}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then((res) => { 
            let token = res.data.idToken
            commit('setToken', res.data.idToken)
            localStorage.setItem('token', token)
        })
        .catch((err) => console.log(err))
      },
    initAuth ({commit}) {
          let token = localStorage.getItem('token')
          if (!token) {
              return false
          }
          commit('setToken', token)
        },
    logoutUser ({commit}) {
          commit('destroyToken')
          localStorage.removeItem('token')
        }
}

export const mutations = {
    setPosts (state, posts) {
        state.postLoaded = posts
    },
    addPost (state, post) {
        state.postLoaded.push(post)
    },
    setCards (state, cards) {
        state.cardsLoaded = cards
    },
    editPost (state, postEdit) {
        const postIndex = state.postLoaded.findIndex( post => post.id === postEdit.id)
        state.postLoaded[postIndex] = postEdit
    },
    setToken (state, token) {
        state.token = token
    },
    destroyToken (state) {
        state.token = null
        
    }
}

export const getters = {
    getPostLoaded (state) {
        return state.postLoaded
    },
    getCardsLoaded (state) {
        return state.cardsLoaded 
    },
    checkAuthUser (state) {
        return state.token != null
    },
}