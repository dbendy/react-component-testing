import React from 'react';
import { LibraryButton, LibraryForm } from '../LibComponents';

const ComponentWithNamedExport = () => (
  <div>
    <h1>Annoying form modal!</h1>
    <LibraryForm />
    <LibraryButton text="Submit" />
  </div>
);

export default ComponentWithNamedExport;
