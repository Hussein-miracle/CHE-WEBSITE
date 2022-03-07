import React from "react";
import hodImg from "../../assets/images/Prof-Odejobi.png";
import aboutImg from "../../assets/images/About-Us-Intro.png";
import Button from "../../components/button/button.component";
import Card from "../../components/card/card.component";
import newsAndEventsImg1 from "../../assets/images/Latest-new-and-events-img-1.png";
import newsAndEventsImg2 from "../../assets/images/Latest-new-and-events-img-2.png";
import newsAndEventsImg3 from "../../assets/images/Latest-new-and-events-img-3.png";
import "./homepage.styles.scss";

const Homepage = () => {
    const cardList = [
        {
            id:1,
            imgUrl:`${newsAndEventsImg1}`
        },
        {
            id:2,
            imgUrl:`${newsAndEventsImg2}`
        },
        {
            id:3,
            imgUrl:`${newsAndEventsImg3}`
        }
    ];
    return (
        <div className="homepage">
            <header className="homepage__header">
                
                    <h1>Department Of</h1>                
                    <h1>Chemical Engineering</h1>                
                
                    <h4>Faculty Of Technology, Obafemi Awolowo University,Ile-Ife,Osun State.</h4>
    
                    
            </header>

            <section className="homepage__hod-address">

                <div className="homepage__hod-address--info">
                    <div className="homepage__hod-address--img-container">
                    
                            <img className="homepage__hod-address--img" src={`${hodImg}`} alt="hod's address background"/>
                        
                        <div className="homepage__hod-address--details">
                            <h4 className="homepage__hod-address--name">Prof. Odejobi</h4>
                            <h5 className="homepage__hod-address--role">Head of Department</h5>
                        </div>
                    </div>
                </div>


                <div className="homepage__hod-address--content">
                    <h2 className="homepage__hod-address--title">HOD'S Welcome Address</h2>
                    <div className="homepage__hod-address--text-container">
                        <p className="homepage__hod-address--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.

                    </p>
                    <p className="homepage__hod-address--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. 
                    </p>
                    </div>
                </div>

            </section>












            <section className="homepage__about-us-intro">
                <div className="homepage__about-us-intro--content-container">
                    <h2 className="homepage__about-us-intro--title">About Us</h2>
                    <p className="homepage__about-us-intro--text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pulvinar diam tristique sit facilisi dui duis. Sagittis rhoncus, vitae, libero at pulvinar diam arcu ut aenean.Proin nec rhoncus velit ut nunc tellus. Arcu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.cu faucibus tempor urna, eget egestas. Senectus suscipit amet amet aliquet pretium, sagittis nunc. Urna nulla leo duis nunc nunc enim pulvinar.

                    </p>

                    <Button text={"Read More"}/>
                </div>

                <div className="homepage__about-us-intro--img-container">
                    <img src={`${aboutImg}`}
                    className="homepage__about-us-intro--img"
                    
                    alt="Chemical Engineering Department Entrance"/>
                </div>
            </section>

            <section className="homepage__news-and-events">
                <h2 className="homepage__news-and-events--title">Latest news and events</h2>
                <div className="homepage__news-and-events--content">
                {
                    cardList.map( ({imgUrl,id}) => <Card key={id} imgUrl={imgUrl}/>)
                }
                
                </div>
            </section>
        </div>
    )
}

export default Homepage;