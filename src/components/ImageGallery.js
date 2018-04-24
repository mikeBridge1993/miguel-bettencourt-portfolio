import React from 'react'
import images from '../images/images'


class ImageGallery extends React.Component  {
  constructor(props) {
    // fires before component is mounted
    super(props); // makes this refer to this component
    }

    openModal = () => {
      document.getElementById('myModal').style.display = "flex";
      
      let that = this;
      
      document.onkeydown = function(evt) {
        switch (evt.keyCode) {
            case 37:
              that.plusSlides(-1);
              break;
            case 39:
              that.plusSlides(1);
              break;
            case 27:
              document.getElementById('myModal').style.display = "none";
              document.onkeydown = null;            
              break;
        }
      };
    }

    closeModal = () => {
      document.getElementById('myModal').style.display = "none";
      document.onkeydown = null;
    }
    
    plusSlides = (n) => {
      this.showSlides(this.slideIndex += n);
    }

    currentSlides = (n) => {
      this.slideIndex = n;
      this.showSlides(n);
    }

    showSlides = (n) => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex-1].style.display = "inline-block";
    }

    render() {
      console.log(this.imageLinks)
      return (
        <div>
          <div className="row width-container-title">
            <span>{this.props.tabName}</span>
          </div>
          <div id="loading-icon" style={{display: "block"}} className="row width-container mt-5">
            <div className="spinner mx-auto mt-5">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
          <div className="row width-container image-gallery" id="gallery" style={{visibility: "hidden"}}>
             {this.props.imagesThumb.map((el, i, arr) => {  
              if(i == arr.length- 1) {
              return   <div className="col-6 col-sm-6 col-md-3 px-4 thumbnail">
                          <div className="image-placeholder">
                            <img id={"imageThumb-"+this.props.tabName+"-i"} onLoad={() => {document.getElementById('gallery').style.visibility="visible"; document.getElementById('loading-icon').style.display="none";}} onClick={()=> {this.openModal(); this.currentSlides(i+1)}} src={el} alt=""/>
                          </div>
                        </div>
              }      

              return   <div className="col-6 col-sm-6 col-md-3 px-4 thumbnail"  >
                          <div className="image-placeholder">
                            <img id={"imageModal-"+this.props.tabName+"-i"} onClick={()=> {this.openModal(); this.currentSlides(i+1)}} src={el} alt=""/>
                          </div>
                        </div>
            })}
            <div id="myModal" className="modal">
              <span className="close cursor" onClick={this.closeModal}><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
              <a className="prev text-dark mr-auto" onClick={() => this.plusSlides(-1)}><i className="fa fa-long-arrow-left"></i></a>
                <div className="modal-content">
                {this.props.imagesModal.map((el, i) => {
                  return    <div className="mySlides" id={"slide"+this.props.tabName.toLowerCase().replace(/\s/g, "")+"-"+i}>
                              <img id={"image-"+i}  src={el} alt=""/>
                            </div>
                })}
                </div>
                <a className="next text-dark ml-auto" onClick={() => this.plusSlides(1)}><i className="fa fa-long-arrow-right"></i></a>
            </div>
          </div>
        </div>
    )
  }
}

export default ImageGallery 