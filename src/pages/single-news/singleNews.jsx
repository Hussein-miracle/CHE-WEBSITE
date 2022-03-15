import "./singleNews.styles.scss"
import { useLocation } from "react-router-dom";
import News_and_Blogs from "../news/news_and_blog_data"


const SingleNews = () => {
    const location = useLocation()
    const refinedId = parseFloat(location.search.slice(1, 100))

    return (
        <div className="single-news">
            {
                News_and_Blogs.newsList.filter(news => news.id === refinedId).map(singlenews => (
                    <div key={singlenews.id}>
                        <h1>{singlenews.headline}</h1>
                        <img src={singlenews.img} alt={singlenews.text}/>
                        {
                            singlenews.texts.map(paragraph => { return (
                                <p key={singlenews.texts.indexOf(paragraph)}>{paragraph}</p>
                            )})
                        }
                    </div>
                )
                )
            }
        </div>
    )
}

export default SingleNews;