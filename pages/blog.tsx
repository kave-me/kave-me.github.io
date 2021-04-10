import Head from 'next/head';
import Layout, { siteTitle } from '../src/components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../src/components/date';
import { GetStaticProps } from 'next';
import GetHead from '../src/components/utils/GetHead';
import { Typography } from '@material-ui/core';
import splitbee from '@splitbee/web';

if (process.browser) {
  setTimeout(() => splitbee.init(), 2 * 1000);
}
export default function Blog({
  allPostsData
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <GetHead keyWord={'blog'} />
      <section className={utilStyles.headingMd}>
        <Typography variant={'h5'}>
          This is a space for dialuge, lets make a conversation around tech and dev exploration 🚀
        </Typography>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
