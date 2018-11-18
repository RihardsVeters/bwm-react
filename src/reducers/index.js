import * as redux from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { rentalReducer, selectedRentalReducer } from './rental-reducer';
import { authReducer } from './auth-reducer';
import { rentalMapReducer } from './map-reducer';
import { userBookingsReducer } from './booking-reducer';

export const init = () => {
    const reducer = redux.combineReducers({
        rentals: rentalReducer,
        rental: selectedRentalReducer,
        form: formReducer,
        auth: authReducer,
        userBookings: userBookingsReducer,
        map: rentalMapReducer 
    });
    const store = redux.createStore(reducer,redux.applyMiddleware(thunk));

    return store;
} 