export interface RootState {
  auth: {
    token: string | null,
    userId: number | null
  },
  board: {
    lists: []
  }
};

// 仮
export interface TodoState {
  todo: any
};

