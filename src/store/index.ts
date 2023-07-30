import { create } from 'zustand'
import { IStudentState, createStudentSlice } from './studentSlice'
import { ISubjectState, createSubjectSlice } from './subjectSlice'

type IStoreSlices = IStudentState & ISubjectState 

export const useBoundStore = create<IStoreSlices>((...a) => ({
    ...createStudentSlice(...a),
    ...createSubjectSlice(...a),
  }))