import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "app/store";

export interface UserResponse {
  user: {
    _id?: string;
    name: string;
    email: string;
    login: string;
    role_id: string;
    departement_id: string;
    password: string; 
    api_token: string;
    photo: string;
    app_name: string;
    status: string;
    permissions: any[];
  };
}
export interface LoginRequest {
    login: string;
     password: string;
   }
   export interface UserToken {
    token: string;
   }
export const accountSlice = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/user/`,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth?.user?.api_token;
      console.log("user token", token)
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Account"],
  endpoints(builder) {
    return {
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (credentials) => ({
          url: "/login-user",
          method: "POST",
          body: credentials,
        }),
        invalidatesTags: ["Account"],
      }),
      getUser: builder.mutation<void, UserToken>({
        query(payload) {
          return {
            url: "/get-user-by-token",
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["Account"],
      }),
      fetchAllUsers: builder.query<UserResponse, void>({
        query: () => ({
          url: `/get-all-users`,
          method: "GET",
        }),
        providesTags: ["Account"],
      }),
    };
  },
});

export const { useLoginMutation, useGetUserMutation, useFetchAllUsersQuery } = accountSlice;
