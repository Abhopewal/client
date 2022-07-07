import React from 'react'
import { Outlet } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import BlogHeader from '../../components/Blog.Header';

const BlogLayout = () => {
    return (
        <>
            <BlogHeader/>
            <Blog/>
        </>
    )
}

export default BlogLayout