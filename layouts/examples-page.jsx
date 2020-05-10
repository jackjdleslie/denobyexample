import React from 'react';

export default (frontMatter) => ({ children: content }) => (
  <div>
    <h1>{frontMatter.title}</h1>
    {content}
  </div>
);
