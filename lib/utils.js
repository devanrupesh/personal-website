export const transformedImagesForCarousel = (featureImagesContent) => {
  const transformedImages = featureImagesContent.fields.images.map((image) => ({
    id: image.sys.id,
    description: image.fields.description,
    url: `https:${image.fields.file.url}`,
    height: image.fields.file.details.image.height,
    width: image.fields.file.details.image.width,
  }));

  return transformedImages;
};

export const transformedImagesForCards = (facilitiesContent) => {
  const transformedContent = facilitiesContent.map((content) => ({
    id: content.sys.id,
    title: content.fields.cardTitle,
    description: content.fields.cardDescription,
    url: `https:${content.fields.cardImage.fields.file.url}`,
    height: content.fields.cardImage.fields.file.details.image.height,
    width: content.fields.cardImage.fields.file.details.image.width,
  }));

  return transformedContent;
};
