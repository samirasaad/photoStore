import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from './../../routes/History';
import Pagination from "react-js-pagination";
import { searchRequest } from '../../store/actions/search';
import SearchInput from '../../components/SearchInput/SearchInput';
import SimpleSlider from './../../components/Slider/Slider';
import ImagesHolder from '../ImagesHolder/ImagesHolder';
import { featuredCollections } from './../../utils/Constants';
import './ImagesList.scss';

class ImagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: [],
      searchTerm: '',
      activePage: 1,
      photosPerPage: 20,
      SliderSettings: {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 8,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }
  componentDidMount = () => {
    const { photosPerPage } = this.state;
    const { searchRequest } = this.props;
    if (this.props.computedMatch && this.props.computedMatch.params.hasOwnProperty('searcTerm')) {
      let searchTerm = this.props.computedMatch.params.searcTerm;
      let activePage = window.location.search.split('=')[1];
      searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
      this.setState({ searchTerm, activePage })
    }
  }

  componentDidUpdate = (prevProps) => {
    const { photosPerPage } = this.state;
    const { results, total, searchRequest, computedMatch: { params }, location } = this.props;
    //listen on params change [search term || page no.]
    if (prevProps.computedMatch.params.searcTerm !== params.searcTerm ||
      prevProps.location.search !== location.search) {
      let searchTerm = params.searcTerm;
      let activePage = location.search.split('=')[1];
      searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
      this.setState({ searchTerm, activePage })
    }
    if (prevProps.results !== results || prevProps.total !== total) {
      this.setState({
        searchList: results,
        total
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
    const { activePage, photosPerPage, searchTerm } = this.state;
    History.push({
      pathname: `/photoStore/ImagesList/${searchTerm}`,
      search: `?page=1`
    })
    searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
  }

  handlePageChange = (pageNumber) => {
    this.setState({ activePage: pageNumber },
      () => {
        const { activePage } = this.state;
        History.push({
          search: `?page=${activePage}`
        })
      })
  }

  render() {
    const { searchTerm, searchList, SliderSettings, total, activePage, photosPerPage } = this.state;
    return (
      <section className='image-list-wrapper container-fluid my-4 min-vh-100'>
        <div className='wrapper container-fluid'>
          <SimpleSlider
            handleClick={(collection) => History.push({
              pathname: `/photoStore/imagesList/${collection}`,
              search: `?page=1`
            })}
            list={featuredCollections}
            SliderSettings={SliderSettings}
          />
          <div className='pb-3 my-5'>
            <SearchInput handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} value={searchTerm}
            />
          </div>
        </div>
        {
          <>
            <ImagesHolder list={searchList} total={total} />
           {(searchList.length > 0 && total > 0) && 
            <div className='my-4 w-100'>
              <Pagination
                className='justify-content-center'
                itemClass="page-item"
                linkClass="page-link"
                activePage={+activePage}
                itemsCountPerPage={photosPerPage}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
                prevPageText='Prev'
                nextPageText='Next'
              />
            </div>}
          </>
        }
      </section>
    )
  }
}

const mapStateToProps = ({ search: { results, total } }) => ({
  results,
  total
})

export default connect(mapStateToProps, { searchRequest })(ImagesList);