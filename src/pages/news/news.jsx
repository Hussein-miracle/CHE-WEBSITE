import "./news.styles.scss"

//Images for news and blogs
import News_pic_1 from '../../assets/images/news_pic_1.png'
import News_pic_2 from '../../assets/images/news_pic_2.png'
import News_pic_3 from '../../assets/images/news_pic_3.png'
import Blogs_pic_1 from '../../assets/images/blogs_pic_1.png'
import Blogs_pic_2 from '../../assets/images/blogs_pic_2.png'

import Button from "../../components/button/button.component"

const News = () => {
    const newsList = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus.",
            img: `${News_pic_1}`
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus.",
            img: `${News_pic_2}`
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus.",
            img: `${News_pic_3}`
        }
    ]

    const blogList = [
        {
            id: 1,
            topic: "Face of NSChE",
            img: `${Blogs_pic_1}`
        },
        {
            id: 2,
            topic: "Personality of the week",
            img: `${Blogs_pic_2}`
        }
    ]

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
                        newsList.map(news => { return (
                            <div key={news.id} className="news__body--card" style={{ backgroundImage: `linear-gradient(transparent, #000), url(${news.img})` }}>
                                <h3>{news.text}</h3>
                            </div>
                        )
                        
                        })
                    }
                </div>
            </div>

            <div className="show-more-button">
                <Button text={"Show More"} />
            </div>

            <div className="blog">
                <div className="blog__header">
                    <h1>Blog</h1>
                </div>
                <div className="blog__body">
                    {
                        blogList.map(blog => { return (
                            <div key={blog.id} className="blog__body--card" style={{ backgroundImage: `linear-gradient(transparent, #000), url(${blog.img})` }}>
                                <h3>{blog.topic}</h3>
                            </div>
                        )
                        
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default News;