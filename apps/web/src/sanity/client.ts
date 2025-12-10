import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "njpnpul3",
  dataset: "production",
  apiVersion: "2025-07-09",
  useCdn: false,
});