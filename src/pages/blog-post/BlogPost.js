// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import LoadingIcon from "../../components/loadingIcon/LoadingIcon"
import { Sidebar } from "../../components/side-bar/Sidebar"
import { api } from "../../services/AxiosService"
import './BlogPost.css'
import { contentfulService } from "../../services/ContentfulService"
import moment from "moment"



export default function BlogPost() {
  const params = useParams()
  const [blogPost, setBlogPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(params.id);
    getPost()
  }, [])

  async function getPost() {
    try {
      let res = await contentfulService.getEntry({ id: params.id })
      console.log(res, 'res here CE:TEST');
      setBlogPost(res)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
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
  } = blogPost || {}

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex justify-content-center mt-5">
              {!body && <LoadingIcon />}
            </div>
            <div className="mt-4">
              <h4 className="fw-bold">{title}</h4>
              <p className="mb-1">Published: <span className="text-success">{moment(publishDate).format('MM/DD/YY')}</span></p>
              {
                updatedDate && <p>Updated: <span className="text-success">{moment(updatedDate).format('MM/DD/YY')}</span></p>
              }
              <img src={imgUrl} className="img-fluid"></img>
              <div className="mt-5 blog-content" dangerouslySetInnerHTML={{ __html: body }}>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Sidebar></Sidebar>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </>
  )
}