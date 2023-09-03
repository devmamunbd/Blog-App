import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'
import InputSelect from '../../components/input-select'




const postForm = () => {

const dispatch = useDispatch()

  const initialPost ={
    title: '',
    content: '',
    status: '',
    authorId: '',
  }


const [ post, setPost ] = useState(initialPost)

const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(addPost(post))
  setPost(initialPost)

}


const onChange = (value) => {
  setPost({...post, authorId: value})
}

const canSubmit =[post.title, post.content].every(Boolean)


  return (
    <form onSubmit={handleSubmit}
    className="flex flex-col gap-2 w-full max-w-[500px] rounded-md border border-solid  border-neutral-200 px-6 py-8 bg-white shadow-md">
        <div className="flex flex-col gap-2">
            <label  className="animate__heartBeat font-semibold" htmlFor="title">Post Title</label>
            <input className="px-4 py-2 border-neatral-500 rounded-md border border-solid"
             type="text" name="title" id="title" value={post.title} onChange={e => setPost({...post, title: e.target.value})} />
        </div>
        <div className="flex flex-col gap-2">
            <label className="font-semibold animate__heartBeat" htmlFor="content">Post Content</label>
            <textarea className="px-4 py-2 border-neatral-500 rounded-md border border-solid resize-none h-36"
             name="content" id="content" value={post.content} onChange={e => setPost({...post, content: e.target.value})} />
        </div>

    <div className="">
      <InputSelect 
      value={post.authorId}
      onChange={onChange}
      />
      
    </div>

      <div className="flex gap-2">
        <input type="radio" 
        name="status" 
        id="publish" 
        value= "publish"
        onChange={(e) => setPost({...post, status: e.target.value})}
        />
        <label htmlFor="publish">Publish</label>

        
        <input type="radio" 
        name="status" 
        id="pending" 
        value= "pending"
        onChange={(e) => setPost({...post, status: e.target.value})}
        />
        <label htmlFor="pending">Pending</label>
      </div>

        <button 
       disabled={!canSubmit}
        className="px-10 py-2 bg-neutral-900 w-auto text-white font-semibold rounded-md disabled:bg-neutral-900/60" 
        type="submit">
          Add</button>
    </form>
  )
}

export default postForm