import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-100 justify-center">
      <div className="container min-h-screen mx-auto items-center justify-center flex flex-col gap-6 px-5 py-24">
        <div className="relative w-full items-center justify-center hidden lg:flex">
          <img
            className="w-full max-h- max-w-lg"
            src="/404.svg"
            alt="404 Illustration"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center max-w-lg text-center">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist. Here are some helpful links:
          </p>

          <div className="flex items-center justify-center mt-6 gap-x-3">
            {/* Go Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>

            {/* Home Button */}
            <button
              onClick={() => navigate('/')}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page404;
