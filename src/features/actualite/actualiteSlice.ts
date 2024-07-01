import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Actualite {
id:number,
titre:String,
adresse:String,
description:String,
link:String,
date:String
}
export const ActualiteSlice = createApi({
    reducerPath: "Actualite",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:500/api/",
    }),
    tagTypes: ["Actualite"],
    endpoints(builder) {
      return {
        fetchActualite: builder.query<Actualite[], number | void>({
          query() {
            return `/getAllActualite`;
          },
          providesTags: ["Actualite"],
        }),
        // fetchActualitesByCompany: builder.query<Actualite[], { id_corporate: string }>({
        //   query({ id_corporate }) {
        //     return {
        //       url: `/getActualitesByIdCompany`,
        //       method: "POST", 
        //       body: { id_corporate }, 
        //     };
        //   },
        //   providesTags: ["Actualite"],
        // }),
        addActualite: builder.mutation<void, Actualite>({
          query(payload) {
            return {
              url: "/newActualite",
              method: "POST",
              body: payload,
            };
          },
          invalidatesTags: ["Actualite"],
        }),
        // updateActualite: builder.mutation<void, Actualite>({
        //   query: ({ _id, ...rest }) => ({
        //     url: `/updateActualite/${_id}`,
        //     method: "PUT",
        //     body: rest,
        //   }),
        //   invalidatesTags: ["Actualite"],
        // }),
        deleteActualite: builder.mutation<void, number>({
          query: (_id) => ({
            url: `deleteActualite/${_id}`,
            method: "DELETE",
          }),
          invalidatesTags: ["Actualite"],
        }),
      };
    },
  });
  
  export const {
    useAddActualiteMutation,
    useFetchActualiteQuery,
    useDeleteActualiteMutation,
    // useUpdateActualiteMutation,
    // useFetchActualitesByCompanyQuery
  } = ActualiteSlice;