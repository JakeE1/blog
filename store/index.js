export const state = () => ({
    postLoaded: [],
    token: null
})

export const actions = {
    nuxtServerInit ({commit}, context) {
        return this.$axios.$get('https://blog-app-b278b.firebaseio.com/posts.json')
            .then(res => {
               
                const postArray = []
                for (let key in res) {
                    postArray.push( { ...res[key], id: key } )
                }

                commit('setPosts', postArray)
            })
            .catch(e => console.log(e))
    
    },
    addPost ({commit}, post) {
        this.$axios.post('https://blog-app-b278b.firebaseio.com/posts.json', post)
            .then(res => {
                commit('addPost', { ...post, id: res.data.name })
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
        .then((res) => { commit('setToken', res.data.idToken)})
        .catch((err) => console.log(err))
      },
      logoutUser ({commit}) {
          commit('destroyToken')
      }
}

export const mutations = {
    setPosts (state, posts) {
        state.postLoaded = posts
    },
    addPost (state, post) {
        console.log(post);
        state.postLoaded.push(post)
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
    checkAuthUser (state) {
        return state.token != null
    },
}