const createExtraReducer = (func: any) => {
  return {
    [func.pending.type]: (state: any) => {
      state.loading = true;
    },
    [func.fulfilled.type]: (state: any, action: any) => {
      state.loading = true;
      state.data = action.payload;
    },
    [func.rejected.type]: (state: any, action: any) => {
      state.loading = true;
      state.error = action.payload;
    },
  };
};
export default createExtraReducer;
