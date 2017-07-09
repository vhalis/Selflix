import React, { Component } from 'react';
import MovieGrid from '../src/components/MovieGrid.jsx';

import { storiesOf } from '@storybook/react';

const defaultProps = [
    {
        movieReleaseDate: "June 2015",
        movieTitle: "Gone with the Flatulence",
        movieDescription: "You'll be blown away by this masterful performance",
    },
    {
        movieReleaseDate: "May 2017",
        movieTitle: "The Avengers Get Shawerma",
        movieDescription: "Doesn't it make things seem more real? Are you getting hungry?",
    },
];

storiesOf('MovieGrid', module)
  .add('with movies', () => <MovieGrid movies={defaultProps}></MovieGrid>)
  .add('without movies', () => <MovieGrid></MovieGrid>);