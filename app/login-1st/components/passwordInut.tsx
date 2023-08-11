export function PasswordInput() {
  return (
    <div className="mt-4 flex flex-col">
      <label className="text-slate-800" htmlFor="password">
        Password
      </label>
      <input
        className="h-10 w-96 rounded-md border border-slate-300 pl-2 focus:outline-violet-600"
        id="password"
        type="password"
      />
    </div>
  );
}
