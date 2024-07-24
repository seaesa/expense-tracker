import { createContext, useContext, useRef } from "react";
import { LoadingBarRef } from "react-top-loading-bar";
import LoadingBar from 'react-top-loading-bar'

type initialProps = {
  ref: React.MutableRefObject<LoadingBarRef | null>
}
const initialContext: initialProps = {
  ref: {
    current: null
  }
}
const LoadingProviderContext = createContext(initialContext)

type LoadingProviderProps = {
  children: React.ReactNode
}
const LoadingProvider: React.FC<LoadingProviderProps> = ({ children, ...props }) => {
  const loadingRef = useRef<LoadingBarRef | null>(null)
  const value: initialProps = {
    ref: loadingRef
  }
  return (
    <>
      <LoadingProviderContext.Provider {...props} value={value}>
        <LoadingBar color='#d3d3d3' ref={loadingRef} />
        {children}
      </LoadingProviderContext.Provider>
    </>
  )
}
export const useLoading = () => {
  const context = useContext(LoadingProviderContext)
  return context
}
export default LoadingProvider