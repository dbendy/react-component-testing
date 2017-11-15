import React from 'react';
// eslint-disable-next-line
import LibraryButton from './LibComponents';

const ComponentWithDependency = () => (
  <div>
    <h1>Unwanted popup!  Click ok to make this go away.</h1>
    <LibraryButton text="Ok" />
  </div>
);

export default ComponentWithDependency;
