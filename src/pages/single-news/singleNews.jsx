import "./singleNews.styles.scss";
import { motion } from "framer-motion";
import withRouter from "../../HOC/withRouter/withRouter";
import News_and_Blogs from "../news/news_and_blog_data"

const SNVariants = () => ({
    initial:{
        opacity:0,
        y:"100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
            ease:"linear",
            delay:0,
        }
    },
    leave:{
        y:"-100vh",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})
const SNChildVariants = () => ({
    initial:{
        opacity:0,
        y:"100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
            ease:"linear",
            delay:0,
        }
    },
    leave:{
        y:"-100vh",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})

const SingleNews = ({location,params}) => {
    // const location = location;
    // console.log(params);
    const refinedId = parseFloat(location.search.slice(1, 100));

    return (
        <motion.div className="single-news" 
        variants={SNVariants()}
        initial="initial"
        animate="end"
        exit="leave"
        >
            {
                News_and_Blogs.newsList.filter(news => news.id === refinedId).map(singlenews => (
                    <motion.div key={singlenews.id}
                        variants={SNChildVariants()}
        initial="initial"
        animate="end"
        exit="leave"
                    >
                        <h1>{singlenews.headline}</h1>
                        <img src={singlenews.img} alt={singlenews.texts}/>

                        {
                            singlenews.texts.map(paragraph => { return (
                                <p key={singlenews.texts.indexOf(paragraph)}>{paragraph}</p>
                            )})
                        }
                    </motion.div>
                )
                )
            }
        </motion.div>
    )
}

export default withRouter(SingleNews);