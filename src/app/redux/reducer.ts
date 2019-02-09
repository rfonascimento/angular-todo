export const todos = (state = [], action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_TODO':
          return [...state, action.payload];
        default:
          return state;
      }
} 