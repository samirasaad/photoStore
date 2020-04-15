import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';
import { searchRequest } from './../../store/actions/search';
import ImagesList from '../ImagesList/ImagesList';
import Pagination from "react-js-pagination";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      photosList: [],
      activePage: 1
    }
  }
  componentDidMount = () => {
    // const {searchRequest} =this.props;
    // searchRequest({query:'cars'})
  }


  componentDidUpdate = (prevProps) => {
    const { results } = this.props;
    if (prevProps.results !== this.props.results) {
      this.setState({
        photosList: results
      })
    }
  }
  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchRequest } = this.props;
    searchRequest({ query: this.state.searchTerm, page: 1, per_page:25})

  }

  handlePageChange = (pageNumber) =>{
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    const {photosList, activePage} = this.state;
    const {total} = this.props;
    return (
      <>
        <h1>Serach for a photo</h1>
        <SearchInput handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
       {photosList.length > 0 &&
       <>
        <ImagesList photosList={photosList}/>
        <div >
        <Pagination
          className='justify-content-center'
          itemClass="page-item"
          linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={25}
          totalItemsCount={total}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          prevPageText='Prev'
          nextPageText='Next'
        />
      </div>
      </>
       }
      </>
    )
  }
}

const mapStateToProps = ({ locale: { lang }, search: { results, total, total_pages } }) => ({
  lang,
  results,
  total,
  total_pages,
})

export default connect(mapStateToProps, { searchRequest })(Home);