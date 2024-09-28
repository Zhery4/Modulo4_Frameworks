import { PropsWithChildren } from "react";

export const CenteredLayout = ({ children }: PropsWithChildren
) => {

    return (
        <div className="layout-centered">
            {children}
        </div>
    );
};