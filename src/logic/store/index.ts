// import create from 'zustand';
// import { devtools } from 'zustand/middleware'
// import { createUserSlice, UserSlice } from './slices/createUserSlice';

import { create } from "zustand";

import { CoursesSlice, createCoursesSlice } from './slices/createCoursesSlice';
import { UserSlice, createUserSlice } from './slices/createUserSlice';

export const useCoursesStore = create<CoursesSlice & UserSlice>(
    (...a) => ({
        ...createUserSlice(...a),
        ...createCoursesSlice(...a),
    }),
)