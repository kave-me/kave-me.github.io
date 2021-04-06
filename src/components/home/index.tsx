import IntroSection from './IntroSection';
import ProjectSection from './ProjectsSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { gql, useQuery } from '@apollo/client';
import ErrorPage from '../Error';
import LoadingPage from '../Loading';

const BIO_QUERY = gql`
  query userBio {
    bio {
      name
      tagline
      email
      github
      resume
      twitter
      linkedin
      objective
    }
  }
`;

export default function HomePage() {
  const { data, loading, error } = useQuery(BIO_QUERY);
  if (error) {
    return <ErrorPage />;
  }
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Navbar
        linkedinUrl={data.bio.linkedin}
        githubUrl={data.bio.github}
        twitterUrl={data.bio.twitter}
        resumeUrl={data.bio.resume}
      />
      <IntroSection />
      {/*<ProjectSection />*/}
      {/*<BlogSection />*/}
      {/*<ContactSection />*/}
      {/*<Footer />*/}
    </>
  );
}
