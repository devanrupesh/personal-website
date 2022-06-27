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

// export const transformedImagesForCards = (content) => {
//   let transformedContent = content.map((content) => ({
//     id: content.sys.id,
//     title: content.fields.cardTitle,
//     details: content.fields.cardDetails,
//     url: `https:${content.fields.cardImage.fields.file.url}`,
//     height: content.fields.cardImage.fields.file.details.image.height,
//     width: content.fields.cardImage.fields.file.details.image.width,
//     enrolledProgram: content.fields.enrolledProgram
//       ? content.fields.enrolledProgram
//       : null,
//     federation: content.fields.federation ? content.fields.federation : null,
//     priority: content.fields.priority ? content.fields.priority : null,
//     createdAt: content.sys.createdAt,
//   }));

//   // sort by createdTime
//   transformedContent = transformedContent.sort((a, b) => {
//     return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
//   });

//   return transformedContent;
// };

export const transformedContent = (content) => {
  let transformedContent = content.map((content) => ({
    id: content.sys.id,
    title: content.fields.title
      ? content.fields.title
      : content.fields.cardTitle
      ? content.fields.cardTitle
      : '',
    details: content.fields.details
      ? content.fields.details
      : content.fields.cardDetails
      ? content.fields.cardDetails
      : '',
    url:
      content.fields.cardImage &&
      `https:${content.fields.cardImage.fields.file.url}`,
    height:
      content.fields.cardImage &&
      content.fields.cardImage.fields.file.details.image.height,
    width:
      content.fields.cardImage &&
      content.fields.cardImage.fields.file.details.image.width,
    enrolledProgram: content.fields.enrolledProgram
      ? content.fields.enrolledProgram
      : null,
    federation: content.fields.federation ? content.fields.federation : null,
    priority: content.fields.priority ? content.fields.priority : null,
    createdAt: content.sys.createdAt,
  }));

  // sort by createdTime
  transformedContent = transformedContent.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
  });

  return transformedContent;
};

export const sortDescending = (content) => {
  const sortedContent = content.sort((a, b) => {
    if (typeof a.priority && typeof b.priority == 'string') {
      const t_b = parseInt(b.priority.replace(/\D+/g, ''));
      const t_a = parseInt(a.priority.replace(/\D+/g, ''));
      return t_b - t_a;
    } else {
      return b.priority - a.priority;
    }
  });

  return sortedContent;
};
