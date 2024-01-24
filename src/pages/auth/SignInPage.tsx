import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input.tsx';
import { NavLink } from '../../components/NavLink.tsx';
import { PrimaryButton } from '../../components/PrimaryButton.tsx';
import { useAppDispatch } from '../../redux/hooks.ts';
import { useAuthenticateMutation } from '../../redux/features/api/apiSlice.ts';
import { AccountState, setUser } from '../../redux/features/account/accountSlice.ts';
import { useNavigate } from 'react-router-dom';

interface FormData {
    email: string;
    password: string;
}

const schema = yup.object({
    email: yup.string().email().required().max(25).label('Email'),
    password: yup.string().required().label('Password')
});

export const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [authenticate, { isLoading }] = useAuthenticateMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'all' });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        try {
            const account: AccountState = await authenticate(data).unwrap();
            dispatch(setUser(account));
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-emerald-400">
                        Log Into Your Account
                    </h2>
                </div>

                <div className="mx-auto mt-10 w-full max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-2">
                            <Input
                                type="email"
                                label="Email"
                                id="email"
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="h-4 w-4 text-emerald-500 dark:text-emerald-400"
                                    />
                                }
                                {...register('email')}
                            />
                        </div>

                        <div className="mt-2">
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                id="password"
                                errors={errors}
                                prependIcon={
                                    <FontAwesomeIcon
                                        icon={faKey}
                                        className="h-4 w-4 text-emerald-500 dark:text-emerald-400"
                                    />
                                }
                                appendIcon={
                                    <FontAwesomeIcon
                                        icon={showPassword ? faLockOpen : faLock}
                                        className="h-4 w-4 cursor-pointer text-emerald-500 dark:text-emerald-400"
                                        title={`${showPassword ? 'Hide' : 'Show'} Password`}
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                }
                                {...register('password')}
                            />
                        </div>

                        <PrimaryButton type="submit" className="w-full" loading={isLoading}>
                            Sign In
                        </PrimaryButton>
                    </form>

                    <NavLink to="/forgot-password" className="mx-auto mt-6 block w-fit">
                        Forgot Password?
                    </NavLink>

                    <div className="mt-4 inline-flex w-full flex-col items-center space-y-3 text-center text-sm xs:flex-row xs:justify-center xs:space-x-2 xs:space-y-0">
                        <span className="text-emerald-600 dark:text-emerald-400">Not a member?</span>
                        <NavLink to="/sign-up" className="inline-block w-fit">
                            Join Us & Become a Member
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
