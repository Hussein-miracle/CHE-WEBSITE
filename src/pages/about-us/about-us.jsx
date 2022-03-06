import "./about-us.css";

import Beakers from "../../assets/images/beakers.png"
import Engineers from "../../assets/images/engineers.png"
import separation from "../../assets/images/separation.png"
import biochemical from "../../assets/images/biochemical.png"
import environmental from "../../assets/images/environmental.png"
import reactions from "../../assets/images/reactions.png"
import energy from "../../assets/images/energy.png"
import petroleum from "../../assets/images/petroleum.png"
import process from "../../assets/images/process.png"
 
const AboutUs = () => {
    return (
        <div className="about">
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
            <div className="research">
                <h1>Research Areas</h1>
                <div className="areas">
                    <div className="area">
                        <img src={separation} alt="engineers"/>
                        <h4>Separation Processes</h4>
                    </div>
                    <div className="area">
                        <img src={biochemical} alt="engineers"/>
                        <h4>Biochemical Engineering</h4>
                    </div>
                    <div className="area">
                        <img src={environmental} alt="engineers"/>
                        <h4>Environmental Engineering</h4>
                    </div>
                    <div className="area">
                        <img src={reactions} alt="engineers"/>
                        <h4>Reactions Engineering</h4>
                    </div>
                    <div className="area">
                        <img src={energy} alt="engineers"/>
                        <h4>Energy and Thermodynamics</h4>
                    </div>
                    <div className="area">
                        <img src={petroleum} alt="engineers"/>
                        <h4>Petroleum Engineering</h4>
                    </div>
                    <div className="area">
                        <img src={process} alt="engineers"/>
                        <h4>Process Systems Engineering</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;