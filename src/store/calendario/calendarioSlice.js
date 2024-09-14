import { createSlice } from '@reduxjs/toolkit';

export const calendarioSlice = createSlice({
    name: 'calendario',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
        // }
    },
    reducers: {
        // para desabilitar el boton cuando se crea la nota.
        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        // crear nueva entrada cuando tocas el boton flotante..
       addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
       },
       // saber cual es la nota activa.
       setActiveNote: ( state, action ) => {
           state.active = action.payload; 
       },
       // cargar las notas para establecerlas
       setNotes: ( state, action ) => {
            state.notes = action.payload;
       },
       // para grabar las notas
       setSaving: ( state ) => {

       },
       // actualizar una nota.
       updateNote: ( state, action ) => {

       },
       // eliminar notas.
       deleteNoteById: () => {

       },

   }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById, 
} = calendarioSlice.actions;