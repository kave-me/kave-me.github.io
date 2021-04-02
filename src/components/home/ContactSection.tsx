import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { gql, useQuery } from '@apollo/client';
import ErrorPage from '../Error';
import LoadingPage from '../Loading';

const useStyles = makeStyles((theme) => ({
  projectSection: {
    height: '100vh',
    backgroundColor: 'blue',
    padding: theme.spacing(4)
  }
}));

const BIO_QUERY = gql`
  query KaveMohammadi {
    bio {
      name
      email
      resume
      linkedin
    }
  }
`;

export default function ContactSection() {
  const styles = useStyles();
  const { loading, data, error } = useQuery(BIO_QUERY);

  if (error) {
    return <ErrorPage />;
  }

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <Box className={styles.projectSection}>
      <Typography>This is a text</Typography>

      <Paper>
        <pre> {JSON.stringify(data, null, 2)}</pre>
      </Paper>
    </Box>
  );
}
