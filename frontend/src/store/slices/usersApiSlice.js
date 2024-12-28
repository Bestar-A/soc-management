import { USERS_URL } from "../../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: USERS_URL,
                method: 'POST',
                body: data,
            }),
        }),
        updateAdmin: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }),
        getAdmin: builder.query({
            query: () => ({
                url: `${USERS_URL}/getadmin`
            }),
            keepUnusedDataFor: 5,
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',                
            }),
        }),
    }),
});

export const { 
    useLoginMutation,
    useUpdateAdminMutation,
    useLogoutMutation,
    useRegisterMutation,
    useGetAdminQuery,
 } = usersApiSlice;