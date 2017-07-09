import React, { Component } from 'react';
import Header from '../src/components/Header.jsx';

import { storiesOf } from '@storybook/react';

storiesOf('Header', module)
  .addDecorator(function(getStory) { return (<div>{getStory()}</div>) })
  .add('Scroll', () => {
          return (
            <div style={{height:"2000px"}}><Header></Header></div>
          )})
  .add('No Scroll', () => <Header></Header>);