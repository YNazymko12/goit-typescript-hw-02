import Modal from 'react-modal';
import { useEffect } from 'react';
import css from './ImageModal.module.css';

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  largeImageURL: string;
};

Modal.setAppElement('#root');

const ImageModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  largeImageURL,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.overlay}
    >
      <img className={css.image} src={largeImageURL} alt="Image" />
    </Modal>
  );
};

export default ImageModal;
