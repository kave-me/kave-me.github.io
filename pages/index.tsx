import HomePage from '../src/components/home';
import PageLayout from '../src/components/PageLayout';
import GetHead from '../src/components/utils/GetHead';

export default function Home() {
  return (
    <>
      <GetHead />
      <PageLayout>
        <HomePage />
      </PageLayout>
    </>
  );
}
