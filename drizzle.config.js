/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.jsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_J6sqlXywe2pv@ep-delicate-tree-a1kt7hsq-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
};
