import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pagination from 'react-js-pagination';
import InfinitScroll from 'react-infinite-scroll-component'
import PropTypes from 'prop-types';

import Item from '../Item'
import './Content.css';

//import { getSearchResult } from '../../../src/Api/nasa';
//import { Test } from './Content.styles';

const Content = (props) => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [startYear, setStartYear] = useState(new Date().getFullYear() - 1);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let doSearch = async () => {
      await search();
    }
    doSearch();
  }, [])

  useEffect(() => {
    if (items.length === 0) {
      search();
    }
  }, [items])

  useEffect(() => {
    search();
  }, [page])

  function fetchNextItems() {
    setPage(page + 1);
  }

  function search() {
    setLoading(true)

    function getMetaDataLocation(nasa_id) {
      return axios
        .get(`https://images-api.nasa.gov/metadata/${nasa_id}`)
        .then(response => response.data.location)
    }
    function getMetaData(url) {
      return axios
        .get(`${url}`)
        .then(response => response.data)
    }
    // console.log(`https://images-api.nasa.gov/search?page_size=${itemsPerPage}&page=${page}&year_start=${startYear}&year_end=${endYear}` +
    //     (query ? `&q=${query}` : ``))
    axios
      .get(`https://images-api.nasa.gov/search?page_size=${itemsPerPage}&page=${page}&year_start=${startYear}&year_end=${endYear}` +
        (query ? `&q=${query}` : ``)
      )
      .then(async data => {
        let new_items = [];
        new_items = await Promise.all(data.data.collection.items.map(async item => {
          let nasa_id = item.data[0].nasa_id;
          
          let metaDataURL = await getMetaDataLocation(nasa_id);
          let metaData = await getMetaData(metaDataURL);

          return {
            href: item.links == undefined ? "" : item.links[0].href,
            title: item.data[0].title,
            location: metaData["AVAIL:Location"] ? metaData["AVAIL:Location"] : "",
            photographer: metaData["AVAIL:Photographer"] ? metaData["AVAIL:Photographer"] : ""
          };
        }));
        setItems(items.concat(new_items))
        setLoading(false)
      });
  }

  function onSearch() {
    setItems([]);
    setPage(1);
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
        <InfinitScroll
          dataLength = {items.length}
          next = {fetchNextItems}
          hasMore = {true}
          loader={<h4>Loading ... </h4>}
        >
          {items.map((item, index) => {
              return <Item key={index} item={item} />
          })}
        </InfinitScroll>
        
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
