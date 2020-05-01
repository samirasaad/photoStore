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
import SimpleSlider from './../../components/Slider/Slider';
import noDataFound from './../../assets/images/noDataFound.jpg';
import { featuredCollections } from './../../utils/Constants';
// import { getCollectionImages } from './../../utils/shared';
import './ImagesList.scss';
import ImagesHolder from '../ImagesHolder/ImagesHolder';

class ImagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOpen: false,
      // activePage: 1,
      // photosPerPage: 20,
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
    //   total: null,
    //   userObj: {
    //     profile_image: null,
    //     location: null,
    //     username: null,
    //     // name: null,
    //     // instagram_username: null
    //   },
    //   imgObj: {
    //     imgId: null,
    //     img_description: '',
    //     imgUrl: null,
    //     likes: null
    //   }
    }
  }
  componentDidMount = () => {
    // const { photosPerPage } = this.state;
    // const { searchRequest, photographerProfileRequest } = this.props;
    // //coming with search term from home or  from photographer profile
    // if (this.props.computedMatch && this.props.computedMatch.params.hasOwnProperty('searcTerm')) {
    //   let searchTerm = this.props.computedMatch.params.searcTerm;
    //   let activePage = window.location.search.split('=')[1];
    //   searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
    //   this.setState({ searchTerm, activePage })
    // } else if (window.location.pathname.split('/').length > 1) {
    //   if (window.location.pathname.split('/')[2] === 'photos') {
    //     //unsplash does not return page and total items numbers in this api 
    //     let username = window.location.pathname.split('/')[3]
    //     photographerProfileRequest({ username, per_page: photosPerPage })
    //   } else if (window.location.pathname.split('/')[2] === 'likes') {
    //     console.log('likes')
    //   }
    // } else {
    //   console.log('err')
    // }

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
      const { results, total, searchRequest } = this.props;
      //MAKING REQUEST ON BACK OR FORWARD,each time params channging
      if (prevProps.computedMatch && prevProps.computedMatch.params.searcTerm !== this.props.computedMatch.params.searcTerm) {
        let searchTerm = this.props.computedMatch.params.searcTerm;
        let activePage = window.location.search.split('=')[1];
        searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
        this.setState({ searchTerm, activePage })
      }
      //FOR ANY UPDATE IN RESPONSE STORE IT IN LOCAL STATE
      if (prevProps.results !== this.props.results || prevProps.total !== this.props.total) {
        this.setState({
          searchList: results,
          total
        })
      }
      // if (prevProps.photographerProfile !== this.props.photographerProfile) {
      //   this.setState({
      //     searchList: photographerProfile,
      //   })
      // }


    }

    // handlePageChange = (pageNumber) => {
    //   const { searchRequest } = this.props;
    //   this.setState({ activePage: pageNumber }, () => {
    //     const { searchTerm, activePage, photosPerPage } = this.state;
    //     Promise.resolve(
    //       searchRequest({ query: searchTerm, page: activePage, per_page: photosPerPage })
    //     ).then(History.push({
    //       search: `?page=${activePage}`
    //     }))
    //   });

    // }

    // handleModalState = (imgId, img_description, imgUrl, profile_image, location, username, likes) => {
    //   const { isOpen } = this.state;
    //   !isOpen ?
    //     this.setState({
    //       isOpen: true,
    //       userObj: {
    //         ...this.state.userObj,
    //         profile_image,
    //         location,
    //         username
    //       },
    //       imgObj: {
    //         ...this.state.imgObj,
    //         imgId,
    //         img_description,
    //         imgUrl,
    //         likes
    //       }
    //     }) :
    //     this.setState({
    //       isOpen: false,
    //     })
    // }

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
    // downloadSelectedImage = (id) => {
    //   const { downloadApPhotoRequest } = this.props;
    //   downloadApPhotoRequest({ id })
    // }

    getCollectionData = (collection) => {
      const { photosPerPage } = this.state;
      Promise.resolve(
        searchRequest({ query: collection, page: 1, per_page: photosPerPage })
      ).then(
        History.push(`/imagesList/${collection}?page=1`)
      )
    }

    render() {
      const { isOpen, imgObj, userObj,
        activePage, photosPerPage, searchTerm, total, searchList, SliderSettings } = this.state;
      const { url } = this.props;
      return (
        <>
          <section className='image-list-wrapper container-fluid my-4 min-vh-100'>
            <div className='wrapper container-fluid px-5'>
              <SimpleSlider
                handleClick={this.getCollectionData}
                list={featuredCollections}
                SliderSettings={SliderSettings}
              />
              <div className='pb-3'>
                <SearchInput handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit} value={searchTerm}
                />
              </div>
            </div>
            {
              searchList.length > 0 &&
              <ImagesHolder list={searchList}/>
            }
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
      // total,
      // total_pages,
      photographerProfile,
    })

  export default connect(mapStateToProps, { downloadApPhotoRequest, searchRequest })(ImagesList);