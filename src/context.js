import { createContext, useContext, useState } from "react";
import { formJson } from "./data";

const AppContext = createContext({
  form: [],
  addForm: () => null
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = ({ children }) => {
  const [form, setForm] = useState([formJson]);
  
  const addForm = () => {
    const tempForm = [...form];
    tempForm.push(formJson);
    setForm(tempForm);
  };
  console.log(form);
  return (
    <AppContext.Provider value={{ form, addForm }}>
      {children}
    </AppContext.Provider>
  );
};
