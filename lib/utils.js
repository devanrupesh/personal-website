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

export const transformedImagesForCards = (content) => {
  let transformedContent = content.map((content) => ({
    id: content.sys.id,
    title: content.fields.cardTitle,
    description: content.fields.cardDescription,
    url: `https:${content.fields.cardImage.fields.file.url}`,
    height: content.fields.cardImage.fields.file.details.image.height,
    width: content.fields.cardImage.fields.file.details.image.width,
    enrolledProgram: content.fields.enrolledProgram
      ? content.fields.enrolledProgram
      : null,
    federation: content.fields.federation ? content.fields.federation : null,
    createdAt: content.sys.createdAt,
  }));

  // sort by createdTime
  transformedContent = transformedContent.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
  });

  return transformedContent;
};
