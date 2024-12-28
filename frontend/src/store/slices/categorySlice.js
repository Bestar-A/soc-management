import { CATEGORY_URL } from "../../constants";
import { apiSlice } from './apiSlice'

export const categorySlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerCategory: builder.mutation({
            query: (data) => ({
                url: CATEGORY_URL,
                method: 'POST',
                body: data,
            }),
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: CATEGORY_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        deleteCategory: builder.mutation({
            query: (categoryId) => ({
                url: CATEGORY_URL,
                method: 'DELETE',
                body: categoryId,
            }),
        }),
    }),
});

export const {
    useRegisterCategoryMutation,
    useDeleteCategoryMutation,
    useGetAllCategoriesQuery,
} = categorySlice;