import React from "react";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      {/* Pages: Sign In: Boxed */}

      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen min-w-[320px] bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          <div className="min-h-screen flex items-center justify-center relative overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
            {/* Sign In Section */}
            <section className="py-6 w-full max-w-xl">
              {/* Header */}
              <header className="mb-10 text-center">
                <h1 className="text-2xl font-bold inline-flex items-center mb-2 space-x-2">
                  <svg
                    className="hi-mini hi-cube-transparent inline-block w-5 h-5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Company</span>
                </h1>
                <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Welcome, please sign in to your dashboard
                </h2>
              </header>
              {/* END Header */}

              {/* Sign In Form */}
              <LoginForm />
              {/* END Sign In Form */}

              {/* Footer */}
              <div className="text-sm text-gray-500 text-center mt-6 dark:text-gray-400">
                Powered by{" "}
                <a
                  href="/"
                  className="font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                  Tailkit
                </a>
              </div>
              {/* END Footer */}
            </section>
            {/* END Sign In Section */}
          </div>
        </main>
        {/* END Page Content */}
      </div>
      {/* END Page Container */}

      {/* END Pages: Sign In: Boxed */}
    </>
  );
};

export default Login;
