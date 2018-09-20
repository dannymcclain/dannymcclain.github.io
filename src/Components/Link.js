import React from 'react';

const Link = ({ hostRef, url, icon, title }) => (
  <a ref={hostRef} href={url} target="_blank" className={title}>
    {icon} {title}
  </a>
);

export default Link;
