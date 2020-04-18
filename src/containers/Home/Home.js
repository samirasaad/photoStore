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
      activePage: 1,
      photosPerPage: 20,
    }
  }
  componentDidMount = () => {
  }
  componentDidUpdate = (prevProps) => {
    const { results } = this.props;
    if (prevProps.results !== this.props.results) {
        this.setState({
            photosList: results
        })
    }
}


handlePageChange = (pageNumber) => {
  const { searchRequest } = this.props;
  const { activePage, photosPerPage } = this.state;
  this.setState({ activePage: pageNumber }, () => {
      searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
  })
}

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchRequest } = this.props;
    const {activePage,photosPerPage } =this.state;
    searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
  }

 

  render() {
    const { photosList, activePage, photosPerPage } = this.state;
    const {total} = this.props;
    return (
      <>
        <SearchInput handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        <ImagesList photosList={photosList} />
        {photosList.length > 0 &&
                    <div className='my-4 w-100'>
                        <Pagination
                            className='justify-content-center'
                            itemClass="page-item"
                            linkClass="page-link"
                            activePage={activePage}
                            itemsCountPerPage={photosPerPage}
                            totalItemsCount={total}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            prevPageText='Prev'
                            nextPageText='Next'
                        />
                    </div>
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