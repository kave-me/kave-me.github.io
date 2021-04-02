import { Box, makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  projectSection: {
    height: '100vh',
    backgroundColor: 'green',
    padding: theme.spacing(4)
  }
}));

export default function ProjectSection() {
  const styles = useStyles();
  return (
    <Box className={styles.projectSection}>
      <Typography>This is a text</Typography>
    </Box>
  );
}
