import css from './ErrorMessage.module.css';

type Props = {
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={css.errorMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
