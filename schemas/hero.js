export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      initialValue: "Hero",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
    },
    {
      name: "subheadline",
      type: "string",
      title: "Sub Headline",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
