import type { FocusScopeProps } from 'react-aria';

import { createContext, useContext } from 'react';
import { FocusScope } from 'react-aria';

type FocusTrapProps = Omit<FocusScopeProps, 'contain'>;

type FocusTrapContextType = {
  contain: boolean;
};

const FocusTrapContext = createContext<FocusTrapContextType>({
  contain: true,
});

const useFocusTrapContext = () => useContext(FocusTrapContext);

const FocusTrap = (props: FocusTrapProps) => {
  const { contain } = useFocusTrapContext();

  return <FocusScope contain={contain} {...props} />;
};

export { FocusTrap, FocusTrapContext, useFocusTrapContext };
export type { FocusTrapProps, FocusTrapContextType };
