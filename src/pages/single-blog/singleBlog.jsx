import "./singleBlog.styles.scss"
import { useLocation } from "react-router-dom";
import News_and_Blogs from "../news/news_and_blog_data"


const SingleBlog = () => {
    const location = useLocation()
    const refinedId = parseFloat(location.search.slice(1, 100))

    return (
        <div className="single-blog">
            {
                News_and_Blogs.blogList.filter(blog => blog.id === refinedId).map(singleblog => (
                    <div key={singleblog.id}>
                        <h1>{singleblog.topic}</h1>
                        <img src={singleblog.img} alt={singleblog.topic}/>
                        {
                            singleblog.texts.map(paragraph => { return (
                                <p key={singleblog.texts.indexOf(paragraph)}>{paragraph}</p>
                            )})
                        }
                    </div>
                )
                )
            }
        </div>
    )
}

export default SingleBlog;