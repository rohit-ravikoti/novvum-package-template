import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button2 } from '~/Buttons/components';

storiesOf('Button2', module)
  .add('default view', () => (
    <Button2 onClick={ action('Button2 clicked') }>Hello</Button2>
  ))
  .add('some emojies as the text', () => (
    <Button2>😀 😎 👍 💯</Button2>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button2 style={ style }>Hello</Button2>
    );
  });
