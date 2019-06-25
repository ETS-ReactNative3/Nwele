import React, {Component} from 'react';
import './Services.css'

class Services extends Component {

  render() {
    return(
            <div className = "services">
            <div className="dropbut">
              <button class="dropbtn">{this.props.p}
                <i class="fa fa-caret-up"></i>
              </button>
              <div class="dropbut-content">
              <div id="container">
                <div className="Menu">
                  <h5> hair </h5>
                  <ul><li><a href="">Cut and Groom</a></li>
                      <li><a href="">Wash and Go</a></li>
                      <li><a href="">Wash and Style</a></li>
                      <li><a href="">Style</a></li>
                      <li><a href="">Relax</a></li>
                      <li><a href="">Blow-dry</a></li>
                      <li><a href="">Chemical Blow-dry</a></li>
                      <li><a href="">Special Styling</a></li>
                      <li><a href="">Extensions</a></li>
                      <li><a href="">Braids</a></li>
                      <li><a href="">Wig</a></li>
                      <li><a href="">Weave</a></li>
                      <li><a href="">Colouring/Tint/Highlights</a></li>
                      <li><a href="">perm</a></li>
                      <li><a href="">Scalp and Hair Treatment</a></li>
                  </ul>
                </div>

                <div className="Menu">
                  <h5> Nails </h5>
                  <ul><li><a href="">Nail Attachments</a></li>
                      <li><a href="">Keratin Treatment</a></li>
                      <li><a href="">Manicure</a></li>
                      <li><a href="">Pedicure</a></li>
                      <li><a href="">Colouring and Accessories</a></li>
                    </ul>
                </div>

                <div className="Menu">
                  <h5> face </h5>
                  <ul><li><a href="">Facials</a></li>
                      <li><a href="">Eyebrows and Facial Grooming</a></li>
                      <li><a href="">Face Beat</a></li>
                      <li><a href="">Treatment (Face Masks)</a></li>
                    </ul>
                </div>
              </div>

              </div>
            </div>

            <div id="text-section">
              <p>Salons near me</p>
            </div>

            <hr/>

            <div id="salon-list">
              <h4>YOU WILL HAVE TO ADD THE SAL0N LIST HERE, PLEASE TRY TO STYLE IT :)</h4>
            </div>

            <hr/>


            </div>



    );
  }

}

export default Services;
