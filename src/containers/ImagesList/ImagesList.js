import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import ImageModal from '../../components/ImageModal/ImageModal';
import { downloadApPhotoRequest } from './../../store/actions/download';
import './ImagesList.scss';
import { searchRequest } from '../../store/actions/search';
import Pagination from "react-js-pagination";
import History from './../../routes/History';
import SearchInput from '../../components/SearchInput/SearchInput';


class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activePage: 1,
            photosPerPage: 20,
            searchList:[],
            searchTerm:'',
            userObj:{
                profile_image: null,
                location: null,
                name:null,
                instagram_username:null
            },
            imgObj: {
                imgId: null,
                img_description: '',
                imgUrl: null,
                likes:null
            }
        }
    }
    componentDidMount = () =>{
        const {photosPerPage} =this.state;
        const {searchRequest}= this.props;
        console.log(window.location)
      let searchTerm =  window.location.href.split('/')[window.location.href.split('/').length-1].split("?")[0] || 1;
      let activePage = window.location.href.split('/')[window.location.href.split('/').length-1].split("?")[1].split('=')[1] || 1;
      console.log(searchTerm)
      this.setState({
        searchTerm,
        activePage
      })
    //   Promise.resolve(
        searchRequest({ query: searchTerm, page: +activePage, per_page: photosPerPage })
    //   ).then(History.push({
    //     search: `?page=${pageNumber}`
    //   }))
    }
    componentDidUpdate = (prevProps) => {
        const { results } = this.props;
        if (prevProps.results !== this.props.results ) {
          console.log('search')
          this.setState({
            searchList: results
          })
        }
      }

      handlePageChange = (pageNumber) => {
        const { searchRequest } = this.props;
        const { activePage } = this.state;
        this.setState({ activePage: pageNumber }, () => {
          const { searchTerm, activePage, photosPerPage } = this.state;
          Promise.resolve(
            searchRequest({ query: searchTerm, page: activePage, per_page: photosPerPage })
          ).then(History.push({
            search: `?page=${activePage}`
          }))
        });
    
      }

    handleModalState = (imgId, img_description, imgUrl, profile_image, location, instagram_username,name,likes) => {
        const { isOpen } = this.state;
        !isOpen ?
            this.setState({
                isOpen: true,
                userObj:{
                    ...this.state.userObj,
                    profile_image,
                    location,
                    instagram_username,
                    name
                },
                imgObj: {
                    ...this.state.imgObj,
                    imgId,
                    img_description,
                    imgUrl,
                    likes
                }
            }, () => { console.log(this.state) }) :
            this.setState({
                isOpen: false,
            })
    }

    forceDownload = (url) => {
        console.log(url);
        //  debugger;
        // var url = link.getAttribute("data-href");
        // var fileName = link.getAttribute("download");
        // link.innerText = "Working...";
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", url, true);
        // xhr.responseType = "blob";
        // xhr.onload =()=>{
        //     var urlCreator = window.URL || window.webkitURL;
        //     var imageUrl = urlCreator.createObjectURL(this.response);
        //     var tag = document.createElement('a');
        //     tag.href = imageUrl;
        //     // tag.download = fileName;
        //     document.body.appendChild(tag);
        //     tag.click();
        //     document.body.removeChild(tag);
        //     // link.innerText="Download Image";
        // }
        // xhr.send();
    }

    downloadImage = (id) => {
        const { downloadApPhotoRequest } = this.props;
        console.log(id);
        // downloadApPhotoRequest({id})
        // this.forceDownload()
    }
    handleChange = (e) => {
        this.setState({
          searchTerm: e.target.value
        })
      }
    handleSubmit = (e) => {
        e.preventDefault();
        const { searchRequest } = this.props;
        const { activePage, photosPerPage ,searchTerm} = this.state;
        History.push(`/ImagesList/${searchTerm}?page=1`)
        searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
      }
    render() {
        const { total } = this.props;
        const { isOpen, imgObj, userObj,
            activePage, photosPerPage, searchTerm } = this.state;
        const { searchList } = this.state;
        console.log(searchList)
        console.log(searchTerm)
        return (
            <>
            <div>
             <SearchInput handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} value={searchTerm}
        />
             </div>
            <section className='d-flex flex-row flex-wrap image-list-wrapper container-fluid my-4 min-vh-100'>
                {searchList &&
                    searchList.map(({ id, urls: { raw, full, regular, small, thumb }, likes,
                        links: { self, html, download, download_location, liked_by_user },
                        description,
                        alt_description, user: { profile_image, name, location, instagram_username } }, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='card-wrapper d-flex justify-content-center'>
                                    <ImageCard
                                        likes={likes}
                                        regular={regular}
                                        alt_description={alt_description}
                                        liked_by_user={liked_by_user}
                                        download={download}
                                        download_location={download_location}
                                        profile_image={profile_image.small}
                                        name={name}
                                        location={location}
                                        instagram_username={instagram_username}
                                        downloadImage={() => this.downloadImage(id)}
                                        forceDownload={() => this.forceDownload(download)}
                                        handleModalState={() => this.handleModalState(id, description, full, profile_image.small, location, instagram_username,name,likes)}
                                    />
                                </div>
                            </React.Fragment>
                        )

                    })
                }
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
                <ImageModal isOpen={isOpen}
                    handleModalState={this.handleModalState}
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

export default connect(mapStateToProps, { downloadApPhotoRequest,searchRequest })(ImagesList);