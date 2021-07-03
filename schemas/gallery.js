export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  preview: {
    select: {
      title: "name",
      media: "images.0",
    },
  },
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      initialValue: "Gallery",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
