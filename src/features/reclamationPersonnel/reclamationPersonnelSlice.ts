import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Reclamation {

    _id:String,
    personnelId: string,
    title:  String,
    description: String,
    response: String,
    status: String,
    createdAt:Date,
    updatedAt:Date
  }
  export const reclamationsPersonnelSlice = createApi({
    reducerPath: 'reclamationsPersonnelApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.REACT_APP_API_URL}/reclamation-personnel/`, // Adjust endpoint base URL
    }),
    tagTypes: ['Reclamations'],
    endpoints(builder) {
      return {
        fetchReclamationsPersonnel: builder.query<Reclamation[], void>({
          query() {
            return 'get-all-reclamations';
          },
          providesTags: ['Reclamations'],
        }),
        fetchReclamationPersonnelById: builder.query<Reclamation[], void>({
            query(_id) {
              return `get-reclamation/${_id}`;
            },
            providesTags: ['Reclamations'],
          }),
        addReclamationPersonnel: builder.mutation<void, Partial<Reclamation>>({
          query(reclamation) {
            return {
              url: 'add-reclamation',
              method: 'POST',
              body: reclamation,
            };
          },
          invalidatesTags: ['Reclamations'],
        }),
        updateReclamationPersonnel: builder.mutation<void, Reclamation>({
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
        deleteReclamationPersonnel: builder.mutation<void, string>({
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
    useFetchReclamationsPersonnelQuery,
    useFetchReclamationPersonnelByIdQuery,
    useAddReclamationPersonnelMutation,
    useUpdateReclamationPersonnelMutation,
    useDeleteReclamationPersonnelMutation,
  } = reclamationsPersonnelSlice;