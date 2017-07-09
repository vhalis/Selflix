import React, { Component } from 'react';
import SortBy from '../src/components/SortBy.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('SortBy', module)
  .add('default', () => <SortBy />);