import { useContext } from "react";
import { PhotosContext } from "../context/PhotoContext";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setPhotos(newPhotos);
  };

  const favoritePhotos = photos.filter((photo) => photo.isFavorite);

  return (
    <>
      <div className="gallery grid-columns-5 p-3">
        {favoritePhotos.map((photo, i) => (
          <div
            key={i}
            onClick={() => addFavorite(photo.id)}
            className="photo"
            style={{ backgroundImage: `url(${photo.src.large})` }}
          >
            <IconHeart filled={photo.isFavorite} /> {""}
            <section>
              <p>{photo.alt}</p>
              <h6> 📷 By {photo.photographer} </h6>
            </section>
          </div>
        ))}
      </div>
      <div>
        <p>Seleccionaste:  {favoritePhotos.length} fotos Favoritas </p>
      </div>
      
    </>
  );
};
export default Favorites;
