import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import './ImagesList.scss';
import ImageModal from '../../components/ImageModal/ImageModal';
import {downloadApPhotoRequest} from './../../store/actions/download';
import { searchRequest } from './../../store/actions/search';

import Pagination from "react-js-pagination";

class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photosList: [],
            activePage: 1,
            photosPerPage:20,
            isOpen: false,
            imgObj: {
                imgId: null,
                img_description: '',
                imgUrl: null
            }
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

    handleModalState = (imgId, img_description, imgUrl) => {
        const { isOpen } = this.state;
        !isOpen ?
            this.setState({
                isOpen: true,
                imgObj: {
                    ...this.state.imgObj,
                    imgId,
                    img_description,
                    imgUrl
                }
            }, () => { console.log(this.state) }) :
            this.setState({
                isOpen: false,
                imgId: null
            })
    }
   
     forceDownload=(url)=>{
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

    downloadImage= (id)=>{
        const {downloadApPhotoRequest} =this.props;
        console.log(id);
        // downloadApPhotoRequest({id})
        // this.forceDownload()
    }
    render() {
        const { photosList, activePage, photosPerPage } = this.state;
    const { total } = this.props;
    // const { photosList } = this.props;
        const { isOpen, imgObj } = this.state;
        return (
            <section className='d-flex flex-row flex-wrap image-list-wrapper container-fluid my-4 '>
                { photosList.length > 0 &&
                    photosList.map(({ id, urls: { raw, full, regular, small, thumb },likes,
                        links: { self, html, download, download_location, liked_by_user },
                        description,
                        alt_description, user: { profile_image, name, location } }, index) => {
                        return (
                            <React.Fragment key={index}>
                                {/* <div className='position-relative'>
                                    <img className='m-2 img ' src={thumb} />
                                </div>
                                <div className='position-absolute'>test</div> */}
                                {/* </div> */}
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
                                    downloadImage={()=>this.downloadImage(id)}
                                    forceDownload={()=>this.forceDownload(download)}
                                    handleModalState={() => this.handleModalState(id, description, full)}
                                />
                                </div>
                            </React.Fragment>
                        )
                        
                    })
                }
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
                <ImageModal isOpen={isOpen}
                    // fullScreen={true}
                    handleModalState={this.handleModalState}
                    imgObj={imgObj}
                />
            </section>
        )
    }
}

const mapStateToProps = ({ locale: { lang }, search: { results, total, total_pages } }) => ({
        lang: lang,
        results,
        total,
        total_pages,
})

export default connect(mapStateToProps, {downloadApPhotoRequest, searchRequest })(ImagesList);