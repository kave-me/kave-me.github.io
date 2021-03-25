import Head from 'next/head';
import ReactLoading from 'react-loading';
import { useQuery, gql } from '@apollo/client';

export default function Home() {
  const BioQuery = gql`
    query KaveMohammadi {
      bio {
        name
        email
        website
        linkedin
      }
    }
  `;

  const { loading, data, error } = useQuery(BioQuery);

  if (error) {
    return (
      <>
        <Head>
          <title>{'Kave Mohammadi | Error'}</title>
        </Head>
        <h1>Please contact me at kave.mdi[at]gmail.com when you see this Error page!</h1>
      </>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          width: '90vw',
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Head>
          <title>{'Kave Mohammadi | Loading'}</title>
        </Head>
        <ReactLoading type={'spinningBubbles'} width={'10%'} height={'10%'} color={'gray'} />
      </div>
    );
  }
  console.log(data);
  return (
    <>
      <Head>
        <title>{'title'}</title>
      </Head>
      <h1> Resume </h1>
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
