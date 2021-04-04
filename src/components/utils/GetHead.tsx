import Head from 'next/head';

const GetHead = ({ keyWord = 'A web developer' }: { keyWord?: string }) => (
  <Head>
    <title>{`${keyWord} | Kave Mohammadi`}</title>
  </Head>
);

export default GetHead;
