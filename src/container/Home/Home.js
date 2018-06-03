import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchThisWeekMovies } from '../../actions/moviedb';
import HorizontalGrid from '../../components/HorizontalGrid';
import MovieDate from '../../utilities/date';

import './Home.css';

class Home extends Component {

  componentDidMount() {
    this.props.getThisWeekMovies();
  }

  render() {
    return (
      <div className="Home">
        {<div className="horizontal-grid">
          <HorizontalGrid
            title="SORTIES DE LA SEMAINE"
            subTitle={
              `${MovieDate.getFirstDayOfTheWeek('DD MMMM')} - ${MovieDate.getLastDayOfTheWeek('DD MMMM')}`
            }
            items={this.props.weekMovies.map(id => this.props.moviesPool[id])}
            baseItemUrl={'/movie/details/'}/>
        </div>}
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  weekMovies: state.moviedb.weekMovies,
  moviesPool: state.moviedb.moviesPool,
});

const mapDispatchToProps = (dispatch) => ({
  getThisWeekMovies: () => dispatch(fetchThisWeekMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
