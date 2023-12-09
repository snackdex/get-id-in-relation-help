import { CollectionConfig } from "payload/types";

const CollectionB: CollectionConfig = {
  slug: 'collection-b',
  fields: [
  ],
  access: {
    read: ({ id }) => {
      // expecting this to be defined
      console.log({id});
      return true;
    },
  }
}
export default CollectionB;