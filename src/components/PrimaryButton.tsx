import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { classNames } from '../helpers';

type PrimaryButtonProps = {
    children: ReactNode;
    type?: 'button' | 'submit';
    className?: string | null;
    loading?: boolean;
};

export const PrimaryButton = ({ children, type = 'button', className = null, loading = false }: PrimaryButtonProps) => (
    <button
        type={type}
        className={classNames(
            'inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 font-medium text-slate-50 transition-all duration-300 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 focus-visible:transition-none disabled:cursor-not-allowed disabled:opacity-70 dark:focus-visible:outline-emerald-400',
            className ?? '',
            loading ? 'animate-pulse' : ''
        )}
        disabled={loading}
    >
        {loading && <FontAwesomeIcon icon={faCircleNotch} className="mr-2 animate-spin" />}
        {children}
    </button>
);
