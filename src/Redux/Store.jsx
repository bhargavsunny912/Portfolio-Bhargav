import { configureStore } from "@reduxjs/toolkit";
import Viewreducer from "./ViewSlice";

export const store=configureStore({
    reducer:{
        viewstatus:Viewreducer
    }
});