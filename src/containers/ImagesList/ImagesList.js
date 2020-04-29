import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import { downloadApPhotoRequest } from './../../store/actions/download';
import { searchRequest } from '../../store/actions/search';
import { photographerProfileRequest } from './../../store/actions/photographerProfile';
import Pagination from "react-js-pagination";
import History from './../../routes/History';
import SearchInput from '../../components/SearchInput/SearchInput';
import SimpleSlider from './../Slider/Slider';
import noDataFound from './../../assets/images/noDataFound.jpg';
import { featuredCollections } from './../../utils/Constants';
import { getCollectionImages } from './../../utils/shared';
import './ImagesList.scss';

class ImagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activePage: 1,
      photosPerPage: 20,
      searchList: [],
      searchTerm: '',
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
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              // initialSlide: 3
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
      },
      total: null,
      userObj: {
        profile_image: null,
        location: null,
        username: null,
        // name: null,
        // instagram_username: null
      },
      imgObj: {
        imgId: null,
        img_description: '',
        imgUrl: null,
        likes: null
      }
    }
  }
  componentDidMount = () => {
    const { photosPerPage } = this.state;
    const { searchRequest, photographerProfileRequest } = this.props;
    //coming with search term from home or  from photographer profile
    if (this.props.computedMatch && this.props.computedMatch.params.hasOwnProperty('searcTerm')) {
      let searchTerm = this.props.computedMatch.params.searcTerm;
      let activePage = window.location.search.split('=')[1];
      searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
      this.setState({ searchTerm, activePage })
    } else if (window.location.pathname.split('/')) {
      //unsplash does not return page and total items nubers in this api 
      // let activePage = window.location.search.split('=')[1];
      let username = window.location.pathname.split('/')[2]
      photographerProfileRequest({ username, per_page: photosPerPage })
    } else {
      console.log('err')
    }
  }

  componentDidUpdate = (prevProps) => {
    const { photosPerPage } = this.state;
    const { results, photographerProfile, total, searchRequest } = this.props;
    //MAKING REQUEST ON BACK OR FORWARD,each time params channging
    if (prevProps.computedMatch && prevProps.computedMatch.params.searcTerm !== this.props.computedMatch.params.searcTerm) {
      let searchTerm = this.props.computedMatch.params.searcTerm;
      let activePage = window.location.search.split('=')[1];
      searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
      this.setState({ searchTerm, activePage })
    }
    if (prevProps.results !== this.props.results || prevProps.total !== this.props.total) {
      this.setState({
        searchList: results,
        total
      })
    }
    if (prevProps.photographerProfile !== this.props.photographerProfile) {
      this.setState({
        searchList: photographerProfile,
      })
    }
  }

  handlePageChange = (pageNumber) => {
    const { searchRequest } = this.props;
    this.setState({ activePage: pageNumber }, () => {
      const { searchTerm, activePage, photosPerPage } = this.state;
      Promise.resolve(
        searchRequest({ query: searchTerm, page: activePage, per_page: photosPerPage })
      ).then(History.push({
        search: `?page=${activePage}`
      }))
    });

  }

  handleModalState = (imgId, img_description, imgUrl, profile_image, location, username, likes) => {
    const { isOpen } = this.state;
    !isOpen ?
      this.setState({
        isOpen: true,
        userObj: {
          ...this.state.userObj,
          profile_image,
          location,
          username
        },
        imgObj: {
          ...this.state.imgObj,
          imgId,
          img_description,
          imgUrl,
          likes
        }
      }) :
      this.setState({
        isOpen: false,
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
    const { activePage, photosPerPage, searchTerm } = this.state;
    History.push({
      pathname: `/ImagesList/${searchTerm}`,
      search: `?page=1`
    })
    searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
  }
  downloadSelectedImage = (id) => {
    const { downloadApPhotoRequest } = this.props;
    downloadApPhotoRequest({ id })
  }
  render() {
    const { isOpen, imgObj, userObj,
      activePage, photosPerPage, searchTerm, total, searchList, SliderSettings } = this.state;
    const { url } = this.props;
    return (
      <>
        <div>
          <SimpleSlider
            handleClick={getCollectionImages}
            list={featuredCollections}
            SliderSettings={SliderSettings}
          />
          <SearchInput handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} value={searchTerm}
          />
        </div>
        <section className='image-list-wrapper container-fluid my-4 min-vh-100'>
          {
            searchList.length > 0 ?
              <div className='d-flex flex-row flex-wrap'>
                {searchList.map(({
                  id,
                  urls: { full, regular, thumb },
                  likes,
                  description,
                  alt_description,
                  links: { download, download_location },
                  user,
                  user: { profile_image: { small }, username, location, instagram_username }
                }, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className='card-wrapper d-flex flex-wrap'>
                        <ImageCard
                          userData={user}
                          imgData={{ full, likes, alt_description, description, regular }}
                          handleModalState={() => this.handleModalState(id, description, full, small, location, username, likes)}
                          downloadSelectedImage={() => this.downloadSelectedImage(id)}
                        />
                      </div>
                    </React.Fragment>
                  )
                })
                }
              </div>
              :
              <div style={{
                backgroundImage: `url(${noDataFound})`,
                minHeight: `50em`,
                backgroundSize: `contain`,
                backgroundRepeat: `no-repeat`,
                backgroundPosition: `center`
              }}></div>
          }
          {searchList && total > 0 &&
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
            </div>
          }
          <ImageModal isOpen={isOpen}
            handleModalState={this.handleModalState}
            downloadSelectedImage={() => this.downloadSelectedImage(imgObj.imgId)}
            imgObj={imgObj}
            userObj={userObj}
          />
        </section>
      </>
    )
  }
}

const mapStateToProps = ({ locale: { lang },
  search: { results, total, total_pages },
  photographerProfile }) => ({
    lang,
    results,
    total,
    total_pages,
    photographerProfile,
  })

export default connect(mapStateToProps, { downloadApPhotoRequest, searchRequest, photographerProfileRequest })(ImagesList);