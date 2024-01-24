import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

interface MyContextProps {
  dataForm: any;
  setDataForm: React.Dispatch<any>;
}
interface MyContextProviderProps {
  children: ReactNode;
}

const ContextDataForm = createContext<MyContextProps>({} as MyContextProps);

export const FormContext: FC<MyContextProviderProps> = ({ children }) => {
  const [dataForm, setDataForm] = useState<any>({});
  console.log("data==> form", dataForm);

  return (
    <ContextDataForm.Provider value={{ dataForm, setDataForm }}>
      {children}
    </ContextDataForm.Provider>
  );
};

export const useFormContext = () => useContext(ContextDataForm);
