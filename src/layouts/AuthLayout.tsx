import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Dialog, Menu, Switch, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "usehooks-ts";
import { classNames } from "../helpers";
import { NavLink } from "../components/NavLink.tsx";
import { useAppSelector } from "../redux/hooks.ts";
import { selectAccount, selectAvatar, selectFullName } from "../redux/features/account/accountSlice.ts";

const navigation = [
    { name: "Daily Log", to: "/daily-log" },
    { name: "Onboarding", to: "/onboarding" },
    { name: "Meal Plan", to: "/onboarding/meal-plan" }
];

export const AuthLayout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isDarkMode, toggle } = useDarkMode();
    const account = useAppSelector(selectAccount);
    const accountAvatar = useAppSelector(selectAvatar);
    const accountFullName = useAppSelector(selectFullName);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <div className="min-h-screen bg-slate-200 dark:bg-slate-800">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <NavLink to="/" className="-m-1.5 select-none !text-3xl uppercase">
                            <span className="font-black text-black dark:text-white">Easy</span>
                            <span className="text-emerald-400">Eat</span>
                        </NavLink>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-6 xl:gap-x-12">
                        {navigation.map((navLink) => (
                            <NavLink to={navLink.to} key={navLink.name} end>
                                {navLink.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-6">
                        {!account.id && (
                            <div className="hidden lg:flex lg:items-center lg:space-x-6">
                                <NavLink to="/sign-up" outlined>
                                    Sign Up
                                </NavLink>
                                <NavLink to="/sign-in" button>
                                    Sign In
                                </NavLink>
                            </div>
                        )}
                        <Switch
                            checked={isDarkMode}
                            onChange={toggle}
                            className={classNames(
                                isDarkMode ? "bg-emerald-400" : "bg-slate-400",
                                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 focus-visible:transition-none dark:focus-visible:outline-emerald-400"
                            )}
                        >
                            <span
                                className={classNames(
                                    isDarkMode ? "translate-x-5" : "translate-x-0",
                                    "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                                )}
                            >
                                <span
                                    className={classNames(
                                        isDarkMode
                                            ? "opacity-0 duration-100 ease-out"
                                            : "opacity-100 duration-200 ease-in",
                                        "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                    )}
                                >
                                    <FontAwesomeIcon icon={faSun} className="h-3 w-3 text-emerald-500" />
                                </span>
                                <span
                                    className={classNames(
                                        isDarkMode
                                            ? "opacity-100 duration-200 ease-in"
                                            : "opacity-0 duration-100 ease-out",
                                        "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                                    )}
                                >
                                    <FontAwesomeIcon icon={faMoon} className="h-3 w-3 text-slate-600" />
                                </span>
                            </span>
                        </Switch>
                        {account.id && (
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex rounded-full text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 focus-visible:transition-none dark:focus-visible:outline-emerald-400">
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src={accountAvatar}
                                            alt={accountFullName}
                                            title={accountFullName}
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-slate-300 focus:outline-none dark:bg-slate-900 dark:ring-slate-700">
                                        <Menu.Item>
                                            <NavLink to="profile" className="block w-fit px-4 py-2">
                                                My Profile
                                            </NavLink>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <NavLink to="profile/settings" className="block w-fit px-4 py-2">
                                                Account Settings
                                            </NavLink>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        )}
                        <div className="inline-flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-100"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-200 px-6 py-6 dark:bg-slate-800 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <NavLink to="/" className="-m-1.5 select-none !text-3xl uppercase">
                                <span className="font-black text-black dark:text-white">Easy</span>
                                <span className="text-emerald-400">Eat</span>
                            </NavLink>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((navLink) => (
                                        <NavLink
                                            to={navLink.to}
                                            key={navLink.name}
                                            className="-mx-3 block w-fit px-2 py-2"
                                            end
                                        >
                                            {navLink.name}
                                        </NavLink>
                                    ))}
                                </div>
                                {!account.id && (
                                    <div className="-mx-3 flex items-center justify-evenly space-x-6 p-3">
                                        <NavLink to="/sign-up" outlined>
                                            Sign Up
                                        </NavLink>
                                        <NavLink to="/sign-in" button>
                                            Sign In
                                        </NavLink>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="relative isolate px-4 pt-14 md:px-6 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-50 to-emerald-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    />
                </div>

                <main>
                    <Outlet />
                </main>

                <div
                    className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-35rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-600 to-emerald-50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
