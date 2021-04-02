import GetHead from './utils/GetHead';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <GetHead keyWord={'Loading'} />
      <ReactLoading type={'spinningBubbles'} width={'10%'} height={'10%'} color={'gray'} />
    </div>
  );
}
