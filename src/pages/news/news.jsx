import { useReducer } from "react"
import "./news.styles.scss"
import News_and_Blogs from "./news_and_blog_data"
import Button from "../../components/button/button.component"
import { NavLink } from "react-router-dom"


const reducer = (state, action) => {
    switch(action.type) {
        case "SHOWMORENEWS" :
            return { 
                newsIndex: state.newsIndex + 10,
                blogIndex: state.blogIndex
            }
        case "SHOWMOREBLOGS" :
            return {
                newsIndex: state.newsIndex,
                blogIndex: state.blogIndex + 10
            }
        default: 
            return state;
    }
}

const News = () => {
    const [state, dispatch] = useReducer(reducer, { newsIndex: 4, blogIndex: 4 })

    return (
        <div className="news-and-blogs">

            <div className="news-and-blogs__header">
                <h1>News <span>and</span> Blogs</h1>
            </div>

            <div className="news">
                <div className="news__header">
                    <h1>News and Events</h1>
                </div>
                <div className="news__body">
                    {
                        News_and_Blogs.newsList.map(news => { 
                            if(news.id < state.newsIndex) {
                                return (
                                    <NavLink to={`/singleNews/?${news.id}`} key={news.id} className="news__body--card" style={{ backgroundImage: `linear-gradient(transparent, #000), url(${news.img})` }}>
                                        <h3>{news.headline}</h3>
                                    </NavLink>
                                )
                            } 
                            else {
                                return null
                            }
                        })
                    }
                </div>
            </div>

            <div className="show-more-button">
                <Button text={"Show More"} onClick={() => dispatch({ type: "SHOWMORENEWS" })} />
            </div>

            <div className="blog">
                <div className="blog__header">
                    <h1>Blog</h1>
                </div>
                <div className="blog__body">
                    {
                        News_and_Blogs.blogList.map(blog => { return (
                            <NavLink to={`/singleBlog/?${blog.id}`} key={blog.id} className="blog__body--card" style={{ backgroundImage: `linear-gradient(transparent, #000), url(${blog.img})` }}>
                                <h3>{blog.topic}</h3>
                            </NavLink>
                        )
                        
                        })
                    }
                </div>
            </div>

            <div className="show-more-button">
                <Button text={"Show More"} onClick={() => dispatch({ type: "SHOWMORENEWS" })} />
            </div>

        </div>
    )
}

export default News;