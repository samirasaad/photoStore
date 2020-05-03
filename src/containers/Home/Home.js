import React, { Component } from 'react';
import { connect } from 'react-redux';
import History from './../../routes/History';
import SimpleSlider from './../../components/Slider/Slider';
import SearchInput from '../../components/SearchInput/SearchInput';
import { searchRequest } from './../../store/actions/search';
import { featuredCollections } from './../../utils/Constants';
import './Home.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      photosPerPage: 25,
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

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchRequest } = this.props;
    const { activePage, photosPerPage, searchTerm } = this.state;
    Promise.resolve(
      searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
    ).then(
      History.push({
        pathname: `/imagesList/${searchTerm}`,
        search: `?page=1`,
      })
    )
  }

  getCollectionData = (collection) => {
    History.push(`/imagesList/${collection}?page=1`)
  }

  render() {
    const { searchTerm, SliderSettings } = this.state;
    return (
      <section className='home-wrapper'>
        <div className='wrapper container-fluid p-5 '>
          <SimpleSlider
            handleClick={this.getCollectionData}
            list={featuredCollections}
            SliderSettings={SliderSettings}
          />
        </div>
        <div className='search-input-holder'>
          <div className='row mx-0'>
            <div className='offset-lg-2 col-lg-7 px-0 px-sm-0 col-10 offset-1 text-white font-weight-bold'>
             <h2 className='mx-0 mx-lg-4'> 
             Photography takes an instant out of time altering life by holding it still
             </h2>
          </div>
          </div>
          <SearchInput handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} valuse={searchTerm}
          />
        </div>
      </section>
    )
  }
}

export default connect(null, { searchRequest })(Home);