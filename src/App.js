import React from "react";
import "./styles.css";

export default function App() {
  return(
        <div id='body'>
            {/* <Header/> */}
            <Card1 
                className='section1'
                img={require('./images/img1.png')}
                title='A Proven Way To Reduce Screen Time For Free' 
                description='Spiroc is the perfect tool for anyone
                 who wants to take back control of thier time and be more productive'
            />

            <Card2/> {/*3 screenshots*/}
            <Methodology_card/>
            <Purpose/>
            {/* <WaitlistForm/> */}
        </div>
    );
}

const Card1 = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
            <img src={require('./images/spiroc_logo2.png')} alt="logo" className='header-logo'></img>
            </div>
            <div className="med-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <br/>
                <span className="red-text">1 Min Read</span>
                <br/>
                <br/>
                
                <span className="div-des">
                    {props.description}
                </span>
                <br/>
                <br/>
                <br/>
                <span>
                    <a href="/"><span className="waitlist-btn">JOIN THE WAITLIST FOR FREE</span></a>
                </span>
            </div>

            <div className="big-div">
                <span className="card-img">
                <img src={props.img} alt='' className="man_img" />
                </span>
            </div>
        </div>
    )
}

const Card2 = () =>{
    return(
        <div className='card2-div' >
          <div className="comp1" >
             <div>
                <img src={require('./images/iPhone1.jpg')} alt='' className="image-div" />
             </div>
             <br/> 

             <div>
                <span className="des-div">
                Select your most used apps and set up a daily limit
                </span>
             </div>
           </div>
         <div className="comp2"> 
          <div>
                <img src={require('./images/iPhone2.jpg')} alt=''  className="image-div"/>
            </div> 
             <br/>
            <div>
                <span className="des-div">
                You can put some money at stake to increase your motivation
                </span>
            </div>
         </div>

          <div className="comp1 comp3">
           <div>
                <img src={require('./images/iPhone3.jpg')} alt=''  className="image-div" />
            </div> 

            <div>
                <span className="des-div">
                After the set limit is reached you can no longer use the app for the day unless you pay the amount.
                </span>
            </div>
          </div>
          
        </div>
    )
}


const Methodology_card = () =>{
    return(
        <div className='method-card' >
            <div className="title-div">
                Our Methodology 
            </div>

            <div className="second-div">
              <div className="point1">
                <div>
                  <img src={require('./images/hand_icon.png')} alt=''  className="icon-img"/>
                </div>
                <div className="point-des">
                    Spiroc helps you understand how much time you spend on social media, gaming, or other activites that aren't <b>productive</b>.
                </div>
              </div>

              <div className="point2">
               <div>
                <img src={require('./images/hand_icon.png')} alt=''  className="icon-img"/>
                </div>
                <div className="point-des">
                    The Spiroc community will hold you accountable for your <b>progress</b> so you don't have to feel alone.
                </div>
               </div>

               <div className="point3">
                <div>
                 <img src={require('./images/hand_icon.png')} alt=''  className="icon-img"/>
                </div> 
                <div className="point-des">
                    You will recieve <b>weekly report</b> that show how much time you spend in each area of your life, so it's easy to see how much time is being spent in each area of your life, so its easy to see how much time is bieng spent on the things that matter most.
                </div>
               </div>
            </div>
        </div>
    )
}
const Purpose = () =>{
    return(
        <div className='purpose-card' >
            <div className="title-div">
                Who is this for?
            </div>

            <div className="second-div">
              <div className="point4">
                <div>
                  <img src={require('./images/icon.png')} alt=''  className="icon-img"/>
                </div>
                <div className="point-des">
                    I want to reduce my <b>screen time</b>
                </div>
              </div>

              <div className="point5">
               <div>
                <img src={require('./images/icon.png')} alt=''  className="icon-img"/>
                </div>
                <div className="point-des">
                I want to get things done without <b>proscrastinating</b>
                </div>
               </div>

               <div className="point6">
                <div>
                 <img src={require('./images/icon.png')} alt=''  className="icon-img"/>
                </div> 
                <div className="point-des">
                I want to reduce my <b>instagram</b> usage
                </div>
               </div>
               <div className="point7">
                <div>
                 <img src={require('./images/icon.png')} alt=''  className="icon-img"/>
                </div> 
                <div className="point-des">
                I want to take <b>control</b> of my life
                </div>
               </div>
            </div>
        </div>
    )
}
