import React, { Component } from 'react'
import { connect } from 'react-redux';
import History from '../../routes/History';
import { photographerProfileRequest, photographerLikesRequest, photographerCollectionsRequest } from './../../store/actions/photographerProfile';
import PhotogragherInfo from '../../components/PhotogragherInfo/PhotogragherInfo';
import ProfileTabs from './../../components/ProfileTabs/ProfileTabs';
import SearchInput from '../../components/SearchInput/SearchInput';

class PhotgrapherProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {},
            searchTerm: '',
            photographerProfile: []
        }
    }

    componentDidMount = () => {
        this.gettingUserData();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.photographerProfile !== this.props.photographerProfile) {
            this.setState({
                photographerProfile: this.props.photographerProfile
            })
        }

        if (prevProps.computedMatch.params !== this.props.computedMatch.params) {
            this.gettingUserData()
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

    gettingUserData = () => {
        const { photographerProfileRequest, photographerLikesRequest, photographerCollectionsRequest,
            location: { state: { userData } }, computedMatch: { params: { UserName } } } = this.props;
        let userInfo = userData;
        let username = UserName;
        this.setState({
            userInfo
        })
        photographerProfileRequest({ username, per_page: 20 });
        photographerLikesRequest({ username, per_page: 20 });
        photographerCollectionsRequest({ username, per_page: 20 });
    }
    render() {
        const { userInfo, searchTerm, photographerProfile } = this.state;
        return (
            <section className='min-vh-100'>
                <div className='pb-3 my-5'>
                    <SearchInput handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} value={searchTerm}
                    />
                </div>
                <PhotogragherInfo userInfo={userInfo} />
                <ProfileTabs photographerProfile={photographerProfile} />
            </section>
        )
    }
}
const mapStateToProps = ({ photographerProfile }) => ({
    photographerProfile
})


export default connect(mapStateToProps, {
    photographerProfileRequest,
    photographerLikesRequest,
    photographerCollectionsRequest
})(PhotgrapherProfile)