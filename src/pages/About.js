import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Sidebar } from "../components/side-bar/Sidebar"
import { api } from "../services/AxiosService"

export default function AboutPage() {

  const [post, setPost] = useState({})

  useEffect(() => {
    const getAbout = async () => {
      let aboutPost = axios.create({
        baseURL: "http://moneywithcaleb.com/wp-json/wp/v2/posts/1"
      })
      const res = await aboutPost.get('')
      setPost(res.data)
    }
    getAbout()
  }, [])


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>{post.title?.rendered}</h1>
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  )
}