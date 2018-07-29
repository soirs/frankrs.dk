// icon.js

import React from 'react';

const Icon = ({ name }) => {
  const src = require(`./svg/${name}.svg`);

  return (
    <img src={src} className={`icon icon__${name}`} alt={`${name} icon`} />
  );
};

export default Icon;
