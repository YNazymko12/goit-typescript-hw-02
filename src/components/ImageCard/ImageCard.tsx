import css from './ImageCard.module.css';

import { Image } from '../../types/image';

type Props = {
  image: Image;
  showModal: (imageUrl: string) => void;
};

const ImageCard: React.FC<Props> = ({ image, showModal }) => {
  return (
    <div>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => showModal(image.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
