import React, { useReducer } from "react";
import { AppContextState } from "./context/AppContextState";
import { AppContextType, DefaultContextValue } from "./context/DefaultContextValue";
import { Action } from "./context/Actions";
import { AppReducer } from "./context/AppReducer";
import { AppContext } from "./context/AppContext";
import { Router } from "./router/Router";

export const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<AppContextType, Action>>(AppReducer, DefaultContextValue);

    const ContextState: AppContextState = {
        state,
        dispatch,
    };

    return (
        <AppContext.Provider value={ContextState}>
            <Router />
        </AppContext.Provider>
    );
};
