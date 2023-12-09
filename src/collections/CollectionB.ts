import { CollectionConfig } from "payload/types";

const CollectionB: CollectionConfig = {
  slug: 'collection-b',
  fields: [
  ],
  access: {
    read: () => true,
  }
}
export default CollectionB;