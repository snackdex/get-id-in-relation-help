import { CollectionConfig } from "payload/types";

const CollectionA: CollectionConfig = {
  slug: 'collection-a',
  fields: [
    {
      name: 'collectionB',
      type: "relationship",
      relationTo: 'collection-b',
      required: true,
      hooks: {
        afterRead: [
          ({ value }) => {
            // we know the value here 
            // and this runs before collectionB access.read
            console.log({value})
          }
        ]
      }
    }
  ],
  access: {
    read: () => true
  }
}

export default CollectionA;