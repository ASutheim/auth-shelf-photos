import React from 'react';
import ShelfForm from './ShelfForm/ShelfForm';
import ShelfDisplay from '../ShelfDisplay/ShelfDisplay'

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm/>
      <ShelfDisplay/>
    </div>
  );
}

export default ShelfPage;
