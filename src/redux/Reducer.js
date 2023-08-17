const { createSlice } = require("@reduxjs/toolkit");

const initialState =[];

const addTodoReducer =createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            state.push(action.payload)
            return state
        },

        //remove Todos

        removeTodos : (state,action)=>{
            return state.filter(item => item.id !== action.payload)
        },

        //Update Todos

        updateTodos : (state,action)=>{
            return state.map(todo =>{
                if(todo.id===action.payload.id){
                    return{
                        ...todo,
                        item:action.payload.item,

                    }
                }
                                    return todo;

            })
        },

       // Complete

       completeTodos :(state,action)=>{

        return state.map(todo =>{
            if(todo.id===action.payload){
                return{
                    ...todo,
                    completed:true,

                };
            }
                                return todo;

        });
       }


    },

})
export const{addTodos,removeTodos,updateTodos,completeTodos}=addTodoReducer.actions;
export const reducer = addTodoReducer.reducer