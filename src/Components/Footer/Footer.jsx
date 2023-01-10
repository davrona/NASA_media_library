import React from 'react';
import PropTypes from 'prop-types';

//import { Test } from './Footer.styles';
import './Footer.css';

const Footer = (props) => (
  <div className="FooterWrapper">
    <p className='footer-text'>
      Copyright 2023, Davron
    </p>
  </div>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
