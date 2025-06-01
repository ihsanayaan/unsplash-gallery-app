const ImageCard = ({ image }) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = image.urls.full;
    link.download = "unsplash-image.jpg";
    link.click();
  };

  return (
    <div className="group relative">
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="rounded shadow-lg w-full h-64 object-cover"
      />
      <button
        onClick={downloadImage}
        className="absolute bottom-2 right-2 bg-white text-black text-xs px-3 py-1 rounded shadow group-hover:opacity-100 opacity-80"
      >
        Download
      </button>
    </div>
  );
};

export default ImageCard;
