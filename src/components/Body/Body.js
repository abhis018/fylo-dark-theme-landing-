import React from 'react';
import './Body.css';
import img from './body-img.png';
import pic1 from './profile-1.jpg';
import pic2 from './profile-2.jpg';
import pic3 from './profile-3.jpg';
import arrow from './icon-arrow.svg';
import img1 from './icon-any-file.svg';
import img2 from './icon-access-anywhere.svg';
import img3 from './icon-security.svg';
import img4 from './icon-collaboration.svg';

const Body = () => {
    return (
        <div className="all">
            <div className="box">
                <div className="box1">
                        <div>
                            <img className="icon" src={img2}/>
                            <h6>Access your files, anywhere</h6>
                            <span>The ability to use a smartphone, tablet, or computer<br/> to access your account means your 
                            files follow you<br/> everywhere.</span>
                        </div>
                        <div className="pt5">
                            <img className="icon" src={img4}/>
                            <h6>Real-time collaboration</h6>
                            <span>Securely share files and folders with friends, family and<br/> colleagues for live collaboration. 
                            No email attachments<br/> required.</span>
                        </div>
                </div>
                <div className="box2">
                        <div>
                            <img className="icon" src={img3}/>
                            <h6>Security you can trust</h6>
                            <span>2-factor authentication and user-controlled encryption are<br/> just a couple of the security 
                            features we allow to help<br/> secure your files.</span>
                        </div>
                        <div className="pt5">
                            <img className="icon" src={img1}/>
                            <h6>Store any type of file</h6>
                            <span>Whether you're sharing holidays photos or work<br/> documents, Fylo has you covered allowing for all 
                            file<br/> types to be securely stored and shared.</span>
                        </div>
                </div>
            </div>
           <div className="section">
               <div className="imgfile">
                   <img className="pic" src={img}/>
               </div>
               <div className="letter">
                    <h2>Stay productive,<br/> wherever you are</h2>
                    <span className="f5">Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                    storage needs.<br/><br/>
                    Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                    attachments required.</span><br/><br/>
                    <u>
                        See how Fylo works
                        <img src={arrow}/>
                    </u>
               </div>
           </div>
           <div className="section">
               <div className="rec ml6">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                    <div className="founder mt3">
                        <div>
                            <img className="dp" src={pic1}/>
                        </div>
                        <div className="pa3">
                            <span className="f7 b">Satish Patel</span><br/>
                            <span>Founder & CEO, Huddle</span>       
                        </div>
                    </div>
               </div>
               <div className="rec ml4 mr4">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                    <div className="founder mt3">
                        <div>
                            <img className="dp" src={pic2}/>
                        </div>
                        <div className="pa3">
                            <span className="f7 b">Bruce McKenzie</span><br/>
                            <span>Founder & CEO, Huddle</span>   
                        </div>
                    </div>
               </div>
               <div className="rec mr6">
                    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                    <div className="founder mt3">
                        <div>
                            <img className="dp" src={pic3}/>
                        </div>
                        <div className="pa3">
                            <span className="f7 b">Iva Boyd</span><br/>
                            <span>Founder & CEO, Huddle</span>  
                        </div>
                    </div>
               </div>
           </div>
           <div className="last">
                <h2 className="pt1">Get early access today</h2>
                <p className="para">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</p>
                <input className="mh4" type="email" placeholder="email@example.com"/>
                <button className="mt3 mh2 mv4 grow b white f7">Get Started For Free</button>
           </div>
        </div> 
    )
}

export default Body;