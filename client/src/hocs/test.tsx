import { ComponentType, useState } from 'react';

interface FormValues {
  [key: string]: string;
}

interface WithFormProps {
  onSubmit: (values: FormValues) => void;
}

export default function useFormCustom<T extends WithFormProps>(WrappedComponent: ComponentType<T>) {
  const WithForm: React.FC<T> = (props) => {
    const [formValues, setFormValues] = useState<FormValues>({});
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      props.onSubmit(formValues);
    };

    return (
      <WrappedComponent
        {...props}
        formValues={formValues}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />
    );
  };
  return WithForm
}