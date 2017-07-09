import React, { Component } from 'react';
import MovieTile from '../src/components/MovieTile.jsx';

import { storiesOf } from '@storybook/react';

const defaultProps = {
    movieReleaseDate: "June 2015",
    movieTitle: "Gone with the Flatulence",
    movieDescription: "You'll be blown away by this masterful performance",
}

storiesOf('MovieTile', module)
  .add('with text', () => <MovieTile {...defaultProps}></MovieTile>)
  .add('without props', () => <MovieTile></MovieTile>);