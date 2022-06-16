import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class BlogsService  {
  async getBlogs(){
    const res = await api.get('/api/blogs')
    logger.log(res.data)
    AppState.blogs = res.data
  }
  setActive(blog) {
    AppState.activeBlog = blog
    logger.log('active blog', AppState.activeBlog)
  }
}

export const blogsService = new BlogsService()
