import React, { Component } from 'react';
import AddNew from '../src/components/AddNew.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('AddNew', module)
  .add('Test A', () => <AddNew name="A"></AddNew>)
  .add('Test B', () => <AddNew name="B"></AddNew>);