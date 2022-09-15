import React, { useEffect, useState } from 'react'
import BlogPostCard from '../../components/blogPostCard/BlogPostCard'
import LoadingIcon from "../../components/loadingIcon/LoadingIcon"
import { Sidebar } from "../../components/side-bar/Sidebar"
import { api } from "../../services/AxiosService"

export default function Blog() {

  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    const getBlogPosts = async () => {
      let posts = await fetchBlogPosts()
      posts = posts.filter(p => p.id != 1)
      setBlogPosts(posts)
      console.log(posts);
    }
    getBlogPosts()
  }, [])

  async function fetchBlogPosts() {
    const res = await api.get('')
    return (res.data)
  }

  function Loading() {
    if (!blogPosts[0]) {
      return (
        <>
          <div className="d-flex justify-content-center">
            <LoadingIcon />
          </div>
        </>
      )
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="mt-4">
              <div className="row">{blogPosts.map((b) => {
                return (
                  <div className="col-md-6">
                    <BlogPostCard blog={b} key={b.id}></BlogPostCard>
                  </div>
                )
              })}</div>
              <Loading></Loading>
              <div>

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}





