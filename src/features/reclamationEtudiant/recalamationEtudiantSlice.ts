import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Reclamation {

    _id:String,
    studentId: string,
    title:  String,
    description: String,
    response: String,
    status: String,
    createdAt:Date,
    updatedAt:Date
  }
  export const reclamationsEtudiantSlice = createApi({
    reducerPath: 'reclamationsEtudiantApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.REACT_APP_API_URL}/reclamation-etudiant/`, // Adjust endpoint base URL
    }),
    tagTypes: ['Reclamations'],
    endpoints(builder) {
      return {
        fetchReclamations: builder.query<Reclamation[], void>({
          query() {
            return 'get-all-reclamations';
          },
          providesTags: ['Reclamations'],
        }),
        fetchReclamationById: builder.query<Reclamation[], void>({
            query(_id) {
              return `get-reclamation/${_id}`;
            },
            providesTags: ['Reclamations'],
          }),
        addReclamation: builder.mutation<void, Partial<Reclamation>>({
          query(reclamation) {
            return {
              url: 'add-reclamation',
              method: 'POST',
              body: reclamation,
            };
          },
          invalidatesTags: ['Reclamations'],
        }),
        updateReclamation: builder.mutation<void, Reclamation>({
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
        deleteReclamation: builder.mutation<void, string>({
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
    useFetchReclamationsQuery,
    useFetchReclamationByIdQuery,
    useAddReclamationMutation,
    useUpdateReclamationMutation,
    useDeleteReclamationMutation,
  } = reclamationsEtudiantSlice;