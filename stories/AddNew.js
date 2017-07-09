import React, { Component } from 'react';
import AddNew from '../src/components/AddNew.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('AddNew', module)
  .add('with text', () => <AddNew name="Text"></AddNew>)
  .add('without text', () => <AddNew></AddNew>);