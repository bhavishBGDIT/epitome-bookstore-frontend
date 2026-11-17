import { FcGoogle } from "react-icons/fc";

const inputClass =
    "w-full rounded-sm border border-neutral-300 bg-neutral-50 px-2 pb-1.5 pt-2.5 text-xs " +
    "text-neutral-900 outline-none placeholder:text-neutral-500 focus:border-neutral-400";

export default function Login() {
    return (
        <div className="flex min-h-screen flex-col bg-neutral-50">

            <main className="flex flex-1 flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-4 py-8">

                {/* Left: Book showcase */}
                <div
                    aria-hidden="true"
                    className="w-full max-w-[450px] md:w-1/2 flex justify-center"
                >
                    <img
                        src="/login.png"
                        alt="People reading books"
                        className="w-full h-auto max-h-[250px] sm:max-h-[320px] md:max-h-[400px] object-contain"
                    />
                </div>

                {/* Right: Login form */}
                <div className="w-full max-w-[350px]">

                    <div className="border border-neutral-300 bg-white px-5 sm:px-10 pb-6 pt-8 sm:pt-10">

                        <h1 className="mb-8 text-center font-serif text-3xl sm:text-4xl italic text-neutral-900">
                            Bookstore
                        </h1>

                        <div className="flex flex-col gap-2">
                            <input
                                type="text"
                                placeholder="Phone number OR email"
                                className={inputClass}
                            />

                            <button className="mt-2 rounded-lg bg-sky-500 py-2 text-sm font-semibold text-white hover:bg-sky-600 cursor-pointer">
                                Log in
                            </button>
                        </div>

                        <div className="my-5 flex items-center gap-4">
                            <div className="h-px flex-1 bg-neutral-300" />
                            <span className="text-xs font-semibold text-neutral-500">OR</span>
                            <div className="h-px flex-1 bg-neutral-300" />
                        </div>

                        <button className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-sky-900 cursor-pointer">
                            <FcGoogle className="h-5 w-5" />
                            Log in with Google
                        </button>

                    </div>

                    <p className="mt-4 text-center text-sm text-neutral-800">
                        Browse print books, track orders, and pick up where you left off.
                    </p>

                </div>
            </main>

            <footer className="px-4 pb-6 text-center text-xs text-neutral-500">
                <nav className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <a href="#">About</a>
                    <a href="#">Help</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Contact</a>
                </nav>
                © 2026 Bookstore
            </footer>

        </div>
    );
}
