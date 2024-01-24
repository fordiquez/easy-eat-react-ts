import React, { LegacyRef, ReactNode } from "react";
import { classNames } from "../helpers";
import { ErrorMessage, FieldValuesFromFieldErrors } from "@hookform/error-message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

type InputProps = {
    id: string;
    label: string;
    type?: "text" | "password" | "email" | "number" | "tel";
    required?: boolean;
    errors?: FieldValuesFromFieldErrors<object>;
    prependIcon?: ReactNode;
    appendIcon?: ReactNode;
};

export const Input = React.forwardRef(
    (
        { id, label, type = "text", required = true, errors, prependIcon, appendIcon, ...props }: InputProps,
        ref: LegacyRef<HTMLInputElement> | undefined
    ) => (
        <>
            <label
                htmlFor={id}
                className={classNames(
                    "mb-1 block cursor-pointer text-sm font-medium leading-6 dark:font-semibold",
                    errors && errors[id] ? "text-rose-500" : "text-slate-900 dark:text-slate-50"
                )}
            >
                {label}
            </label>
            <div className="relative">
                {prependIcon && (
                    <div className="pointer-events-none absolute inset-y-0 start-0 inline-flex items-center pl-3.5">
                        {prependIcon}
                    </div>
                )}
                <input
                    type={type}
                    className={classNames(
                        "block w-full rounded-md border-0 py-2 font-medium text-slate-900 shadow-sm ring-1 ring-inset transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:transition-none dark:bg-slate-800 dark:text-slate-50 sm:text-sm sm:leading-6",
                        prependIcon ? "pl-10" : "",
                        appendIcon ? "pr-10" : "",
                        errors && errors[id]
                            ? "ring-rose-500 focus:ring-rose-500"
                            : "ring-slate-300 focus:ring-emerald-500 dark:ring-slate-600 dark:focus:ring-emerald-400"
                    )}
                    id={id}
                    ref={ref}
                    required={required}
                    {...props}
                />
                {appendIcon && (
                    <div className="absolute inset-y-0 end-0 inline-flex select-none items-center pr-3.5">
                        {appendIcon}
                    </div>
                )}
            </div>
            {errors && (
                <ErrorMessage
                    errors={errors}
                    name={id}
                    render={({ message }) => (
                        <p className="mt-1 space-x-2 text-sm font-medium text-rose-500 dark:font-semibold">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <span>{message}</span>
                        </p>
                    )}
                />
            )}
        </>
    )
);
