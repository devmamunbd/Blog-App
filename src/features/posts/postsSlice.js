import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";


export const fetchPost = createAsyncThunk('posts/fetchPost', async () => {
    
    try {
        const res = await fetch('https://dummyjson.com/posts')
        const data = await res.json()
        
        return data.posts
    } catch (error) {
      return error  
    }

   
})



const reactions ={
    like: 0,
    dislike: 0,
    love: 0,
    haha: 0,
    care: 0,
    sad: 0,
    angry: 0,

}

const initialState = {
    posts: 'initial',
    posts: [],
    error: ''
}

export const postsSlice = createSlice ({
    name: 'posts',
    initialState,

    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid(),
                        createdAt: new Date().toISOString(),
                        reactions,
                    }
                }
            }
        },
        increaseReaction: (state, action) => {
            const { reaction, postId } = action.payload
            const targetPost = state.find((post) => post.id == postId)
            targetPost.reactions[reaction]++
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state, action) => {
            state.status = 'pending'
            state.error =''
        })
        .addCase(fetchPost.fulfilled , (state, action) => {
            state.status = 'success'
            state.posts = action.payload
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.status = 'error'
            state.status = action.payload
        })
    }
    
})

export const { addPost, increaseReaction } = postsSlice.actions

export const getPosts = (store) => store.posts.posts

export default postsSlice.reducer