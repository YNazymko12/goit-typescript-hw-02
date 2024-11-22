import css from './ImageCard.module.css';

const ImageCard = ({ image, showModal }) => {
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
