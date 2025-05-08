import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
            <p className="text-2xl mb-2">Something went wrong.</p>
            {error?.statusText && <p className="text-gray-600">{error.statusText}</p>}
            {error?.message && <p className="text-gray-600">{error.message}</p>}
            <Link
                to="/"
                className="mt-6 inline-block px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition"
            >
                Go back Home
            </Link>
        </div>
    );
};

export default ErrorPage;