import React, { Component } from 'react';
import './FooterCSS.css';


function CustomFooter(props) {
    return (
        <h4>All right reserved by Nur Islam</h4>
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
