
import { formatDistanceToNow, parseISO } from "date-fns"
import { useDispatch, useSelector } from "react-redux"
import { fetchPost, increaseReaction, getPosts } from "./postsSlice"
import { useEffect } from "react"


export const PostList = () => {

    const dispatch = useDispatch()

    const posts = useSelector(getPosts)
    
   
    
    const users = useSelector((store) => store.users)


    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])
   

    const getUserById = (id) => {
        if(!id) {
            return 'Unknown Author'
        }

        const author = users.find((user) => user.id == id)

        return author.name

    }


    const reactionEmoji = {
        like: '👍',
        dislike: '👎',
        love: '❤️',
        haha: '😂',
        care: '🤗',
        sad: '😥',
        angry: '😠',
    }
        
    


    return (
        <section className="max-w-[400] grid grid-cols-3">
            {posts.map(
                (post) => 
                 (
                    <div className="px-4 py-5 rounded-lg shadow-md" key={post.id}>
                        <h2 className="font-bold text-neutral-900 mb-2">{post.title}</h2>
                        <p className="text-xs mb-1">
                            {getUserById(post.authorId)} - {''}

                            {/* {formatDistanceToNow(parseISO(post.createdAt))} ago */}
                            
                            </p>
                            
                        <p className="text-sm text-neutral-500 leading-5 ">{post.body}</p>
                        <div className="flex gap-1">
                            {Object.entries(reactionEmoji).map(([name, emoji]) => {
                                return (
                                    <div key={name}>
                                      <button className="px-2 py-1 rounded-full hover:bg-neutral-500 transition"
                                      onClick={() =>
                                       dispatch(
                                        increaseReaction({ reaction: name, postId: post.id }))} > 
                                      {emoji} </button> {''} 
                                      {post.reactions[name]}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            )}
        </section>
    )
    
}

