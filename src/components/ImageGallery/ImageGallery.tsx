import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

import { Image } from '../../types/image';

type Props = {
  images: Image[];
  showModal: (imageUrl: string) => void;
};

const ImageGallery: React.FC<Props> = ({ images, showModal }) => {
  return (
    <ul className={css.list}>
      {images &&
        images.map(image => {
          return (
            <li className={css.item} key={image.id}>
              <ImageCard
                image={image}
                showModal={() => showModal(image.urls.regular)}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
