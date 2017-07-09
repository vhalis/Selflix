import React, { Component } from 'react';
import Header from '../src/components/Header.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('Header', module)
  .addDecorator(function(getStory) { return (<div>{getStory()}</div>) })
  .add('Test A', () => <Header name="A"></Header>)
  .add('Test B', () => <Header name="B"></Header>);