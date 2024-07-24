const formHandle: React.FC = (WrapComponent: React.ComponentType<any>) => {
  const WithForm: React.FC = () => {
    return (
      <WrapComponent />
    )
  }
  return WithForm
}
export default formHandle