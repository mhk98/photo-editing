import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageRestorationApi = createApi({
  reducerPath: "imageRestorationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://82.112.226.90:5000/api/v1/",
  }),

  tagTypes: ["imageRestoration"], // Define the tag type
  endpoints: (build) => ({
    createimageRestoration: build.mutation({
      query: (data) => ({
        url: "/imageRestoration/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["imageRestoration"],
    }),

    deleteimageRestoration: build.mutation({
      query: (id) => ({
        url: `/imageRestoration/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["imageRestoration"],
    }),

    updateimageRestoration: build.mutation({
      query: ({ id, data }) => ({
        url: `/imageRestoration/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["imageRestoration"],
    }),

    getAllimageRestoration: build.query({
      query: () => ({
        url: "/imageRestoration",
      }),
      providesTags: ["imageRestoration"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateimageRestorationMutation,
  useGetAllimageRestorationQuery,
  useDeleteimageRestorationMutation,
  useUpdateimageRestorationMutation,
} = imageRestorationApi;
