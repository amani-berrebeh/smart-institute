import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Niveau {
  _id: string;
  name_niveau_ar: string,
  name_niveau_fr: string,
  abreviation: string,
}
export const niveauSlice = createApi({
  reducerPath: "Niveau",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/niveau-classe/`,
  }),
  tagTypes: ["Niveau"],
  endpoints(builder) {
    return {
      fetchNiveaux: builder.query<Niveau[], number | void>({
        query() {
          return `get-all-niveau-classe`;
        },
        providesTags: ["Niveau"],
      }),

      addNiveau: builder.mutation<void, Niveau>({
        query(payload) {
          return {
            url: "/create-niveau-classe",
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["Niveau"],
      }),
      updateNiveau: builder.mutation<void, Niveau>({
        query: ({ _id, ...rest }) => ({
          url: `/update-niveau-classe/${_id}`,
          method: "PUT",
          body: rest,
        }),
        invalidatesTags: ["Niveau"],
      }),
      deleteNiveau: builder.mutation<void, string>({
        query: (_id) => ({
          url: `delete-niveau-classe/${_id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Niveau"],
      }),
    };
  },
});

export const {
   useAddNiveauMutation,
   useDeleteNiveauMutation,
   useFetchNiveauxQuery,
   useUpdateNiveauMutation
} = niveauSlice;