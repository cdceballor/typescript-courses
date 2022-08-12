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