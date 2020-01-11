import React from 'react'
import { Card,Grid,Button,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const extra = (movie, deleteMovie) => {
        return(
            <div>
                <Button positive as={Link} to={`/movie/${movie._id}`}>
                    <Button.Content visible>
                        <Icon name='edit' size='large'/>
                    </Button.Content>
                </Button>
                <Button negative onClick={() => deleteMovie(movie._id)}>
                    <Button.Content visible>
                        <Icon name='delete' size='large'/>
                    </Button.Content>
                </Button>
            </div>
        );
    }

const MovieCard = ({movie, deleteMovie}) => (
    <Grid.Column>
        <Card>
            <Card
                image={movie.cover}
                header={movie.title}
                extra={extra(movie,deleteMovie)}
            />
        </Card>
    </Grid.Column>
)

export default MovieCard