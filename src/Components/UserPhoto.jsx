import React from 'react';
import Figure from 'react-bootstrap/Figure';

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={175}
        height={200}
        alt="171x180"
        src="https://miro.medium.com/v2/resize:fit:1358/0*xFuo_UNWchLZ8bqS.jpeg"
      />
      <Figure.Caption>
        Nulla vitae elit libero.
      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;