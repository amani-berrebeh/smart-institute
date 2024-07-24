import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Demande {

    _id:String,
    studentId: string,
    title:  String,
    description: String,
    piece_demande: String,
    langue: String,
    nombre_copie: String,
    response: String,
    status: String,
    createdAt:Date,
    updatedAt:Date
  }
  export const demandeEtudiantSlice = createApi({
    reducerPath: 'demandeEtudiantApi',
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.REACT_APP_API_URL}/demande-etudiant/`, // Adjust endpoint base URL
    }),
    tagTypes: ['Demandes'],
    endpoints(builder) {
      return {
        fetchDemandeEtudiant: builder.query<Demande[], void>({
          query() {
            return 'get-all-demande-etudiants';
          },
          providesTags: ['Demandes'],
        }),
        fetchDemandeEtudiantById: builder.query<Demande[], void>({
            query(_id) {
              return `get-demande-etudiant/${_id}`;
            },
            providesTags: ['Demandes'],
          }),
        addDemandeEtudiant: builder.mutation<void, Partial<Demande>>({
          query(demande) {
            return {
              url: 'add-demande-etudiant',
              method: 'POST',
              body: demande,
            };
          },
          invalidatesTags: ['Demandes'],
        }),
        updateDemandeEtudiant: builder.mutation<void, Demande>({
          query(reclamation) {
            const { _id, ...rest } = reclamation;
            return {
              url: `edit-demande-etudiant/${_id}`,
              method: 'PUT',
              body: rest,
            };
          },
          invalidatesTags: ['Demandes'],
        }),
        deleteDemandeEtudiant: builder.mutation<void, string>({
          query(_id) {
            return {
              url: `delete-demande-etudiant/${_id}`,
              method: 'DELETE',
            };
          },
          invalidatesTags: ['Demandes'],
        }),
      };
    },
  });
  
  export const {
    useFetchDemandeEtudiantQuery,
    useFetchDemandeEtudiantByIdQuery,
    useAddDemandeEtudiantMutation,
    useUpdateDemandeEtudiantMutation,
    useDeleteDemandeEtudiantMutation,
  } = demandeEtudiantSlice;