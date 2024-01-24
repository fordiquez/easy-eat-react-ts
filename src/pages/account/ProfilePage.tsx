import { useAppSelector } from '../../redux/hooks.ts';
import { selectAccount, selectAvatar, selectFullName } from '../../redux/features/account/accountSlice.ts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export const ProfilePage = () => {
    const account = useAppSelector(selectAccount);
    const accountFullName = useAppSelector(selectFullName);
    const accountAvatar = useAppSelector(selectAvatar);
    const navigate = useNavigate();

    useEffect(() => {
        if (!account.jwtToken) {
            navigate('/sign-in');
        }
    }, [account.jwtToken, navigate]);

    if (!account.jwtToken) {
        return <FontAwesomeIcon icon={faCircleNotch} />;
    }

    return (
        <div className='mt-12 rounded-lg bg-slate-100 p-4 shadow-lg dark:bg-slate-900 sm:p-8'>
            <div className='px-4 sm:px-0'>
                <h3 className='text-2xl font-semibold leading-7 text-slate-900 dark:text-slate-50'>My Profile</h3>
                <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-300'>
                    Profile details information.
                </p>
            </div>
            <div className='mt-6 border-t border-slate-200 dark:border-slate-800'>
                <dl className='divide-y divide-slate-200 dark:divide-slate-800'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 text-slate-900 dark:text-slate-50'>Full name</dt>
                        <dd className='mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:col-span-2 sm:mt-0'>
                            {accountFullName}
                        </dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='text-sm font-medium leading-6 text-slate-900 dark:text-slate-50'>
                            Email address
                        </dt>
                        <dd className='mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:col-span-2 sm:mt-0'>
                            {account.email}
                        </dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                        <dt className='flex items-center text-sm font-medium leading-6 text-slate-900 dark:text-slate-50'>
                            Avatar
                        </dt>
                        <dd className='mt-1 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:col-span-2 sm:mt-0'>
                            <img
                                className='h-20 w-20 rounded-full'
                                src={accountAvatar}
                                alt={accountFullName}
                                title={accountFullName}
                            />
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};
