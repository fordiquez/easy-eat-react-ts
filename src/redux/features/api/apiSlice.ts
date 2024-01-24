import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define our single API slice object
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_BASE_API_URL
    }),
    endpoints: (builder) => ({
        authenticate: builder.mutation({
            query: (credentials) => ({ url: '/accounts/authenticate', method: 'POST', body: credentials })
        })
    })
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useAuthenticateMutation } = apiSlice;
