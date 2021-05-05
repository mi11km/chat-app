import React from 'react';
import { Link } from 'react-router-dom';

import GoogleIcon from '../images/google-icon.png';
import TwitterIcon from '../images/twitter-icon.png';
import GithubIcon from '../images/github-icon.png';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-4">
                <div>
                    <Link to="/">
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        ログインする
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="メールアドレス"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="パスワード"
                            />
                        </div>
                    </div>

                    {/*<div className="flex items-center justify-between">*/}
                    {/*    <div className="flex items-center">*/}
                    {/*        <input*/}
                    {/*            id="remember_me"*/}
                    {/*            name="remember_me"*/}
                    {/*            type="checkbox"*/}
                    {/*            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"*/}
                    {/*        />*/}
                    {/*        <label*/}
                    {/*            htmlFor="remember_me"*/}
                    {/*            className="ml-2 block text-sm text-gray-900">*/}
                    {/*            記憶する*/}
                    {/*        </label>*/}
                    {/*    </div>*/}

                    {/*    <div className="text-sm">*/}
                    {/*        <a*/}
                    {/*            href=""*/}
                    {/*            className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                    {/*            パスワードを忘れましたか？*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="text-center">もしくは以下のアカウントでログイン</p>
                <div className="flex justify-center m-0">
                    <a href="http://localhost:8080/auth/login/google" className="block mx-2">
                        <img src={GoogleIcon} alt="google-icon" />
                    </a>
                    <a href="http://localhost:8080/auth/login/twitter" className="block mx-2">
                        <img src={TwitterIcon} alt="twitter-icon" />
                    </a>{' '}
                    <a href="http://localhost:8080/auth/login/github" className="block mx-2">
                        <img src={GithubIcon} alt="github-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
