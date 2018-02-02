import React, { Component } from 'react';
import './FooterCSS.css';


function CustomFooter(props) {
    return (
        <div>
            <h5>Copyright @2018</h5>
            <h6>All rights reserved by Nur Islam</h6>
        </div>
    );
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <CustomFooter />
      </div>
    );
  }
}

export default Footer;
