import Head from 'next/head';
import ReactLoading from 'react-loading';
import Button from '@material-ui/core/Button';
import { useQuery, gql } from '@apollo/client';
import { makeStyles, Box, Container, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  caption: {
    margin: 'auto'
  }
}));

export default function Home() {
  const styles = useStyles();

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

      <Container>
        <Box className={styles.caption}>
          <Typography variant={'h3'} component={'h1'}>
            Frontend developer
          </Typography>
          <Typography paragraph={true} variant={'body1'}>
            I’ve worked as a systems analyst since I graduated from college. I am very particular
            about the details of my work, but I also like to stay open-minded to new ideas. I never
            want to close myself off to other people’s opinions.
          </Typography>
          <Button variant="contained" color="primary">
            More about me
          </Button>
        </Box>
        <Paper>
          <pre> {JSON.stringify(data, null, 2)}</pre>
        </Paper>
      </Container>
      {/*<h1> Resume </h1>*/}
    </>
  );
}
