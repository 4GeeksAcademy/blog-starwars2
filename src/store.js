export const initialStore = {
  people: [],
  vehicles: [],
  planets: [],
  favorites: []
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "SET_PEOPLE":
      return { ...state, people: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "ADD_FAVORITE":
      if (state.favorites.find(f => f.uid === action.payload.uid && f.type === action.payload.type)) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return { ...state, favorites: state.favorites.filter(f => f.uid !== action.payload) };
    default:
      return state;
  }
};
