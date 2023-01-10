import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Item.styles';

const Item = (props) => {
  return (
    <div className="item-wrapper">
      <div className='item-thumbnail'>
        {props.item.href ? (
          <img
              src={props.item.href}
              alt="item_thumbnail_default"
          />
        ) : (
          <img src="" alt="item_thumbnail_default" />
        )}
        
      </div>
      <div className='item-info'>
        <h3 className='item-info-title'>{ props.item.title }</h3>
        <h6 className='item-info-location'>Location: { props.item.location ? props.item.location : "Unknown" }</h6>
        <h6 className='item-info-photographer'>Photo taken by: { props.item.photographer ? props.item.photographer : "Unkown" }</h6>
      </div>
    </div>
  )
};

export default Item;
