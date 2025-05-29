export type Member = {
  id: number;
  email: string;
};

export type MembersState = {
  members: Member[];
};

export type MembersAction =
  | { type: "SET_MEMBERS"; payload: Member[] }
  | { type: "ADD_MEMBER"; payload: Member }
  | { type: "REMOVE_MEMBER"; payload: number };