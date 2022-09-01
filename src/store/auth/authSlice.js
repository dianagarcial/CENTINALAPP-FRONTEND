import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
      name: 'auth',
      initialState:{
         counter: 10,
      },
      reducers:{
           increment: (state) =>{
              state.counter += 1
            },
       }
})

export const { increment } = authSlice.actions