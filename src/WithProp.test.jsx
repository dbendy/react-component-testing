/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWithProp from './WithProp';

describe('ComponentWithProp', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ComponentWithProp msg="Jest is awesome" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
