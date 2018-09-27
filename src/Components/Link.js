import React from 'react';

const Link = ({ hostRef, url, icon, title }) => (
  <li>
    <a ref={hostRef} href={url} target="_blank" className={title}>
      {icon} {title}
    </a>
  </li>
);

export default Link;
