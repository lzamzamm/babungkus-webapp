import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../utils/config";

const baseQuery = fetchBaseQuery({ baseUrl: `${config.BASE_URL}` });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["user", "toko", "produk", "laporan", "pesanan"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
