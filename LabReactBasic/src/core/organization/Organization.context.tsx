import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from "react";

// Define the context type
interface OrganizationContextType {
  organization: string;
  setOrganization: (org: string) => void;
}

// Create the context with an initial value
const OrganizationContext = createContext<OrganizationContextType>({
  organization: "lemoncode",
  setOrganization: () => {},
});

export const OrganizationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [organization, setOrganization] = useState("lemoncode");

  const contextValue = useMemo(
    () => ({ organization, setOrganization }),
    [organization]
  );

  return (
    <OrganizationContext.Provider value={contextValue}>
      {children}
    </OrganizationContext.Provider>
  );
};

export const useOrganization = () => useContext(OrganizationContext);
