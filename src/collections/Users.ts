import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    components: {
      beforeListTable: ['./src/collections/Component.tsx'],
    },
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
