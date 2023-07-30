import {IStudent} from '../model/student';

export interface IStudentState {
  students: IStudent[];
  addStudent: (student: IStudent) => void;
  removeStudent: (studentId: string) => void;
  updateStudent: (student: IStudent) => void;
}

export const createStudentSlice = (set: any, get: any) => ({
  students: [],
  addStudent: (student: IStudent) => {
    return set((state: IStudentState) => ({
      students: [...state.students, student],
    }));
  },
  removeStudent: (studentId: string) => {
    const _student: IStudent[] = get().students;
    const allStudent = _student.filter(item => item.id !== studentId);
    return set({students: [...allStudent]});
  },
  updateStudent: (student: IStudent) => {
    let _student: IStudent[] = get().students;
    const index = _student.findIndex(item => item.id === student?.id);
    if (index > -1) {
      _student[index] = student;
      return set({students: [..._student]});
    }
  },
});
