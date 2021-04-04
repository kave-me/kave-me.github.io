import {
  AppBar,
  Drawer,
  IconButton,
  Link,
  makeStyles,
  Switch,
  Toolbar,
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
  Typography
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MenuIcon from '@material-ui/icons/Menu';
import useTheme from '../globalState/useTheme';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    // up right bottom left
    padding: theme.spacing(2, 1, 0, 1),
    display: 'flex',
    justifyContent: 'space-between'
  },
  switchTheme: {
    margin: '0 auto'
  },
  smDivider: {
    marginTop: 'auto'
  }
}));

const Navbar = ({
  linkedinUrl,
  githubUrl,
  twitterUrl,
  resumeUrl
}: {
  linkedinUrl: string;
  githubUrl: string;
  twitterUrl: string;
  resumeUrl: string;
}) => {
  // TODO fix type declaration
  const switchTheme = useTheme((state) => state.switchTheme) as any;

  const [isDrawerOpen, setIsDrawerOpen] = useState(() => false);
  const toggleDrawer = () => setIsDrawerOpen((c) => !c);

  const styles = useStyles();
  return (
    <>
      <AppBar position="static" color={'transparent'} elevation={0}>
        <Toolbar className={styles.toolbar}>
          <Tooltip title="Github" aria-label="Github">
            <Link rel={'noopener noreferrer'} href={githubUrl} target={'_blank'}>
              <IconButton color="default">
                <GitHubIcon fontSize={'large'} />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip title="Open menu" aria-label="menu">
            <IconButton color="default" onClick={toggleDrawer}>
              <MenuIcon fontSize={'large'} />
            </IconButton>
          </Tooltip>
        </Toolbar>

        <Drawer anchor={'right'} open={isDrawerOpen} onClose={toggleDrawer}>
          <Tooltip title="Toggle useTheme mode" aria-label="Theme mode">
            <Switch
              className={styles.switchTheme}
              onChange={() => switchTheme()}
              color="primary"
              name="switchTheme"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </Tooltip>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText
                primary={'Blog'}
                secondary={'My dev journey'}
                secondaryTypographyProps={{ variant: 'caption' }}
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={'Projects'}
                secondary={'Showcases are here'}
                secondaryTypographyProps={{ variant: 'caption' }}
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary={'About me'}
                secondary={'Who am I?'}
                secondaryTypographyProps={{ variant: 'caption' }}
                primaryTypographyProps={{ variant: 'body2' }}
              />
            </ListItem>
          </List>
          <Divider className={styles.smDivider} />
          <List>
            <ListSubheader>
              <Typography variant={'h6'}> {`Keep in touch`}</Typography>
            </ListSubheader>
            {[
              { name: 'GitHub', link: githubUrl, icon: GitHubIcon },
              { name: 'LinkedIn', link: linkedinUrl, icon: LinkedInIcon },
              { name: 'Twitter', link: twitterUrl, icon: TwitterIcon },
              { name: 'Resume', link: resumeUrl, icon: CloudDownloadIcon }
            ].map((sm, i) => (
              <Link
                color={'textPrimary'}
                key={i}
                rel={'noopener noreferrer'}
                href={sm.link}
                target={'_blank'}>
                <ListItem button>
                  <ListItemIcon>
                    <Tooltip title={sm.name} aria-label={sm.name}>
                      <IconButton size={'small'} color="default">
                        {<sm.icon />}
                      </IconButton>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={sm.name} primaryTypographyProps={{ variant: 'body2' }} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  );
};
export default Navbar;
