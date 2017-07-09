import React, { Component } from 'react';
import AddNew from '../src/components/AddNew.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('AddNew', module)
  .add('Scroll', () => {
          return (
            <div style={{height:"2000px"}}><AddNew></AddNew></div>
          )})
  .add('No Scroll', () => <AddNew></AddNew>);