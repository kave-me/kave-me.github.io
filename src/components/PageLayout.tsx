import { Container, Grid } from '@material-ui/core';
import { ReactElement } from 'react';

export default function PageLayout({ children }: { children: ReactElement }) {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid item md={1} />
        <Grid item xs={12} md={10}>
          {children}
        </Grid>
        <Grid item md={1} />
      </Grid>
    </Container>
  );
}
