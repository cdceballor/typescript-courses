export interface Sub{
  nick: string;
  avatar: string;
  subMonths: number;
  description?: string;
}

export interface AppState{
    subs: Sub[];
  }

  export interface FormState{
  newSubs: Sub;
}

export type FormReducerAction={
  type: "change_value",
  payload: {
    inputName: string
    inputValue: string
  }
} | {
  type: "clear"
}

export type FetchPeople = Array<Sub>
