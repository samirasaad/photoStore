import React, { Component } from 'react'
import PhotogragherInfo from '../../components/PhotogragherInfo/PhotogragherInfo'
import ProfileTabs from './../../components/Tabs/Tabs'
import SearchInput from '../../components/SearchInput/SearchInput'
import { photographerProfileRequest } from './../../store/actions/photographerProfile';
import { connect } from 'react-redux'
import History from '../../routes/History';

class PhotgrapherProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {},
            searchTerm: '',
            photos: [],
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
            }
        }
    }

    componentDidMount = () => {
        const { photographerProfileRequest } = this.props;
        let userInfo = this.props.location.state.userData;
        let username = window.location.pathname.split('/')[2]
        this.setState({
            userInfo
        })
        photographerProfileRequest({ username, per_page: 20 })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.photos !== this.props.photos) {
            this.setState({
                photos: this.props.photos
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
          pathname: `/ImagesList/${searchTerm}`,
          search: `?page=1`
        })
        // searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
      }

    render() {
        const { userInfo, searchTerm, SliderSettings, photos } = this.state;
        return (
            <section className='min-vh-100'>
                <div className='pb-3'>
                    <SearchInput handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} value={searchTerm}
                    />
                </div>
                <PhotogragherInfo userInfo={userInfo} />
                <ProfileTabs photos={photos} />
            </section>
        )
    }
}
const mapStateToProps = ({ photographerProfile }) => ({
    photos: photographerProfile,
})


export default connect(mapStateToProps, { photographerProfileRequest })(PhotgrapherProfile)