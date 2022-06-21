import { combineReducers } from "redux";
import datarenderreducer from "./datarenderreducer";
import Clickreducer from "./Clickreducer";
import dataStoreReducer from "./dataStoreReducer";
import genderClickReducer from "./genderClickReducer";
import Authreducer from "./Authreducer";
import cartDataReducer from "./cartDataReducer";
import cartItemDisplayReducer from "./cartItemDisplayReducer";
import productQuantityedit from "./productQuantityedit";
import udatedQuantityflag from "./udatedQuantityflag";
import totalPriceReducer from "./totalPriceReducer";
import wishlistreducer from "./wishlistreducer";
import wishlistdata from "./wishlistdata";
import CartDelete from "./CartDelete";
import wishlistdeletereducer from "./wishlistdeletereducer";
import {reducer as formReducer} from 'redux-form'
import reviewDataFetchReducer from "./reviewDataFetchReducer";
import reviewDataEnter from "./reviewDataEnter";

export default combineReducers({

    datareducer:datarenderreducer,
    clickreducer:Clickreducer,
    dataStore:dataStoreReducer,
    selectedGender:genderClickReducer,
    Authstate:Authreducer,
    cartdata:cartDataReducer,
    quantity:productQuantityedit,
    cartitems:cartItemDisplayReducer ,
    udatedQuantityflag:udatedQuantityflag,
    totalPrice:totalPriceReducer,
    wishlist:wishlistreducer,
    wishlistdata:wishlistdata,
    CartDelete:CartDelete,
    wishlistdelete:wishlistdeletereducer,
    form:formReducer,
    review:reviewDataFetchReducer,
    reviewDataFlag:reviewDataEnter,
    
})