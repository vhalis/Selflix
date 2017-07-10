import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import MovieModal from '../src/components/MovieModal.jsx';


storiesOf('MovieModal', module)
    .add('it renders', () =>
        <MovieModal>Test</MovieModal>);