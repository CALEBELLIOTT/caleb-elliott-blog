// @ts-nocheck
import axios from "axios"
import React, { useEffect, useState } from 'react'
import LoadingIcon from "../components/loadingIcon/LoadingIcon"
import { Sidebar } from "../components/side-bar/Sidebar"
import { api } from "../services/AxiosService"
import { contentfulService } from "../services/ContentfulService"
import moment from "moment"

export default function AboutPage() {

  const [post, setPost] = useState({})

  useEffect(() => {
    getAbout()
  }, [])

  async function getAbout() {
    const res = await contentfulService.getEntry({ id: '7C09udfQTAKlh5V1LXTSgj' })
    console.log(res, 'res CE:TEST');
    setPost(res)
  }

  useEffect(() => {
    renderBlogTitle()
    renderBlogContent()
    console.log(post);
  }, [post])

  function renderBlogTitle() {
    const {
      fields: {
        title = '',
        publishDate = ''
      } = {}
    } = post
    if (title) {
      document.getElementById("blog-title").innerHTML = title
      let date = moment(publishDate).format('MM/DD/YY')
      document.getElementById('blog-date').innerText = date
    }
  }
  function renderBlogContent() {
    const {
      fields: {
        title = '',
      } = {}
    } = post
    if (title) {
      document.getElementById('blog-content').innerHTML = post.fields.body
    }
  }

  function Loading() {
    const {
      sys: {
        id = ''
      } = {}
    } = post
    if (!id) {
      return (
        <>
          <div className="d-flex justify-content-center mt-5">
            <LoadingIcon></LoadingIcon>
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
            <Loading />
            <div className="mt-4">
              <h4 className="fw-bold" id="blog-title"></h4>
              <p id="blog-date" className="text-success"></p>
              <img src="" id="blog-img" className="img-fluid"></img>
              <div className="mt-2" id="blog-content">
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </>
  )
}