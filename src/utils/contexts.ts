import { createContext, Dispatch, SetStateAction } from 'react';

type ClassItem = {
  I_A: string;
  I_B: string;
  II_A: string;
  II_B: string;
  III_A: string;
  III_B: string;
  IV_A: string;
  IV_B: string;
  V_A: string;
  V_B: string;
  VI: string;
};

type ClassContext = {
  class: ClassItem;
  setClass: Dispatch<SetStateAction<ClassItem>>;
};

export const PageContext = createContext<ClassContext>({
  class: {
    I_A: '',
    I_B: '',
    II_A: '',
    II_B: '',
    III_A: '',
    III_B: '',
    IV_A: '',
    IV_B: '',
    V_A: '',
    V_B: '',
    VI: '',
  },
  setClass: () => {},
});