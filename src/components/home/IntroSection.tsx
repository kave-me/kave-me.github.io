import { Box, makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyles = makeStyles((theme) => ({
  sectionIntro: {
    padding: theme.spacing(0, 4),
    display: 'flex',
    flexDirection: 'row-reverse',
    height: '91vh'
  },
  sectionIntro_img: {
    display: 'flex',
    maxWidth: '40%',
    width: '500px',
    alignSelf: 'center'
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
    width: '600px',
    maxWidth: '50%'
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
const IntroSection = () => {
  const styles = useStyles();
  return (
    <Box className={styles.sectionIntro}>
      {/* TODO: use next/image instead of raw img*/}
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
          I am a web developer, I started doing web development since 2017 as a hobby but my career
          as a developer started six month after that as a freelancer.
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
  );
};
export default IntroSection;
