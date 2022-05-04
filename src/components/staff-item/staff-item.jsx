import React from 'react';
import { motion } from 'framer-motion';
import "./staff-item.scss";

const StaffItemVariant = () => ({
    initial:{
        opacity:0,
        x:"100vw",
    },
    end:{
        x:0,
        opacity:1,
        transition:{
            when:"beforeChildren",
            staggerChildren:.6,
            ease:"linear",
            delay:0.5,
        }
    },
    leave:{
        x:"-100vw",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})


const ImgV = () => ({
    initial:{
        opacity:0,
        x:"-100vw",
    },
    end:{
        x:0,
        opacity:1,
        transition:{
            ease:"linear",
            delay:0.25,
        }
    },
    leave:{
        x:"100vw",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})
const InfoV = () => ({
    initial:{
        opacity:0,
        x:"-100vw",
    },
    end:{
        x:0,
        opacity:1,
        transition:{
            ease:"linear",
            delay:0.25,
        }
    },
    leave:{
        x:"100vw",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})
const AchV = () => ({
    initial:{
        opacity:0,
        y:"-100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
            ease:"linear",
            delay:0.25,
        }
    },
    leave:{
        x:"100vw",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})
const StaffItem = ({staffName,imgUrl,email,education,selectedPublications,researchInterests,honorsNAwards,staffLevel}) => {
    return (
        <motion.div className="staff-item"
        variants={StaffItemVariant()}
        initial="initial"
        animate="end"
        exit="leave"
        
        >
            <h2 className="staff-item__name">{staffName}  {staffLevel}</h2>
            <div className="staff-item__details-1">
                <motion.img src={`${imgUrl}`} alt={`${staffName}`} className="staff-item__img"
                variants={ImgV()}
        initial="initial"
        animate="end"
        exit="leave"
                 />

                <motion.div className="staff-item__info"
                variants={InfoV()} 
        initial="initial"
        animate="end"
        exit="leave"
                >
                    <div className="staff-item__education">
                        <h3 className="staff-item__education--title">Education</h3>
                        {
                            education.map(({title,description},index) => <p key={index}><b>{title}</b>.,{description}</p>)
                        }
                    </div>
                    <div className="staff-item__interest">
                        <h3 className="staff-item__interest--title">Research Interests</h3>
                        <p>{researchInterests}</p>
                    </div>
                    <div className="staff-item__email">
                        <h3 className="staff-item__email--title">Email</h3>
                        <p>{email}</p>
                    </div>
                </motion.div>
            </div>

            <motion.div className="staff-item__details-2" 
            variants={AchV()}
        initial="initial"
        animate="end"
        exit="leave"
            >
                <div className="staff-item__selected-publications">
                    <h3 className="staff-item__selected-publications--title">Selected Publications</h3>
                    <p>{selectedPublications}</p>
                </div>
                <div className="staff-item__honours-and-awards">

                    <h3 className="staff-item__honours-and-awards--title">Honours And Awards</h3>

                    <p>{honorsNAwards}</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default StaffItem;