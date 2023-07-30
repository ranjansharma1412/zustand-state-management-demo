import {ISubject} from '../model/subject';

export interface ISubjectState {
  subjects: ISubject[];
  addSubject: (Subject: ISubject) => void;
  removeSubject: (subjectId: string) => void;
  updateSubject: (Subject: ISubject) => void;
}

export const createSubjectSlice = (set: any, get: any) => ({
  subjects: [],
  addSubject: (subject: ISubject) => {
    return set((state: ISubjectState) => ({
      subjects: [...state.subjects, subject],
    }));
  },
  removeSubject: (subjectId: string) => {
    const _subject: ISubject[] = get().subjects;
    const allSubject = _subject.filter(item => item.id !== subjectId);
    return set({subjects: [...allSubject]});
  },
  updateSubject: (subject: ISubject) => {
    let _subject: ISubject[] = get().subjects;
    const index = _subject.findIndex(item => item.id === subject?.id);
    if (index > -1) {
      _subject[index] = subject;
      return set({subjects: [..._subject]});
    }
  },
});
