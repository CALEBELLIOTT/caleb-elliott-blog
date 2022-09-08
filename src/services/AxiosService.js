import Axios from 'axios'

export let api = Axios.create({

  baseURL: 'http://moneywithcaleb.com/wp-json/wp/v2/posts?_embed',
  timeout: 10000
})

export let headers = {
  Authorization: `Bearer bf7077bfd140`
}