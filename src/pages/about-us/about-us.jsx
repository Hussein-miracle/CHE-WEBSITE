import { useEffect } from "react";
import { motion , useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Beakers from "../../assets/images/beakers.png"
import Engineers from "../../assets/images/engineers.png"
import separation from "../../assets/images/separation.png"
import biochemical from "../../assets/images/biochemical.png"
import environmental from "../../assets/images/environmental.png"
import reactions from "../../assets/images/reactions.png"
import energy from "../../assets/images/energy.png"
import petroleum from "../../assets/images/petroleum.png"
import process from "../../assets/images/process.png"
import "./about-us.css";

const AboutVariants = () => ({
    initial:{
        opacity:0,
        y:"-100vh"
    },
    final:{
        opacity:1,
        y:0,
        transition:{
            staggerChildren:5,
            when:'beforeChildren',
            delay:0,
            type:"spring",
            damping:30
        }
    },
    leave:{
        opacity:0,
        y:"100vh",
        transition:{
            ease:"easeInOut",
            type:"spring",
            damping:30
        }
    }
})
const Variants = (i) => ({
                        initial:{
                            opacity:0,
                            y:50
                        },
                        final:{
                            y:0,
                            opacity:1,
                            transition:{
                                type:"spring",
                                delay:i * 0.5,
                            }
                        },
                        leave:{
                            opacity:0,
                            y:-50,
                            transition:{
                                // duration:1,
                                ease:"easeInOut",
                                type:"tween",
                                delay:i * 0.25,
                            }
                        }
                        } );



const AboutUs = () => {
    const {ref , inView} = useInView();
    // const { ref:} = useInView();
    const animation = useAnimation();
    useEffect(()=>{
        // console.log('inViiew Aboutus?=',inView);
        if(inView){
            animation.start('final');
        };

        if(!inView){
            animation.start('leave');
        };

    },[inView,animation])

    return (
        <motion.div className="about"
        variants={AboutVariants()}
        initial="initial"
        animate="final"
        exit="leave"
        >
            <div className="heading">
                <div className="texts">
                    <h1>About OAU</h1>
                    <h1>Chemical Engineering</h1>
                </div>
            </div>
            <div className="about_us">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.</p>
            </div>
            <div className="objectives">
                <div className="objectives_text">
                    <h1>Our Objectives</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar</p>
                </div>
                <img src={Beakers} alt="beakers" />
            </div>
            <div className="achievements">
                <img src={Engineers} alt="Engineers" />
                <div className="achievements_text">
                    <h1>Our Achievements</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar</p>
                </div>
            </div>
            <div className="programmes">
                <h1>Our Programmes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.</p>
            </div>
            <div ref={ref} className="research">
                <h1>Research Areas</h1>
                <div  className="areas">

                    <motion.div className="area" 
                    initial="initial"
                    animate={animation}
                    variants={Variants(0)} 
                    >
                        <img src={separation} alt="engineers"/>
                        <h4>Separation Processes</h4>
                    </motion.div>
                    <motion.div className="area"
                    initial="initial"
                    animate={animation}
                    variants={Variants(1)} >
                        <img src={biochemical} alt="engineers"/>
                        <h4>Biochemical Engineering</h4>
                    </motion.div>
                    <motion.div className="area"
                    initial="initial"
                    animate={animation}
                    variants={Variants(2)} >
                        <img src={environmental} alt="engineers"/>
                        <h4>Environmental Engineering</h4>
                    </motion.div>
                    <motion.div className="area" 
                    initial="initial"
                    animate={animation}
                    variants={Variants(3)}>
                        <img src={reactions} alt="engineers"/>
                        <h4>Reactions Engineering</h4>
                    </motion.div>
                    <motion.div className="area" initial="initial"
                    animate={animation}
                                   variants={Variants(4)}>
                        <img src={energy} alt="engineers"/>
                        <h4>Energy and Thermodynamics</h4>
                    </motion.div>
                    <motion.div className="area" initial="initial"
                    animate={animation}
                                       variants={Variants(5)}>
                        <img src={petroleum} alt="engineers"/>
                        <h4>Petroleum Engineering</h4>
                    </motion.div>
                    <motion.div className="area"
                    initial="initial"
                    animate={animation}
                    variants={Variants(6)}>
                        <img src={process} alt="engineers"/>
                        <h4>Process Systems Engineering</h4>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutUs;