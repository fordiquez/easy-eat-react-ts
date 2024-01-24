import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout.tsx';
import { LandingPage } from './pages/LandingPage.tsx';
import { SignInPage } from './pages/auth/SignInPage.tsx';
import { SignUpPage } from './pages/auth/SignUpPage.tsx';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage.tsx';
import { VerifyEmailPage } from './pages/auth/VerifyEmailPage.tsx';
import { ResetPasswordPage } from './pages/auth/ResetPasswordPage.tsx';
import { ProfilePage } from './pages/account/ProfilePage.tsx';
import { SettingsPage } from './pages/account/SettingsPage.tsx';

export const App = () => (
    <Routes>
        <Route path='/*' element={<AuthLayout />}>
            <Route path='sign-in' element={<SignInPage />} />
            <Route path='sign-up' element={<SignUpPage />} />
            <Route path='forgot-password' element={<ForgotPasswordPage />} />
            <Route path='verify-email' element={<VerifyEmailPage />} />
            <Route path='reset-password' element={<ResetPasswordPage />} />
            <Route path='profile'>
                <Route index element={<ProfilePage />} />
                <Route path='settings' element={<SettingsPage />} />
            </Route>
            <Route path='*' index element={<LandingPage />} />
        </Route>
    </Routes>
);
