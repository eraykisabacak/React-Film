import React, {Component} from 'react';
import NewMovieForm from './NewMovieForm';
import {connect} from 'react-redux'
import {
    onNewMovieSubmit,
    fetchMovie,
    onUpdateMovieSubmit} from "../../actions/newMovie";

class NewMoviePage extends Component {
    componentDidMount() {
        const {match} = this.props;
        if(!this.props.movie && match.params._id)
            this.props.fetchMovie(match.params._id);
    }

    render() {
        return (
            <div>
                <h2>New Movie Form</h2>
                <NewMovieForm
                    movie={this.props.movie}
                    newMovie={this.props.newMovie}
                    onNewMovieSubmit={this.props.onNewMovieSubmit}
                    onUpdateMovieSubmit={this.props.onUpdateMovieSubmit}/>
            </div>
        );
    }
}

NewMoviePage.propTypes = {};

const mapStateToProps = ({newMovie,movies},props) => {
    return {
        newMovie,
        movie: movies.movieList.find(item => item._id === props.match.params._id)
    }
};

const mapDispatchToProps = {
    onNewMovieSubmit,
    fetchMovie,
    onUpdateMovieSubmit
};

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviePage);