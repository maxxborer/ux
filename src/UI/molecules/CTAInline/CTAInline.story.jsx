import React from 'react';
import CTAInline from './CTAInline';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('CTAInline', module)
    .add('Default', () => (
      <div style={{ padding: 60 }}>
        <ThemeInjector>
          <CTAInline />
        </ThemeInjector>
      </div>
    ))
);
