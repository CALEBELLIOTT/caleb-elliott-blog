import Axios from 'axios'

export let api = Axios.create({

  baseURL: 'https://https://wordpress.com/posts/calebelliottcodes.wordpress.com/wp-json/wp/v2/posts?_embed',
  timeout: 10000
})
