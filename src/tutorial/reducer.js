// reducer hook ( read action passed )
export const reducer = (state,action) => {
    // check if is 'ADD_ITEM' type
    if(action.type === 'ADD_ITEM') {
        // create new object (previous one + new payload)
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'item added',
        };
    }
    if(action.type === "NO_VALUE") {
        return {
            ...state, 
            isModalOpen: true,
            modalContent:'please enter value',
        }
    }
    if(action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payload);
        return {
            ...state,
            people: newPeople,
            isModalOpen:true,
            modalContent:'item removed',
        }
    }
    if(action.type === 'CLOSE_MODAL') {
        return {...state,isModalOpen:false}
    }
    throw new Error ('No matching action type');
};