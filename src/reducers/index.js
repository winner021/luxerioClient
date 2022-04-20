import { combineReducers } from "redux";
import datarenderreducer from "./datarenderreducer";
import Clickreducer from "./Clickreducer";
import dataStoreReducer from "./dataStoreReducer";
import genderClickReducer from "./genderClickReducer";
export default combineReducers({
    datareducer:datarenderreducer,
    clickreducer:Clickreducer,
    dataStore:dataStoreReducer,
    selectedGender:genderClickReducer
    
})