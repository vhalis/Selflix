import React, { Component } from 'react';
import MovieGrid from '../src/components/MovieGrid.jsx';

import { storiesOf } from '@storybook/react';

const defaultProps = [
    {
        movieReleaseDate: "June 2015",
        movieTitle: "Gone with the Flatulence",
        movieDescription: "You'll be blown away by this masterful performance.",
        movieImage: "https://source.unsplash.com/kKLEgX-Z_O4",
    },
    {
        movieReleaseDate: "May 2017",
        movieTitle: "The Avengers Get Shawerma",
        movieDescription: "Doesn't it make things seem more real? Are you getting hungry?",
        movieImage: "https://source.unsplash.com/rbwgeca-HWU",
    },
    {
        movieReleaseDate: "February 2017",
        movieTitle: "This Movie Has A Really Long Title: The Movie (Director's Cut)",
        movieDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet scelerisque erat. Nam nec mollis dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam porta ac augue et mollis. Aliquam vitae feugiat ligula. Etiam mollis placerat tortor in mollis. Duis quis eros auctor, dapibus velit a, accumsan est. Duis at quam ex.",
        movieImage: "https://source.unsplash.com/7eKCe28OG6E",
<<<<<<< HEAD
=======
    },
    {
        movieReleaseDate: "May 2017",
        movieTitle: "The Avengers Get Shawerma Again",
        movieDescription: "Doesn't it make things seem more real? Are you getting hungry?",
    },
    {
        movieReleaseDate: "May 2017",
        movieTitle: "The Avengers Get Shawerma Again and Again",
        movieDescription: "Doesn't it make things seem more real? Are you getting hungry?",
>>>>>>> 92db78f84f2c001768e273c7e862d21fffb96efe
    },
];

storiesOf('MovieGrid', module)
  .add('with movies', () => <MovieGrid movies={defaultProps}></MovieGrid>)
  .add('without movies', () => <MovieGrid></MovieGrid>);