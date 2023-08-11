export function EmailInput() {
  return (
    <div className="mt-10 flex flex-col">
      <label className="text-slate-800" htmlFor="email">
        Email
      </label>
      <input
        className="h-10 w-96 rounded-md border border-slate-300 pl-2 focus:outline-violet-600"
        id="email"
        type="text"
      />
    </div>
  );
}
