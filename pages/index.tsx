import { Container } from '@material-ui/core';
import HomePage from '../src/components/home';
import GetHead from '../src/components/utils/GetHead';

export default function Home() {
  return (
    <>
      <GetHead keyWord={'Frontend developer'} />
      <Container disableGutters={true} component={'main'}>
        <HomePage />
      </Container>
    </>
  );
}
