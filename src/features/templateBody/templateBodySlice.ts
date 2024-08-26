import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TemplateBody {
  title: string;
  body: string;
  langue: string;
  intended_for: string
}
  export const templateBodySlice = createApi({
    reducerPath: 'templateBody',
    baseQuery: fetchBaseQuery({
      baseUrl: `${process.env.REACT_APP_API_URL}/template-body/`,
    }),
    tagTypes: ['TemplateBody'],
    endpoints(builder) {
      return {
        fetchTemplateBody: builder.query<TemplateBody[], void>({
          query() {
            return 'get-all-template-body';
          },
          providesTags: ['TemplateBody'],
        }),
        addNewTemplateBody: builder.mutation<void, TemplateBody>({
          query(payload) {
            return {
              url: 'create-template-body',
              method: 'POST',
              body: payload,
            };
          },
          invalidatesTags: ['TemplateBody'],
        }),
      };
    },
  });
  
  export const {
   useAddNewTemplateBodyMutation,
   useFetchTemplateBodyQuery
  } = templateBodySlice;