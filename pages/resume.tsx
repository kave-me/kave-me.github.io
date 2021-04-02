import { Typography } from '@material-ui/core';
import GetHead from '../src/components/utils/GetHead';

export default function Resume() {
  return (
    <>
      <GetHead keyWord={'Resume'} />
      <Typography variant={'h3'}>This page will generate my resume as PDF</Typography>
      <Typography variant={'h4'}>It will be ready very soon. ⏳</Typography>
    </>
  );
}
