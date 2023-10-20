export default function Logo() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <a href="#" className="flex items-center">
        <img className="m-[-75px]" src="/logo.svg" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Brand Name
        </span>
      </a>
    </div>
  );
}
