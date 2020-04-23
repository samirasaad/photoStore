import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import { downloadApPhotoRequest } from './../../store/actions/download';
import { searchRequest } from '../../store/actions/search';
import Pagination from "react-js-pagination";
import History from './../../routes/History';
import SearchInput from '../../components/SearchInput/SearchInput';
import SimpleSlider from './../Slider/Slider';
import noDataFound from './../../assets/images/noDataFound.jpg'
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
    const { searchRequest } = this.props;
    let searchTerm = this.props.computedMatch.params.searcTerm;
    let activePage = window.location.search.split('=')[1];
    searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage });
    this.setState({ searchTerm, activePage })
  }

  componentDidUpdate = (prevProps) => {
    const { photosPerPage } = this.state;
    const { results, total, searchRequest } = this.props;
    //MAKING REQUEST ON BACK OR FORWARD,each time params channging
    if (prevProps.computedMatch.params.searcTerm !== this.props.computedMatch.params.searcTerm) {
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
  // likeAphoto = () => {
  //   console.log('like');
  //   window.location.replace(`https://unsplash.com/oauth/authorize?client_id=PtJVadUoerKJguf5WxlQwRRevCUQPFuW-d5la9CKq_0&redirect_uri=https://unsplash.com&response_type=code`)
  // }
  render() {
    const { isOpen, imgObj, userObj,
      activePage, photosPerPage, searchTerm, total } = this.state;
    const { searchList } = this.state;
    return (
      <>
        <div>
          <SimpleSlider />
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
                          // likes={likes}
                          // regular={regular}
                          // thumb={thumb}
                          // profile_image={profile_image.small}
                          // alt_description={alt_description}
                          imgData={{ likes, alt_description, description, regular }}
                          // download={download}
                          // download_location={download_location}
                          // name={name}
                          // userId={user.id}
                          // location={location}
                          // instagram_username={instagram_username}
                          // username={username}
                          // downloadImage={() => this.downloadImage(id)}
                          // forceDownload={() => this.forceDownload(download)}
                          handleModalState={() => this.handleModalState(id, description, full, small, location, username, likes)}
                          downloadSelectedImage={() => this.downloadSelectedImage(id)}
                        // likeAphoto={this.likeAphoto} 
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

const mapStateToProps = ({ locale: { lang }, search: { results, total, total_pages }, listAllPhotos }) => ({
  lang,
  results,
  total,
  total_pages,
  listAllPhotos
})

export default connect(mapStateToProps, { downloadApPhotoRequest, searchRequest })(ImagesList);