import React from 'react';
import { graphql } from 'gatsby';
import Head from '../utils/Helmet';
// import SideNav from '../components/SideNav';
// import Navbar from '../components/Navbar';
import PhotoGallery from '../components/summit/PhotoGallery';
import PageContainer from '../components/summit/SummitPageContainer';
import arrowImg from '../images/down-arrow.png';

class Summit extends React.Component {
   render() {
      return (
         <PageContainer>
            <Head title="Annual Leadership Summit" />
            <header>
               <div id="mySidenav" className="sidenav">
                  <a href="javascript:void(0)" id="closeButton" className="closebtn">&times;</a>
                  <a href="index.html">HOME</a>
                  <a href="pages/events.html">EVENTS</a>
                  <a href="pages/churches.html">CHURCHES</a>
                  <a href="pages/about.html">ABOUT</a>
                  <a href="http://socalnetwork.org/resources/">RESOURCES</a>
               </div>

               <nav className="navbar" id="fullNav">
                  <div className="leftnav">
                     <a href="index.html"><img className="header-logo" src="images/brand/SoCal.png" /></a>
                  </div>
                     <div className="rightnav">
                        <a href="index.html">HOME</a>
                        <a href="pages/events.html">EVENTS</a>
                        <a href="pages/churches.html">CHURCHES</a>
                        <a href="pages/about.html">ABOUT</a>
                        <a href="http://socalnetwork.org/resources/">RESOURCES</a>
                     </div>
                  </nav>

                  <div className="header-content">
                     <h3>ANNUAL LEADERSHIP SUMMIT</h3>
                     <div className="beyond-headline headline">
                        <h1>BEYOND</h1>
                        <div className="line white-line1"></div> 
                     </div>
                  </div>

            </header>
            <div className="content-container">
               <div className="info-section">
                  <div className="summary">
                     <p>
                        It is our prayer and belief that our churches, our leaders, our ministers, and our people would walk in the power and knowledge that God is capable of doing BEYOND what we could ever think, ask or imagine <a target="_blank" href="https://www.biblegateway.com/passage/?search=Ephesians+3%3A20-21&version=NIV">(Ephesians 3:20-21)</a>. We want HIM to be glorified in all that we do and accomplish, for it is only by HIS power that
                     </p>
                     <h5>IT. IS. DONE.</h5>
                     <p>
                        Our prayer is that the Lord would use this time of fellowship, worship and the Word to break barriers in our lives, our ministries, in our region and our world! God is truly capable of doing BEYOND what we think or imagine, and we are believing that this time would be a tool to inspire and expand our faith as to what God wants to do in and through us all!
                     </p>
                  </div>

                  <PhotoGallery photos={this.props.data.allContentfulSummitPhotoGallery.edges[0].node.photoList} />

                  <div className="speakers">
                     <h3><i>Keynote Speaker:</i></h3>

                     <div id="johnMartin" className="john-martin">
                        <div className="john-title">
                           <img className="john-pic" src={require('../images/summit-photos/edited/john-martin2.png')} alt="Portrait of Pastor John Martin" />
                           <div>
                              <h4>Pastor John Martin</h4>
                              <h5>Victorville First Assembly</h5>
                           </div>
                        </div>
                        <p>In 2006, Pastor John C. Martin moved to Victorville, California from Seattle, Washington to pastor Victorville First Assembly. In the almost 12 years that Pastor John has been pastoring at Victorville First Assembly, the church has expanded from one to ten campus locations. In addition, the church offers worship services in English, Spanish, Korean, Indonesian and American Sign Language. The church's ministries have more than doubled in number and currently include the Feed My Sheep Food Bank, a School of Ministry, and Victor Valley Christian School. Pastor John has a heart to reach people for Christ and to develop fully devoted followers of God! As witnessed in the growth and expansion of the ministries underneath his leadership, he knows he serves a Big God who is capable of more than we could think or imagine, and he chases after all that God has at full speed.</p>
                     </div>
      
                     <h4 className="breakout-title"><i>With Breakout Speakers Featuring:</i></h4>

                     <div id="richShepherd" className="rich-shepherd speaker">
                        <div className="rich-title speaker-title">
                           <img className="speaker-pic" src={require('../images/summit-photos/edited/rich-shepherd2.png')} alt="Portrait of Rich Shepherd" />
                           <div>
                              <h4>Rich Shepherd</h4>
                           </div>
                           <img className="right-arrow" src={arrowImg} alt="Arrow icon" />
                        </div>
                        <p className="bio">Rich Shepherd is the Campus Pastor at Canyon Hills: San Luis Obispo. For 15 years, he, along with his wife, Vanessa, were Youth Pastors in Northern California and the Central Valley and have now been on the Central Coast for almost two years. Along with being Youth Pastors, they also served as media directors, college-age pastors, and children's pastors. They absolutely love the local church and believe it is the hope of the world. They have two children, MJ & Jacob and absolutely love all things coastal!</p>
                     </div>
      
                     <div id="drBillDogterom" className="bill-dogterom speaker">
                        <div className="bill-title speaker-title">
                           <img className="speaker-pic" src={require('../images/summit-photos/edited/dr-bill-dogterom2.png')} alt="Portrait of Dr. Bill Dogterom" />
                           <div>
                              <h4>Dr. Bill Dogterom</h4>
                           </div>
                           <img className="right-arrow" src={arrowImg} alt="Arrow icon" />
                        </div>
                        <p className="bio">Bill Dogterom has taught at Vanguard University for 20 years and has pastored and served as a pastoral consultant for 40 years. His passion is to partner with the Holy Spirit to prepare and support the next generations of ministers - regardless of their vocational calling. He and Judy have three adult sons, two daughters-in-law, and one perfect granddaughter.</p>
                     </div>
      
                     <div id="joeMoss" className="joe-moss speaker">
                        <div className="joe-title speaker-title">
                           <img className="speaker-pic" src={require('../images/summit-photos/edited/joe-moss2.png')} alt="Portrait of Joe Moss" />
                           <div>
                              <h4>Joe Moss</h4>
                           </div>
                           <img className="right-arrow" src={arrowImg} alt="Arrow icon" />
                        </div>
                        <p className="bio">Joe is from Los Angeles, CA where he grew up being a part of leading worship since he was 12 years old. For the last 10 years, Joe has served in full-time ministry as a worship pastor with Assembly of God churches in Northern and Southern California, including 8 years in Ojai. He now serves as Worship & Executive pastor at Crossroads Church in the Santa Ynez Valley.</p>
                     </div>
      
                     <div id="ricardoQuintana" className="ricardo-quintana speaker">
                        <div className="ricardo-title speaker-title">
                           <img className="speaker-pic" src={require('../images/summit-photos/edited/ricardo-q2.png')} alt="Portrait of Ricardo Quintana" />
                           <div>
                              <h4>Ricardo Quintana</h4>
                           </div>
                           <img className="right-arrow" src={arrowImg} alt="Arrow icon" />
                        </div>
                        <p className="bio">Ricardo has been a youth, executive, and lead pastor over the past 30 years. He was an Executive Pastor at New Life Church in Renton, Washington and experienced leadership at a church that doubled from 1700 to 3400 in just 7 years. It was there he learned the value of creating irrestistible environments for all who attend. From the street to the seat, everything matters to those looking for a place to connect with God and others. Along with a passion for reaching people for Christ, Ricardo understands the 'why' behind the need for a warm and welcoming environment at every church.</p>
                     </div>
      
                     <div id="joannJohnson" className="joann-johnson speaker">
                        <div className="joann-title speaker-title">
                           <img className="speaker-pic" src={require('../images/summit-photos/edited/joann-johnson2.png')} alt="Portrait of JoAnn Johnson" />
                           <div>
                              <h4>JoAnn Johnson</h4>
                           </div>
                           <img className="right-arrow" src={arrowImg} alt="Arrow icon" />
                        </div>
                        <p className="bio">JoAnn loves to inspire and empower others to reach their God-given potential. She has a passion to see the next generation of leaders trained and mobilized into ministry. Starting as the receptionist at Covina Assembly, she was given opportunities to take on more responsibilty and ultimately became one of the Preaching Pastors as well as the Executive Pastor. JoAnn is responsible for leading the Student Ministries and Young Adult Ministries. Her biggest accomplishment is her family. Her wonderful husband, Eric, and their two boys, Russell and Shane, keep life exciting!</p>
                     </div>
      
                  </div>
               </div> {/* /.info-section */}
               
               <div className="description-container">
                  <h1>Breakout Sessions</h1>
                  <div className="description-list">
                     <button id="richShepherdTalk" className="description-card" >
                        <h2>Rich Shepherd</h2>
                        <h3>Beyond Sunday</h3>
                        <p>Click for more info</p>
                     </button>
                     <button id="billDogteromTalk" className="description-card" >
                        <h2>Dr. Bill Dogterom</h2>
                        <h3>Beyond Spiritual Barriers</h3>
                        <p>Click for more info</p>
                     </button>
                     <button id="joeMossTalk" className="description-card" >
                        <h2>Joe Moss</h2>
                        <h3>Beyond Limitations</h3>
                        <p>Click for more info</p>
                     </button>
                     <button id="ricardoQuintanaTalk" className="description-card" >
                        <h2>Ricardo Quintana</h2>
                        <h3>Beyond Visual Barriers</h3>
                        <p>Click for more info</p>
                     </button>
                     <button id="joannJohnsonTalk" className="description-card" >
                        <h2>JoAnn Johnson</h2>
                        <h3>Empowering Your Team</h3>
                        <p>Click for more info</p>
                     </button>
                  </div>
               </div>

               <div id="richShepherdPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/rich-shepherd2.png" />
                        <h2>Rich Shepherd</h2>
                        <h1>Beyond Sunday</h1>
                        <h3>Making the Other 167 Hours in the Week Count</h3>
                     </div>
                     <p className="popup-body">
                        How do we, as pastors, ministry leaders, and church leaders help those who come through our doors on Sunday live out their Sunday experience the rest of the week? How do we engage them in spiritual growth in the day-to-day? While also keeping them engaged with upcoming events and connection points? And how do we let others in our city know that a great church exists just around the corner?<br />
                        Answer: <b>Online Systems & Social Media</b>! Don't let that intimidate or confuse you, because WE WANT TO HELP and provide you with some amazing tools! Come and we will not only provide you practical steps that anyone can do, but we will also push you towards free content that makes a huge impact!
                     </p>
                  </div>
               </div>
         
               <div id="billDogteromPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/dr-bill-dogterom2.png" />
                        <h1>Dr. Bill Dogterom</h1>
                        <h2>Beyond Spirital Barriers</h2>
                        <h3>Engaging Next-Gen in the Gifts of the Spirit</h3>
                     </div>
                     <p className="popup-body">
                        For classical Pentecostals, the manifestation of the gifts of the Spirit in a public worship environment is a mark of authenticity - but seems to be dwindling in frequency and relevance. This workshop will focus on ways of engaging and empowering Next-Gen pentecostals in the use of the Gifts of the Spirit in a way that builds up the Body of Christ.
                     </p>
                  </div>
               </div>
         
               <div id="joeMossPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/joe-moss2.png" />
                        <h1>Joe Moss</h1>
                        <h2>Beyond Limitations</h2>
                        <h3>Limited Resource does not Equal Limited Worship</h3>
                     </div>
                     <p className="popup-body">
                        We've all been there, the worship experience in a large room at mega churches or conferences is incredible. The band, the worship leader, the prop audio, lights, and production leave you feeling inspired to come back to your smaller church setting with fresh vigor. And then the harsh reality of limitation sets in again. "The space can't handle the stage volume." "We don't have a drummer that can play like that." "What about backing tracks?" "Where do I even begin?" We have all asked these questions. But, perhaps there's MORE that we can do for our small church worship setting by actually DOING LESS. Come find out!
                     </p>
                  </div>
               </div>
         
               <div id="ricardoQuintanaPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/ricardo-q2.png" />
                        <h1>Ricardo Quintana</h1>
                        <h2>Beyond Visual Barriers</h2>
                        <h3>WARM is the New WOW</h3>
                     </div>
                     <p className="popup-body">
                        In "WARM is the New WOW" we will discover that a simple coffee table host, a parking lot attendant, a greeter, an extra sign, a host no an announcement maker, and attention to children can grow your church faster than you can imagine. Today's families are looking for churches who genuinely love and care for them. "WARM is the New WOW" will discuss and example how was can WARM up our weekends and take the weight off the worship and message to be what brings people back.
                     </p>
                  </div>
               </div>
         
               <div id="joannJohnsonPopup" className="popup">
                  <div className="popup-content">
                     <img className="popup-close" alt="close button" src="images/icons/close-button.svg" />
                     <div className="popup-header">
                        <img className="popup-photo" alt="speaker" src="images/summit-photos/edited/joann-johnson2.png" />
                        <h1>JoAnn Johnson</h1>
                        <h2>Empowering Your Team</h2>
                        <h3>Do More by Doing Less</h3>
                     </div>
                     <p className="popup-body">
                        God has given you big dreams and ideas, but it takes a team to see those dreams become a reality. Discover ways to empower and lead your team. Stop trying to do everything yourself and do more by doing less.
                     </p>
                  </div>
               </div>
         
               <div className="schedule-section">
                  <div className="schedule-headline headline">
                     <h1>SCHEDULE</h1>
                     <div className="line white-line2"></div>
                  </div>
                  <div className="schedule">
                     <h4>WELCOME</h4>
                     <div className="circle"></div>
                     <h4>MORNING SESSION</h4>
                     <div className="circle"></div>
                     <h4>BREAKOUT 1</h4>
                     <div className="circle"></div>
                     <h4>LUNCH</h4>
                     <div className="circle"></div>
                     <h4>BREAKOUT 2</h4>
                     <div className="circle"></div>
                     <h4>AFTERNOON SESSION</h4>
                     <div className="circle"></div>
                     <h4>CLOSING</h4>
                  </div>
               </div>
         
               <div className="cost-section">
                  <h2>Cost To Attend</h2>
                  <h3>Prices For Next Year's Summit<br />
                  To Be Announced Soon!</h3>
               </div>

               <div className="register-section">
                  <div className="register-headline headline">
                     <h1>REGISTER</h1>
                     <div className="line white-line3"></div>
                  </div>
                  <div className="buttons">
                     <div className="btn btn1"><i>REGISTRATION DETAILS COMING SOON</i></div>
                  </div>
            </div>

            <p className="copy">&copy; SoCal Region 1 - 2018</p>
            </div>
         </PageContainer>  
      );
   }
}

export default Summit;

export const aboutQuery = graphql`
	query {
      allContentfulSummitPhotoGallery {
         edges {
            node {
               galleryTitle
               photoList {
                  id
                  description
                  fixed {
                     width
                     height
                     src
                  }
               }
            }
         }
      }
   }
`;
