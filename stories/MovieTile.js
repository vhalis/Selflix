import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import MovieTile from '../src/components/MovieTile.jsx';


const defaultProps = {
  movieReleaseDate: "June 2015",
  movieTitle: "Gone with the Flatulence",
  movieDescription: "You'll be blown away by this masterful performance.",
  movieImage: "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
}

const minimalProps = {
  movieTitle: "You need a movie title",
}

storiesOf('MovieTile', module)
  .add('with text', () =>
    <MovieTile
      onClick={action('clicked')}
      {...defaultProps} />)
  .add('with unhidden body', () =>
    <MovieTile
      hideBody={false}
      onClick={action('clicked')}
      {...defaultProps} />)
  .add('without props', () =>
    <MovieTile
      onClick={action('clicked')}
      {...minimalProps} />);