import axios from "axios";

const DEFAULT_PAGE_SIZE = 10;

export const getSearchResult = params => {
    let query = "Star";
    let page = 1;
    axios
      .get(`https://images-api.nasa.gov/search?q=${query}&page_size=${DEFAULT_PAGE_SIZE}&page=${page}`)
        .then(data => {
          console.log(data)
        // this.setState({
        //   search_result: data.data.collection.items,
        //   isSearch: true,
        // });
        // let related_keywords = [];
        // this.state.search_result.forEach(element => {
        //   if (element.data[0].keywords) {
        //     element.data[0].keywords.forEach(keyword => {
        //       if (!related_keywords.includes(keyword)) {
        //         related_keywords.push(keyword);
        //       }
        //     });
        //   }
        // });
        // this.setState({
        //   related_search_keywords: related_keywords,
        //   isLoading: false,
        // });
      });
};