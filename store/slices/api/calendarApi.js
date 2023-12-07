import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const calendarApi = createApi({
    reducerPath: "calendarApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3010/api/dates"}),
    tagTypes: ['Days'],
    endpoints: (build) => ({
        getMonth: build.query({
            query: ({userId, month}) => `${userId}/${month}`,
            providesTags: ['Days']
        }), 
        createDayRecordIfNotCreated: build.mutation({
            query: ({userId, month, body}) => ({
                url: `${userId}/${month}/days/add`,
                method: "POST",
                body
            }),
            invalidatesTags: ['Days']
        })
    })
})

export const {useCreateDayRecordIfNotCreatedMutation} = calendarApi;
export const {useLazyGetMonthQuery} = calendarApi;