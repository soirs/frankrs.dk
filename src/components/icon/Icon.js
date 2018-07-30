// icon.js

import React from 'react';

const Icon = ({ name }) => {
  const src = require(`./svg/${name}.svg`);

  return (
    <img src={src} className={`some__icon some__icon${name}`} alt={`${name} icon`} />
  );
};

export default Icon;
