import React from "react";
import { Facebook, Twitter } from "../../components/Buutons/Social";

const LoginForm = () => {
  return (
    <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
      <div className="p-5 md:px-16 md:py-12 grow">
        <form className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
            />
          </div>
          <div>
            <div className="flex items-center justify-between space-x-2 mb-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:ring-offset-gray-900 dark:focus:border-blue-500 dark:checked:bg-blue-500 dark:checked:border-transparent"
                />
                <span className="text-sm ml-2">Remember me</span>
              </label>
              <a
                href="/"
                className="text-sm font-medium inline-block text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
              <svg
                className="hi-mini hi-arrow-uturn-right inline-block w-5 h-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Sign In</span>
            </button>
            {/* Divider: With Label */}
            <div className="flex items-center my-5">
              <span
                aria-hidden="true"
                className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
              />
              <span className="text-xs font-medium text-gray-800 bg-gray-100 rounded-full px-3 py-1 dark:bg-gray-700 dark:text-gray-200">
                or sign in with
              </span>
              <span
                aria-hidden="true"
                className="grow bg-gray-100 rounded h-0.5 dark:bg-gray-700/75"
              />
            </div>
            {/* END Divider: With Label */}
            <div className="grid grid-cols-2 gap-2">
              <Facebook />
              <Twitter />
            </div>
          </div>
        </form>
      </div>
      <div className="p-5 md:px-16 grow text-sm text-center bg-gray-50 dark:bg-gray-700/50">
        Don’t have an account yet?
        <a
          href="/"
          className="px-1 font-medium text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
