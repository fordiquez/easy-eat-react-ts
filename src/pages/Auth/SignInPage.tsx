import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../../components/Input.tsx';
import { PrimaryButton } from '../../components/PrimaryButton.tsx';
import { NavLink } from '../../components/NavLink.tsx';

export interface IFormValues {
    email: string;
    password: string;
}

export const SignInPage = () => {
    const { register, handleSubmit, watch } = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data));
    };
    console.log(watch('email')); // watch input value by passing the name of it
    return (
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-emerald-400'>
                    Sign in to your account
                </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-2'>
                        <Input label='Email' id='email' {...register('email', { required: true })} required />
                    </div>

                    <div className='mt-2'>
                        <Input label='Password' id='password' {...register('password', { required: true })} required />
                    </div>

                    <PrimaryButton type='submit' className='w-full'>
                        Sign In
                    </PrimaryButton>
                </form>

                <p className='mt-10 inline-flex w-full justify-center space-x-2 text-center text-sm'>
                    <span className='text-emerald-500 dark:text-emerald-400'>Not a member?</span>
                    <NavLink to='/sign-up' className='block w-fit'>
                        Start a 14 day free trial
                    </NavLink>
                </p>
            </div>
        </div>
    );
};
