import { createContext, useRef } from "react";
import { LoadingBarRef } from "react-top-loading-bar";

const initialContext = {
  ref: null
}
const LoadingProviderContext = createContext(initialContext)

type LoadingProviderProps = {
  children: React.ReactNode
}
const LoadingProvider: React.FC<LoadingProviderProps> = ({ children, ...props }) => {
  const loadingRef = useRef<LoadingBarRef>(null)
  const value = {
    ref: loadingRef
  }
  return (
    <>
      <LoadingProviderContext.Provider {...props} value={value}>
        {children}
      </LoadingProviderContext.Provider>
    </>
  )
}
export default LoadingProvider