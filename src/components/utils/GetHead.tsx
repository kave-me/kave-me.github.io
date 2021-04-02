import Head from 'next/head';

const GetHead = ({ keyWord = 'A web developer' }: { keyWord?: string }) => (
  <Head>
    <title>{`Kave Mohammadi | ${keyWord}`}</title>
  </Head>
);

export default GetHead;
