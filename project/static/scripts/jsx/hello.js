import React from 'react';
const Hello = ({ userName }) => (
  <div className="greeting">Hellaaoolo, {userName}!</div>
);
export default Hello;

React.render(
  <Hello userName="hoge" />,
  document.getElementById('hello')
);