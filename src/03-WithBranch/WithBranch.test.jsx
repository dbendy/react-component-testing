/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWithBranch from './WithBranch';

describe('ComponentWithBranch', () => {
  describe('with show', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<ComponentWithBranch show />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('without show', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<ComponentWithBranch />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
