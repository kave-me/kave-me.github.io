import Head from 'next/head';
import ReactLoading from 'react-loading';
import Button from '@material-ui/core/Button';
import { useQuery, gql } from '@apollo/client';
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  Box,
  Container,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  sectionIntro: {
    display: 'grid',
    height: '88vh'
  },
  sectionIntro_p: {
    margin: theme.spacing(2, 0, 7, 0)
  },
  arrowDown: {
    position: 'absolute',
    margin: theme.spacing(0, 'auto'),
    left: '50%',
    bottom: theme.spacing(10)
  },
  sectionProjects: {},
  caption: {
    alignSelf: 'center',
    marginLeft: theme.spacing(8),
    width: '50%'
  },
  toolbar: {
    padding: theme.spacing(0, 8)
  },
  socialMediaIcon: {
    margin: theme.spacing(0, 1)
  },
  logo: {
    margin: theme.spacing(0, 'auto')
  },
  menuIcon: {
    marginLeft: 'auto'
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

  const GetHead = ({ keyWord = 'A web developer' }: { keyWord?: string }) => (
    <Head>
      <title>{`Kave Mohammadi | ${keyWord}`}</title>
    </Head>
  );

  if (error) {
    return (
      <>
        <GetHead keyWord={'Error'} />
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
        <GetHead keyWord={'Loading'} />
        <ReactLoading type={'spinningBubbles'} width={'10%'} height={'10%'} color={'gray'} />
      </div>
    );
  }
  console.log(data);
  return (
    <>
      <GetHead keyWord={'Frontend React developer'} />

      <Container disableGutters={true} component={'main'}>
        <AppBar position="static" color={'transparent'} elevation={0}>
          <Toolbar className={styles.toolbar}>
            <IconButton className={styles.socialMediaIcon} size={'small'} color="default">
              <GitHubIcon />
            </IconButton>
            <IconButton className={styles.socialMediaIcon} size={'small'} color="default">
              <LinkedInIcon />
            </IconButton>
            <IconButton className={styles.socialMediaIcon} size={'small'} color="default">
              <TwitterIcon />
            </IconButton>
            <IconButton className={styles.socialMediaIcon} size={'small'} color="default">
              <CloudDownloadIcon />
            </IconButton>
            <IconButton className={styles.menuIcon} size={'small'} edge="end" color="default">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box className={styles.sectionIntro}>
          <Box className={styles.caption}>
            <Typography variant={'h3'} component={'h1'}>
              Frontend developer
            </Typography>
            <Typography
              className={styles.sectionIntro_p}
              paragraph={true}
              variant={'body1'}
              component={'h2'}>
              I am a web developer, I started doing web development since 2017 as a hobby but my
              career as a developer started at early 2020.
              <br />
              Web development is my art. Whether it’s preparing a complex web base game or a simple
              landing page, I always put my heart and soul into my work.
            </Typography>
            <Button variant="contained" color="primary">
              More about me
            </Button>
          </Box>
          <Box className={styles.arrowDown}>
            <KeyboardArrowDownIcon />
          </Box>
        </Box>
        {/*<Paper>*/}
        {/*  <pre> {JSON.stringify(data, null, 2)}</pre>*/}
        {/*</Paper>*/}
      </Container>
    </>
  );
}
