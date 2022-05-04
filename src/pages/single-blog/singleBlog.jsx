import "./singleBlog.styles.scss";
import {motion} from "framer-motion";
// import { useLocation } from "react-router-dom";
import withRouter from "../../HOC/withRouter/withRouter";
import News_and_Blogs from "../news/news_and_blog_data"
const SBVariants = () => ({
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
const SBChildVariants = () => ({
    initial:{
        opacity:0,
        y:"-100vh",
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
        y:"100vh",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})

const SingleBlog = ({location}) => {
    // const location = location
    const refinedId = parseFloat(location.search.slice(1, 100));

    return (
        <motion.div className="single-blog"
        variants={SBVariants()}
        initial="initial"
        animate="end"
        exit="leave"  
        >
            {
                News_and_Blogs.blogList.filter(blog => blog.id === refinedId).map(singleblog => (
                    <motion.div key={singleblog.id} 
                    variants={SBChildVariants()}
        initial="initial"
        animate="end"
        exit="leave"  
                    >
                        <h1>{singleblog.topic}</h1>
                        <img src={singleblog.img} alt={singleblog.topic}/>
                        {
                            singleblog.texts.map(paragraph => { return (
                                <p key={singleblog.texts.indexOf(paragraph)}>{paragraph}</p>
                            )})
                        }
                    </motion.div>
                )
                )
            }
        </motion.div>
    )
}

export default withRouter(SingleBlog);