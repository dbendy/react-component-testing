/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWithDependency from './WithDependency';

jest.mock('./LibComponents', () => 'LibraryButton');

describe('ComponentWithDependency', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ComponentWithDependency />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
