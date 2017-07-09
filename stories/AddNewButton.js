import React, { Component } from 'react';
import AddNewButton from '../src/components/AddNewButton.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('AddNewButton', module)
  .add('scroll', () => {
          return (
            <div style={{height:"2000px"}}><AddNewButton></AddNewButton></div>
          )})
  .add('no scroll', () => <AddNewButton></AddNewButton>);