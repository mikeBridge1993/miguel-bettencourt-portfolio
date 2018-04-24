import React from 'react'

const about = () => (
    <div>
        <div className="width-container">
        <div className="width-container-about-video">
          <div className="about__video">
            <video className="about__video__content" autoPlay muted loop>
                <source src={"https://res.cloudinary.com/duwpl9hjf/video/upload/v1524578895/miguel-bettencourt-website/about/video.mp4"} type="video/mp4"/>
                Your browser is not supported!
            </video>
          </div>
          <div className="about__text">
            <p>Miguel Bettencourt grew up in Azores, Portugal, where he gained his passion for Arts, Nature and Skateboarding.  He then left Azores to study painting and multimedia at Universidade de Évora. Upon finishing his bachelor degree, Miguel moved to Oporto to do a Masters Degree in Computer Animation at Universidade Católica Portuguesa.
        Now, Miguel works has a free-lance artist making Animation, Illustration and Character Design.</p>
        </div>
        </div>
        
      </div>
    </div>
)

export default about;
