import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput/SearchInput';
import { searchRequest } from './../../store/actions/search';
import ImagesList from '../ImagesList/ImagesList';
import History from './../../routes/History';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      // searchList: [],
      // activePage: 1,
      // photosPerPage: 20,
    }
  }
  componentDidMount = () => {
    // const {activePage, photosPerPage} =this.state
    // History.push({
    //   search: `?page=1`
    // });
  }
  // componentDidUpdate = (prevProps) => {
  //   const { results } = this.props;
  //   if (prevProps.results !== this.props.results ) {
  //     console.log('search')
  //     this.setState({
  //       searchList: results
  //     })
  //   }
  // }


  // handlePageChange = (pageNumber) => {
  //   const { searchRequest } = this.props;
  //   const { activePage } = this.state;
  //   this.setState({ activePage: pageNumber }, () => {
  //     const { searchTerm, activePage, photosPerPage } = this.state;
  //     Promise.resolve(
  //       searchRequest({ query: searchTerm, page: activePage, per_page: photosPerPage })
  //     ).then(History.push({
  //       search: `?page=${activePage}`
  //     }))
  //   });

  // }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { searchRequest } = this.props;
    const { activePage, photosPerPage ,searchTerm} = this.state;
    Promise.resolve(
      searchRequest({ query: this.state.searchTerm, page: activePage, per_page: photosPerPage })
    ).then(
    History.push(`/ImagesList/${searchTerm}?page=1`)

    )
  }

  render() {
    const { searchList, activePage, photosPerPage, searchTerm } = this.state;
    const { total } = this.props;
    return (
      <section className='min-vh-100'>
        <SearchInput handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} valuse={searchTerm}
        />
        {/* {searchList.length > 0 && */}
        <>
        {/* <ImagesList searchList={ searchList } /> */}
          
          </>
        {/* } */}
      </section>
    )
  }
}

const mapStateToProps = ({ locale: { lang }, search: { results, total, total_pages }, listAllPhotos }) => ({
  lang,
  // results,
  // total,
  // total_pages,
  // listAllPhotos
})

export default connect(mapStateToProps, 
  { 
  searchRequest 
})
(Home);