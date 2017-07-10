import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import AddMovieModal from '../src/components/AddMovieModal.jsx';


storiesOf('AddMovieModal', module)
    .add('it renders', () =>
        <AddMovieModal
            createNewMovie={(o) => console.log(o)}
            modalOpen={true}
            onClose={action('closed')} />);