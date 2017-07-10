import React, { Component } from 'react';
import AddNewButton from '../src/components/AddNewButton.jsx';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';


storiesOf('AddNewButton', module)
  .add('scroll', () => {
          return (
            <div style={{height:"2000px"}}>
              <AddNewButton onClick={action('clicked')}></AddNewButton>
            </div>
          )})
  .add('no scroll', () => <AddNewButton onClick={action('clicked')}></AddNewButton>);