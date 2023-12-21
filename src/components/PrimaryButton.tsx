import { classNames } from '../helpers';
import { ReactNode } from 'react';

type PrimaryButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit';
    className?: string | null;
};

export const PrimaryButton = ({ children, type = 'button', className = null }: PrimaryButtonProps) => (
    <button
        type={type}
        className={classNames(
            'inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-50 transition-all duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 focus-visible:transition-none dark:focus-visible:outline-emerald-400',
            className ?? '',
        )}
    >
        {children}
    </button>
);
