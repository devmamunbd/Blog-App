import { PostList } from "../features/posts/postList"

const HomePage = () => {
  return (
    <div>

    <div className="min-h-screen flex flex-col gap-3 items-center justify-center">
      {/* <PostForm /> */}
     <PostList />
   
    </div>

    </div>
  )
}

export default HomePage