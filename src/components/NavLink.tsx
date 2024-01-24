import { classNames } from "../helpers";
import React, { ReactNode, Ref } from "react";
import { NavLink as ReactNavLink } from "react-router-dom";

type NavLinkProps = {
    to: string;
    children: ReactNode;
    className?: string | null;
    button?: boolean;
    outlined?: boolean;
    end?: boolean;
};

export const NavLink = React.forwardRef(
    (
        { to, children, className = null, button = false, outlined = false, end = true }: NavLinkProps,
        ref: Ref<HTMLAnchorElement> | undefined
    ) => (
        <ReactNavLink
            to={to}
            ref={ref}
            className={classNames(
                "group text-sm font-semibold hover:opacity-70 hover:transition-all hover:duration-500 focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500 dark:focus-visible:outline-emerald-400",
                button || outlined ? " rounded-lg px-4 py-2" : "",
                button && !outlined ? "bg-emerald-500 dark:bg-emerald-400" : "",
                outlined ? "ring-1 ring-emerald-500 dark:ring-emerald-400" : "",
                className ?? ""
            )}
            end={end}
        >
            {({ isActive }) => (
                <>
                    <span
                        className={classNames(
                            "transition-all duration-500",
                            !button || (button && outlined)
                                ? "group-hover:text-emerald-500 dark:group-hover:text-emerald-400"
                                : "",
                            !isActive && (!button || (button && outlined))
                                ? "text-gray-900 dark:text-emerald-50"
                                : isActive && (!button || (button && outlined))
                                  ? "text-emerald-500 dark:text-emerald-400"
                                  : "text-emerald-50"
                        )}
                    >
                        {children}
                    </span>
                    <span
                        className={classNames(
                            "block h-0.5 transition-all duration-500 group-hover:max-w-full",
                            isActive ? "w-full" : "max-w-0",
                            button && !outlined ? "bg-emerald-50" : "bg-emerald-500 dark:bg-emerald-400"
                        )}
                    ></span>
                </>
            )}
        </ReactNavLink>
    )
);
