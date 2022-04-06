import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    const getPosts = async () => {
        const getPosts = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await getPosts.json()
        setBlogs(posts)
    }

    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div>
        {blogs.map((blog) => (
            <p><Link to={`/blog/${blog.id}`}>{blog.id} - {blog.title}</Link></p>
        ))}
    </div>
  )
}

export default Blogs
