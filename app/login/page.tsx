import Link from "next/link";
import { SignUpButtonG, SignUpButtonF } from "@/app/components/button";
import Image from "next/image";
import thumb from "@/public/Group.png";
import bgthumb from "@/public/bg-thumb.png";
import mthumb from "@/public/Vector.png";

export default function signup() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="relative flex w-full">
          <div className="bg-cover bg-center relative">
            <Image
              src={bgthumb}
              alt="bg-thumb"
              className="object-cover sm:h-3 lg:h-auto"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src={mthumb}
              alt="middle thumb"
              className="place-center w-auto"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center w-full">
            <Image
              src={thumb}
              alt="thumb image"
              className="p-8 w-auto h-auto "
            />
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 w-full">
          <h1 className="text-4xl font-bold mb-4">Sign in</h1>
          <h2 className="mb-4">Please, sign in to continue</h2>
          <div className="max-w-md">
            <input
              className="p-2 border border-gray-300 rounded-lg w-full"
              id="email"
              type="email"
              placeholder="Email/Phone Number"
            />
            <br />
            <br />
            <input
              className="p-2 border border-gray-300 rounded-lg w-full"
              id="password"
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <button className="p-2 border border-gray-300 rounded-lg w-full text-white text-lg bg-red-500">
              Sign in
            </button>
            <br />
            <br />
            <div className="text-center mb-4">
              <span className="text-gray-500">Or</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-md flex">
              <div className="flex-1 p-2 border border-gray-300 rounded-lg mr-2">
                <SignUpButtonG />
              </div>
              <div className="flex-1 p-2 border border-gray-300 rounded-lg ml-2">
                <SignUpButtonF />
              </div>
            </div>
          </div>
          <br />
          <div className="flex flex-col">
            <p className="mb-4 text-xs lg:mx-44 mx-28">
              <Link href="#">
                <span className="text-blue-500">Forgot password?</span>
              </Link>
            </p>
            <p className="mb-4 text-xs mx-28 ">
              Do not have an account? Go to{" "}
              <Link href="#">
                <span className="text-blue-500">Registration</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
