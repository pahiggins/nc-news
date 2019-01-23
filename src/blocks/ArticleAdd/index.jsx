import React, { Component } from 'react';
import { SpinLoader } from 'react-css-loaders';
import styled from 'styled-components';
import Section from '../../elements/Section';
import Button from '../../elements/Button';
import * as api from '../../utils';
import { capitalizeFirstLetter } from './utils';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-family: 'Libre Baskerville', serif;
  margin-bottom: 2rem;
  height: 5.4rem;
  font-size: 4.2rem;
  border: none;
  color: rgba(0, 0, 0, 0.84);

  &::placeholder {
    color: rgba(0, 0, 0, 0.24);
  }

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  margin-bottom: 2.5rem;
  height: 4rem;
  border: none;

  &:focus {
    outline: none;
    border: 1px solid rgba(3, 168, 124, 1);
  }
`;

const TextArea = styled.textarea`
  font-family: 'Libre Baskerville', serif;
  margin-bottom: 2rem;
  height: 55vh;
  font-size: 2rem;
  border: none;
  color: rgba(0, 0, 0, 0.84);
  resize: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.24);
  }

  &:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

class ArticleAdd extends Component {
  state = {
    topics: [],
    title: '',
    topic: 'coding',
    body: '',
    loading: true,
    error: '',
  };

  render() {
    const { topics, title, topic, body, loading } = this.state;

    return (
      <Section inputWidth="80%" inputMargin="0 auto">
        {loading ? (
          <SpinLoader size={5} color="#ccc" />
        ) : (
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={this.handleChange}
              placeholder="Title"
              autoFocus
            />
            <Select
              type="select"
              id="topic"
              value={topic}
              name="select"
              onChange={this.handleChange}
            >
              {topics.map(({ slug }) => (
                <option key={slug}>{capitalizeFirstLetter(slug)}</option>
              ))}
            </Select>
            <TextArea
              type="text"
              id="body"
              value={body}
              onChange={this.handleChange}
              placeholder="Tell your story..."
              rows="5"
              cols="33"
            />
            <Buttons>
              <Button
                type="submit"
                borderColor={'rgba(0, 0, 0, 0.24)'}
                borderColorHover={'rgba(0, 0, 0, 0.54)'}
                color={'rgba(0, 0, 0, 0.54)'}
                marginRight={'1.5rem'}
                onClick={this.handleClick}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                backgroundColorHover={'rgba(3, 168, 124, 1)'}
                borderColor={'rgba(3, 168, 124, 1)'}
                color={'rgba(3, 168, 124, 1)'}
                colorHover={'#fff'}
                backgroundColorSelect={'rgba(3, 168, 124, 0.8)'}
                borderColorSelect={'rgba(3, 168, 124, 0.8)'}
                onClick={() => {}}
              >
                Publish
              </Button>
            </Buttons>
          </Form>
        )}
      </Section>
    );
  }

  componentDidMount() {
    this.loadTopics();
  }

  loadTopics = () => {
    api
      .getTopics()
      .then(topics => this.setState({ topics, loading: false }))
      .catch(error => this.setState({ error }));
  };

  handleChange = event => {
    const { value, id } = event.target;
    this.setState({
      [id]: value,
    });
  };

  handleClick = () => {
    this.props.history.push('/');
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, body, topic } = this.state;
    const username = 'tickle122'; // TODO: Code this.

    api
      .addArticle(title, body, username, topic)
      .then(({ article_id }) =>
        // this.props.history.push(`/${username}/${article_id}`)
        this.props.history.push(`/`)
      )
      .catch(error => this.setState({ error }));
  };
}

export default ArticleAdd;
