import React, { Component } from 'react';
import AddNewTile from '../src/components/AddNewTile.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('AddNewTile', module)
  .add('default', () => <AddNewTile />)