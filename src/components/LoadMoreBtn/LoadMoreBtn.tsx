import css from './LoadMoreBtn.module.css';

type Props = {
  onLoadMore: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => {
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
