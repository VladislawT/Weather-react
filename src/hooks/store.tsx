import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDispatch, Rootstate } from "../store/store"

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCastomSelector: TypedUseSelectorHook<Rootstate> = useSelector;
