import { SubmitHandler, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../../components/Input.tsx';
import { NavLink } from '../../components/NavLink.tsx';
import { PrimaryButton } from '../../components/PrimaryButton.tsx';

interface FormData {
    email: string;
}

const schema = yup.object({
    email: yup.string().email().required().max(25).label('Email')
});

export const ForgotPasswordPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'all' });

    const onSubmit: SubmitHandler<FormData> = (data) => {
        alert(JSON.stringify(data));
    };
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900 dark:text-emerald-400">
                        Restore access to your account
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

                        <PrimaryButton type="submit" className="w-full">
                            Send
                        </PrimaryButton>
                    </form>

                    <NavLink to="/sign-in" className="mx-auto mt-6 block w-fit">
                        Log Into Your Account
                    </NavLink>
                </div>
            </div>
        </>
    );
};
