import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item'

//import { Test } from './Content.styles';


const Content = (props) => (
  <div className="ContentWrapper">
    <Item />
    <Item />
    <Item />
  </div>
);

Content.propTypes = {
  // bla: PropTypes.string,
};

Content.defaultProps = {
  // bla: 'test',
};

export default Content;
