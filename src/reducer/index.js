import {combineReducers} from '@reduxjs/toolkit';
import profileReducer from '../slices/profileSlice';
import cartReducer from '../slices/cartSlice';
import authReducer from "../slices/authSlice";
import courseReducer from "../slices/courseSlice";
import viewCourseReducer from '../slices/viewCourseSlice';

const rootReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer
})

export default rootReducer