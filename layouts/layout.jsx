import React from 'react';
import { Layout } from '../components';

export default ({
  title, code, output, furtherReading, next,
}) => ({ children }) => (
  <Layout title={title} code={code} output={output} furtherReading={furtherReading} next={next}>
    {children}
  </Layout>
);
