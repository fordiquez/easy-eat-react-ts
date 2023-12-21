import React, { LegacyRef } from 'react';

type InputProps = {
    id: string;
    label: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'tel';
    required?: boolean;
};

export const Input = React.forwardRef(
    (
        { id, label, type = 'text', required = true, ...props }: InputProps,
        ref: LegacyRef<HTMLInputElement> | undefined,
    ) => (
        <>
            <label
                htmlFor={id}
                className='mb-1 block cursor-pointer text-sm font-medium leading-6 text-slate-900 dark:text-slate-50'
            >
                {label}
            </label>
            <input
                type={type}
                className='block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 transition-all duration-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500 focus:transition-none dark:bg-slate-800 dark:text-slate-50 dark:ring-slate-600 dark:focus:ring-emerald-400 sm:text-sm sm:leading-6'
                id={id}
                ref={ref}
                required={required}
                {...props}
            />
        </>
    ),
);
