import { Div, H1, Strong } from '@stylin.js/elements';
import { FC } from 'react';

import { Layout } from '@/components';

const Home: FC = () => (
  <Layout>
    <Div p="2rem">
      <H1 textAlign="center" color="#FFFFFF">
        <Strong color="#DD8888">RE</Strong>por
        <Strong color="#8888DD">TE</Strong>
      </H1>
    </Div>
  </Layout>
);

export default Home;
