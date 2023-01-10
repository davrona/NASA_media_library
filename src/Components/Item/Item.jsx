import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Item.styles';

const Item = (props) => {
  return (
    <div className="item-wrapper">
      <div className='item-picture'>
        {props.item.links != undefined ? (
          <img
              src={props.item.links[0].href}
              alt="card_image"
              data-testid="image-src"
          />
        ) : (
          <img src="" alt="card_image" />
        )}
        
      </div>
      {props.item.href}
    </div>
  )
};

// Item.propTypes = {
//   // bla: PropTypes.string,
// };

// Item.defaultProps = {
//   // bla: 'test',
// };

export default Item;
