import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item'
import './Content.css';
//import { Test } from './Content.styles';


const Content = (props) => {
  const [query, setQuery] = useState("");
  const [startYear, setStartYear] = useState(new Date().getFullYear() - 1);
  const [endYear, setEndYear] = useState(new Date().getFullYear());

  return (
    <div className="ContentWrapper">
      <div className='content-search-box'>
        <div className='content-search-item'>
          <label for="query" className='content-search-item-label'>
            Search:
          </label>
          <input
            type='search'
            name='query'
            id='query'
            className='content-search-item-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className='content-search-item'>
          <label for="query" className='content-search-item-label'>
            From:
          </label>
          <input
            type='search'
            name='startYear'
            id='startYear'
            className='content-search-item-input'
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
        </div>
        <div className='content-search-item'>
          <label for="query" className='content-search-item-label'>
            To:
          </label>
          <input
            type='search'
            name='endYear'
            id='endYear'
            className='content-search-item-input'
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
        </div>
        <div className='content-search-item'>
          <input
            type='button'
            value='Search'
          />
        </div>
      </div>
      <div className='ContentResult'>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
};

Content.propTypes = {
  // bla: PropTypes.string,
};

Content.defaultProps = {
  // bla: 'test',
};

export default Content;
