import { Box, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) => ({
  sectionIntro: {
    display: 'flex',
    flexDirection: 'column',
    height: '94vh',
    justifyItems: 'stretch',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row-reverse',
      padding: theme.spacing(0, 4),
      justifyContent: 'space-around'
    }
  },
  sectionIntro_img: {
    display: 'flex',
    width: '100%',
    alignSelf: 'center',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%'
    }
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
  caption: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
      width: '600px'
    }
  },
  button: {
    alignSelf: 'center',
    marginBottom: theme.spacing(0, 0, 10, 0),
    [theme.breakpoints.up('sm')]: {
      alignSelf: 'start'
    }
  },
  toolbar: {
    padding: theme.spacing(0, 8)
  },
  socialMediaIcon: {
    margin: theme.spacing(0, 1)
  },
  menuIcon: {
    marginLeft: 'auto'
  }
  // blobImage: {
  //   position: 'absolute',
  //   width: 'max-content',
  //   height: 'max-content',
  //   top: 0,
  //   right: 0,
  //   objectFit: 'cover',
  //
  //   opacity: 0.3,
  //   zIndex: -1
  // }
}));

const ButtonLink = ({ className, href, hrefAs, children, prefetch }: any) => (
  <NextLink href={href} as={hrefAs} prefetch>
    <a className={className}>{children}</a>
  </NextLink>
);

const IntroSection = () => {
  const styles = useStyles();
  return (
    <Box className={styles.sectionIntro}>
      {/* TODO: use next/image instead of raw img*/}
      {/*<img className={styles.blobImage} alt={'background shape'} src={'/img/blob.svg'} />*/}
      <img className={styles.sectionIntro_img} alt="coding" src={'/img/coding.svg'} />
      <Box className={styles.caption}>
        <Typography variant={'h3'} component={'h1'}>
          Frontend developer
        </Typography>
        <Typography
          className={styles.sectionIntro_p}
          paragraph={true}
          variant={'body1'}
          component={'h2'}>
          My name is Kave Mohammadi I'm a web developer, I started doing web development since 2017
          as a hobby but nowadays I'm doing it as my career.
          <br />
          Web development is my art. Whether it’s preparing a complex web base game or a simple
          landing page, I always put my heart and soul into my work.
        </Typography>
        <Button
          component={ButtonLink}
          href={'/about'}
          className={styles.button}
          variant="contained"
          color="primary"
          prefetch={true}>
          More about me
        </Button>
      </Box>
      <Box className={styles.arrowDown}>
        <KeyboardArrowDownIcon />
      </Box>
    </Box>
  );
};
export default IntroSection;
