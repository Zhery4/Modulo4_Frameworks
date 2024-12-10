import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from "react";

interface OrganizationContextType {
  organization: string;
  setOrganization: (org: string) => void;
}

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
