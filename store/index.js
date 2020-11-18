export const state = () => ({
    postLoaded: [],
    commentsLoaded: []
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
    editPost ({commit}, post) {
        return this.$axios.put(`https://blog-app-b278b.firebaseio.com/posts/${post.id}.json`, post)
            .then(res => {
                console.log(res)
                commit('editPost', post)
            })
            .catch(e => console.log(e))
    },
    addComment ({commit}, comments) {
        this.$axios.post('https://blog-app-b278b.firebaseio.com/comments.json', comments)
            .then(res => {
                commit('addComment', { ...post, id: res.data.name })
            })
            .catch(e => console.log(e))
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
    addComment (state, comment) {
        console.log(comment);
        state.commentsLoaded.push(comment)
    },
}

export const getters = {
    getPostLoaded (state) {
        return state.postLoaded
    }
}