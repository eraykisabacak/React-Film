import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { Image,Button, Form,Message } from 'semantic-ui-react'

import InlineError from '../InlineError';

class NewMovieForm extends Component {
    state ={
        _id: this.props.movie ? this.props.movie._id : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        errors: {}
    };

    static propTypes = {
        onNewMovieSubmit: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.newMovie.movie.title &&
            nextProps.newMovie.movie.title !== this.state.title)
        {
            this.setState({
                title:nextProps.newMovie.movie.title,
                cover:nextProps.newMovie.movie.cover
            })
        }

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.cover] : e.target.value
        })
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors
        });

        const _id = this.state._id || this.props.newMovie.movie._id;

        if(Object.keys(errors).length === 0){
            if(!_id)
                this.props.onNewMovieSubmit(this.state);
            else
                this.props.onUpdateMovieSubmit({...this.state,_id});
        }

    };

    validate = () => {
        const errors = {};
        if(!this.state.title) errors.title = "Can't be title blank.";
        if(!this.state.cover) errors.cover = "Can't be cover blank.";
        return errors;
    };

    render() {
        const {errors} = this.state;
        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching }>
                <Form.Field error={errors.title ? true : false}>
                    <label>Film Title</label>
                    {errors.title ? <InlineError message={errors.title}/> : null}
                    <input
                        id="title"
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        placeholder='Title'
                    />
                </Form.Field>
                <Form.Field error={errors.cover ? true : false}>
                    <label>Film Cover URL</label>
                    {errors.cover ? <InlineError message={errors.cover}/> : null}
                    <input
                        id="cover"
                        name="cover"
                        onChange={this.handleChange}
                        value={this.state.cover}
                        placeholder='Cover URL' />
                </Form.Field>
                <Form.Field>
                    <Image src={this.state.cover} size='small' />
                </Form.Field>
                <Button primary type='submit'>Submit</Button>
                {
                    this.props.newMovie.err
                        ?
                        (
                            <Message negative>
                                <Message.Header>Maalesef kayıt edilmedi</Message.Header>
                                <p>Lütfen tekrar deneyiniz</p>
                            </Message>
                        )
                        : null
                }
            </Form>
        );

        return (
            <div>
                {
                    this.props.newMovie.done ? <Redirect to="/movies"/> : form
                }
            </div>
        );
    }
}

export default NewMovieForm;