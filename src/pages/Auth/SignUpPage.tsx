import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faIdCard, faKey, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../../components/Input.tsx';
import { NavLink } from '../../components/NavLink.tsx';
import { PrimaryButton } from '../../components/PrimaryButton.tsx';

interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const schema = yup.object({
    first_name: yup.string().required().max(25).label('First Name'),
    last_name: yup.string().required().max(25).label('Last Name'),
    email: yup.string().email().required().max(25).label('Email'),
    password: yup.string().required().min(6).max(25).label('Password'),
    password_confirmation: yup
        .string()
        .required()
        .min(6)
        .max(25)
        .oneOf([yup.ref('password')], 'Passwords must match')
        .label('Password Confirmation'),
});

export const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'all' });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <>
            <div className='flex min-h-full flex-1 flex-col justify-center py-12'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-emerald-400'>
                        Join Us & Become a Member
                    </h2>
                </div>

                <div className='mx-auto mt-10 w-full max-w-sm'>
                    <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-2'>
                            <Input
                                label='First Name'
                                id='first_name'
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faIdCard}
                                        className='h-4 w-4 text-emerald-500 dark:text-emerald-400'
                                    />
                                }
                                {...register('first_name')}
                            />
                        </div>

                        <div className='mt-2'>
                            <Input
                                label='Last Name'
                                id='last_name'
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faIdCard}
                                        className='h-4 w-4 text-emerald-500 dark:text-emerald-400'
                                    />
                                }
                                {...register('last_name')}
                            />
                        </div>

                        <div className='mt-2'>
                            <Input
                                type='email'
                                label='Email'
                                id='email'
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className='h-4 w-4 text-emerald-500 dark:text-emerald-400'
                                    />
                                }
                                {...register('email')}
                            />
                        </div>

                        <div className='mt-2'>
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                label='Password'
                                id='password'
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faKey}
                                        className='h-4 w-4 text-emerald-500 dark:text-emerald-400'
                                    />
                                }
                                appendIcon={
                                    <FontAwesomeIcon
                                        icon={showPassword ? faLockOpen : faLock}
                                        className='h-4 w-4 cursor-pointer text-emerald-500 dark:text-emerald-400'
                                        title={`${showPassword ? 'Hide' : 'Show'} Password`}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                }
                                {...register('password')}
                            />
                        </div>

                        <div className='mt-2'>
                            <Input
                                type={showPasswordConfirmation ? 'text' : 'password'}
                                label='Password Confirmation'
                                id='password_confirmation'
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faKey}
                                        className='h-4 w-4 text-emerald-500 dark:text-emerald-400'
                                    />
                                }
                                appendIcon={
                                    <FontAwesomeIcon
                                        icon={showPasswordConfirmation ? faLockOpen : faLock}
                                        className='h-4 w-4 cursor-pointer text-emerald-500 dark:text-emerald-400'
                                        title={`${showPasswordConfirmation ? 'Hide' : 'Show'} Password Confirmation`}
                                        onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                    />
                                }
                                {...register('password_confirmation')}
                            />
                        </div>

                        <PrimaryButton type='submit' className='w-full'>
                            Sign Up
                        </PrimaryButton>
                    </form>

                    <div className='mt-4 inline-flex w-full flex-col items-center space-y-3 text-center text-sm xs:flex-row xs:justify-center xs:space-x-2 xs:space-y-0'>
                        <span className='text-emerald-600 dark:text-emerald-400'>Already a member?</span>
                        <NavLink to='/sign-in' className='inline-block w-fit'>
                            Log Into Your Account
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
