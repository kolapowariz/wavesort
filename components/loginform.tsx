'use client';
import { useFormStatus, useFormState} from 'react-dom'
import { authenticate } from '@/app/lib/action';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {ExclamationCircleIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function LoginForm() {
  const [ errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href='/'>

          <Image
            alt="Your Company"
            src="/favicon.ico"
            width={60}
            height={60}
            className="mx-auto h-10 w-auto"
          />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={dispatch} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between dark:text-white">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white p-2"
                />
              </div>
            </div>
            <LoginButton />
            <div className="flex h-8 items-end space-x-1">
        {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
        )}
          {/* Add form errors here */}
        </div>
          </form>
        </div>
      </div>
    </>
  )
}

function LoginButton () {
  const {pending} = useFormStatus();
  return (
    <div>
    <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type='submit' disabled={pending}>Sign In {pending && '...'}</Button>
  </div>
  )
}