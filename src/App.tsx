import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout.tsx';
import { LandingPage } from './pages/LandingPage.tsx';
import { SignInPage } from './pages/Auth/SignInPage.tsx';
import { SignUpPage } from './pages/Auth/SignUpPage.tsx';
import { ForgotPasswordPage } from './pages/Auth/ForgotPasswordPage.tsx';
import { VerifyEmailPage } from './pages/Auth/VerifyEmailPage.tsx';
import { ResetPasswordPage } from './pages/Auth/ResetPasswordPage.tsx';

export const App = () => (
    <Routes>
        <Route path='/*' element={<AuthLayout />}>
            <Route path='sign-in' element={<SignInPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='forgot-password' element={<ForgotPasswordPage />} />
            <Route path='verify-email' element={<VerifyEmailPage />} />
            <Route path='reset-password' element={<ResetPasswordPage />} />
            <Route path='*' element={<LandingPage />} />
        </Route>
    </Routes>
);
