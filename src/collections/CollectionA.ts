import { CollectionConfig } from "payload/types";

const CollectionA: CollectionConfig = {
  slug: 'collection-a',
  fields: [
    {
      name: 'collectionB',
      type: "relationship",
      relationTo: 'collection-a',
      required: true
    }
  ],
  access: {
    read: () => true
  }
}

export default CollectionA;