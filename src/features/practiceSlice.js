import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    districts: [
        {
            value: 'TUP',
            label: 'Tirupur'
        },
        {
            value: 'CMB',
            label: 'Coimbatore'
        },
        {
            value: 'ERD',
            label: 'Erode'
        },
    ],

    cities: [
        {
            value: 'AVN',
            label: 'Avinashi'
        },
        {
            value: 'PLD',
            label: 'Palladam'
        },
        {
            value: 'UMP',
            label: 'Udumalai Pettai'
        },
    ],
    
};

export const practiceSlice = createSlice({
  name: "practice",
  initialState,
  reducers: {
    addDistricts: (state, { payload }) => (state = { ...state, districts: addDistrict(state,payload) }),
    addCities: (state, { payload }) => (state = { ...state, cities: payload}),
  },
});


function addDistrict(state,data) {
    return state.districts.concat(data)
}

export const { addDistricts, addCities } = practiceSlice.actions;
export default practiceSlice.reducer;
