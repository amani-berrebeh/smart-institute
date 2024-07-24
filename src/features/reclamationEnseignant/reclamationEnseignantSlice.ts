import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Reclamation {

    _id:String,
    enseignantId: string,
    title:  String,
    description: String,
    response: String,
    status: String,
    createdAt:Date,
    updatedAt:Date
  }
  export const reclamationsEnseignantSlice = createApi({
    reducerPath: 'reclamationsEnseignantApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.REACT_APP_API_URL}/reclamation-enseignant/`, // Adjust endpoint base URL
    }),
    tagTypes: ['Reclamations'],
    endpoints(builder) {
      return {
        fetchReclamationsEnseignant: builder.query<Reclamation[], void>({
          query() {
            return 'get-all-reclamations';
          },
          providesTags: ['Reclamations'],
        }),
        fetchReclamationEnseignantById: builder.query<Reclamation[], void>({
            query(_id) {
              return `get-reclamation/${_id}`;
            },
            providesTags: ['Reclamations'],
          }),
        addReclamationEnseignant: builder.mutation<void, Partial<Reclamation>>({
          query(reclamation) {
            return {
              url: 'add-reclamation',
              method: 'POST',
              body: reclamation,
            };
          },
          invalidatesTags: ['Reclamations'],
        }),
        updateReclamationEnseignant: builder.mutation<void, Reclamation>({
          query(reclamation) {
            const { _id, ...rest } = reclamation;
            return {
              url: `edit-reclamation/${_id}`,
              method: 'PUT',
              body: rest,
            };
          },
          invalidatesTags: ['Reclamations'],
        }),
        deleteReclamationEnseignant: builder.mutation<void, string>({
          query(_id) {
            return {
              url: `delete-reclamation/${_id}`,
              method: 'DELETE',
            };
          },
          invalidatesTags: ['Reclamations'],
        }),
      };
    },
  });
  
  export const {
    useFetchReclamationsEnseignantQuery,
    useFetchReclamationEnseignantByIdQuery,
    useAddReclamationEnseignantMutation,
    useUpdateReclamationEnseignantMutation,
    useDeleteReclamationEnseignantMutation,
  } = reclamationsEnseignantSlice;