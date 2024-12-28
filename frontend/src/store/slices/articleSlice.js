import { ARTICLE_URL, UPLOAD_URL } from "../../constants";
import { apiSlice } from './apiSlice'

export const articleSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        registerArticle: builder.mutation({
            query: (data) => ({
                url: ARTICLE_URL,
                method: 'POST',
                body: data,
            }),
        }),
        imageUpload: builder.mutation({
            query: (data) => ({
                url: UPLOAD_URL,
                method: 'POST',
                body: data,                
            })
        }),
        getAllArticles: builder.query({
            query: () => ({
                url: ARTICLE_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getArticleById: builder.query({
            query: (articleId) => ({
                url: `${ARTICLE_URL}/${articleId}`,
            }),
            keepUnusedDataFor: 5,
        }),
        updateArticleById: builder.mutation({
            query: (data) => ({
                url: `${ARTICLE_URL}/${data._id}`,
                method: 'PUT',
                body: data,
            }),
        }),
        deleteArticle: builder.mutation({
            query: (articleId) => ({
                url: `${ARTICLE_URL}/${articleId}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useRegisterArticleMutation,
    useImageUploadMutation,
    useGetAllArticlesQuery,
    useGetArticleByIdQuery,
    useUpdateArticleByIdMutation,
    useDeleteArticleMutation,
} = articleSlice;