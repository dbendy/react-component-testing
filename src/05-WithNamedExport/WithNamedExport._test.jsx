/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import ComponentWithNamedExport from './WithNamedExport';

jest.mock('../LibComponents', () => ({
  LibraryButton: 'LibraryButton',
  LibraryForm: 'LibraryForm',
}));

describe('ComponentWithNamedExport', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ComponentWithNamedExport show />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
