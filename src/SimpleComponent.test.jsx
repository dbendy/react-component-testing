/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import SimpleComponent from './SimpleComponent';

describe('SimpleComponent', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<SimpleComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
