import HomePage from '../src/components/home';
import PageLayout from '../src/components/PageLayout';
import GetHead from '../src/components/utils/GetHead';
import splitbee from '@splitbee/web';

if (process.browser) {
  setTimeout(() => splitbee.init(), 2 * 1000);
}

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
