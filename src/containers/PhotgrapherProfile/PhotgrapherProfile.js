import React, { Component } from 'react'
import PhotogragherInfo from '../../components/PhotogragherInfo/PhotogragherInfo'
import ImagesList from '../ImagesList/ImagesList'
import ProfileTabs from './../../components/Tabs/Tabs'

class PhotgrapherProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {}
        }
    }
    componentDidMount = () => {
        let userInfo = this.props.location.state.userData;
        this.setState({
            userInfo
        })
    }

    render() {
        const { userInfo } = this.state;
        return (
            <section className='min-vh-100'>
                <PhotogragherInfo userInfo={userInfo} />
                {/* <ImagesList /> */}
                <ProfileTabs />
            </section>
        )
    }
}

export default PhotgrapherProfile