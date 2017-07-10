import React, { Component } from 'react';
import App from '../src/App.js';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

storiesOf('App', module)
  .add('default', () => <App />);