import { PrimaryButton } from "../components/PrimaryButton.tsx";

export const LandingPage = () => (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-900 ring-1 ring-emerald-500 transition-all duration-300 hover:opacity-70 dark:text-slate-50">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-emerald-500 dark:text-emerald-400">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-emerald-400 sm:text-6xl">
                Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-50">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <PrimaryButton>Get started</PrimaryButton>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50">
                    Learn more <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
    </div>
);
