import React from 'react'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector((state)=> state.posts)

    console.log(posts)
    console.log('post')
    return (
        <div>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </div>
    )
}

export default Posts
