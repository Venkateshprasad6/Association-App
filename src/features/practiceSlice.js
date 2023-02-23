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
    //actionCrators
    addDistricts: (state, { payload }) => (state = { ...state , districts: addDistrict(payload) }),
    addCities: (state, { payload }) => (state = { ...state , cities: payload}),
  },
});

function addDistrict(data) {
    return initialState.districts.concat(data)
}

export const { addDistricts, addCities } = practiceSlice.actions;

export default practiceSlice.reducer;
