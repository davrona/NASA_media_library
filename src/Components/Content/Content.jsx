import React, { useEffect, useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';

import Item from '../Item'
import './Content.css';

//import { getSearchResult } from '../../../src/Api/nasa';
//import { Test } from './Content.styles';

const DEFAULT_PAGE_SIZE = 10;

const Content = (props) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("Star");
  const [startYear, setStartYear] = useState(new Date().getFullYear() - 1);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onSearch();
  }, [])

  function onSearch() {
    setLoading(true)
    axios
      .get(`https://images-api.nasa.gov/search?q=${query}&page_size=${DEFAULT_PAGE_SIZE}&page=${page}`)
      .then(data => {
        setItems(data.data.collection.items)
        console.log(data.data.collection.items)
        setLoading(false)
      });
  }

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
            onClick={onSearch}
          />
        </div>
      </div>
      <div className='content-result'>
        {loading ? (<p>Loading</p>) : 
            items.map((item, index) => {
              return <Item key={index} item={item} />
            })
        }
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
