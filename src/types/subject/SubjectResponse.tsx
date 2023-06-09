import { ClassroomResponseType } from "../classroom/ClassroomResponse";

export type SubjectResponseType = {
  id: string;
  name: string;
  description: string;
  isDeleted: boolean;
  createdDate: string;
  updatedDate: string;
  classrooms?: ClassroomResponseType[];
};
