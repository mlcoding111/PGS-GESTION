import React from 'react'
import {CircleNotifications}  from '@mui/icons-material'
import Post from './Post/Post'

import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector((state)=> state.posts)
    
    console.log('THIS : ', posts)
    
    return (
        !posts.length ? <CircleNotifications/> : (
            <>
                {posts.map((post, key)=>(
                    <h1 key={key}>{post.title}s</h1>
                ))}
            </>
        )
    )
}

export default Posts
