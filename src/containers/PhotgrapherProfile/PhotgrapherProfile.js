import React, { Component } from 'react'
import { connect } from 'react-redux';
import History from '../../routes/History';
import { photographerProfileRequest } from './../../store/actions/photographerProfile';
import PhotogragherInfo from '../../components/PhotogragherInfo/PhotogragherInfo';
import ProfileTabs from './../../components/Tabs/Tabs';
import SearchInput from '../../components/SearchInput/SearchInput';

class PhotgrapherProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {},
            searchTerm: '',
            photos: []
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
        const { searchTerm } = this.state;
        History.push({
            pathname: `/ImagesList/${searchTerm}`,
            search: `?page=1`
        })
    }

    render() {
        const { userInfo, searchTerm, photos } = this.state;
        return (
            <section className='min-vh-100'>
                <div className='pb-3 my-5'>
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