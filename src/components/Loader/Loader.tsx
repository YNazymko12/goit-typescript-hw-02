import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={css.wrapper} aria-label="Loading spinner">
      <InfinitySpin width="200" color="#3f51b5" />
    </div>
  );
};

export default Loader;
