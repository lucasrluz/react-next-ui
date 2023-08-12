export default function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-teal-100 to-orange-100">
      <div className="flex h-96 flex-col items-center rounded-3xl border-4 border-neutral-800 bg-amber-50 pt-3 shadow-[5px_5px_0px_0px_rgba(38,38,38)]">
        <h1 className="text-3xl font-bold text-slate-800">Sign in</h1>

        <div className="mt-3 w-96 border-t-4 border-slate-800"></div>

        <div className="mt-4 flex flex-col">
          <label className="font-semibold text-slate-800" htmlFor="email">
            Email
          </label>
          <input
            className="h-10 w-80 rounded-lg border-4 border-neutral-800 pl-2 text-slate-800"
            id="email"
            type="text"
          />
        </div>

        <div className="mt-4 flex flex-col">
          <label className="font-semibold text-slate-800" htmlFor="password">
            Password
          </label>
          <input
            className="h-10 w-80 rounded-lg border-4 border-neutral-800 pl-2 text-slate-800"
            id="password"
            type="text"
          />
        </div>

        <div className="mt-4 flex w-80 flex-row justify-between">
          <a className="font-semibold text-slate-800" href="">
            Forget password?
          </a>
          <a className="font-semibold text-slate-800" href="">
            Create Account
          </a>
        </div>

        <button className="mt-4 h-10 w-80 rounded-lg border-4 border-neutral-800 font-semibold text-slate-800 shadow-[5px_5px_0px_0px_rgba(23,23,23)]">
          Sign in
        </button>
      </div>
    </main>
  );
}
