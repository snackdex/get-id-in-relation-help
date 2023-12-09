import {
  MigrateUpArgs,
  MigrateDownArgs,
} from "@payloadcms/db-mongodb";

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  // Migration code
  const collectionB = await payload.create({
    collection: 'collection-b',
    data: {}
  });
  await payload.create({
    collection: 'collection-a',
    data: {
      collectionB: collectionB.id
    }
  });
};

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  await payload.delete({
    collection: 'collection-a',
    where: {}
  });
  await payload.delete({
    collection: 'collection-b',
    where: {}
  });
};
