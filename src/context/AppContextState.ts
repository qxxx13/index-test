import { AppContextType } from "./DefaultContextValue";
import { Action } from "./Actions";
import { Dispatch } from "react";

export type AppContextState = {
    state: AppContextType;
    dispatch: Dispatch<Action>;
};
