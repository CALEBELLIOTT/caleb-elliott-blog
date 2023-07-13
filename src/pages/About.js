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
    console.log(post);
  }, [post])



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

  const {
    fields: {
      title,
      body,
      publishDate,
      updatedDate,
      thumbnail: {
        fields: {
          file: {
            url: imgUrl
          } = {}
        } = {}
      } = {}
    } = {}
  } = post || {}

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Loading />
            <div className="mt-4">
              <h4 className="fw-bold">{title}</h4>
              <p className="mb-1">Published: <span className="text-success">{moment(publishDate).format('MM/DD/YY')}</span></p>
              <p>Updated: <span className="text-success">{moment(updatedDate).format('MM/DD/YY')}</span></p>
              <img src={imgUrl} className="img-fluid"></img>
              <div className="mt-2" id="blog-content" dangerouslySetInnerHTML={{ __html: body }}>
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