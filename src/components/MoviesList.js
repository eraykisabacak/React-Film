import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from  './MovieCard';
import {Grid} from 'semantic-ui-react'
import { HashLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const MoviesList = ({movies,deleteMovie}) => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const moviesList = (
        <div>
            <HashLoader
                css={override}
                size={100}
                color={"#2d60bc"}
                loading={movies.fetching}
            />
            {
                movies.err
                    ? <h3>Error retrieving data</h3>
                    :
                    <Grid stackable columns={3}>
                        {
                            movies.movieList.map(movie =>
                                <MovieCard
                                key={movie._id}
                                deleteMovie={deleteMovie}
                                movie={movie}/> )
                        }
                    </Grid>
            }
        </div>
    );

    return(
        <div>
            { movies.length === 0 ? emptyMessage : moviesList}
        </div>
    )
};

MoviesList.prototype = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;
