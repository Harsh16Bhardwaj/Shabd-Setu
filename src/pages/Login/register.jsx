
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./register.css";
import "../../components/homepage.css"
import Logo from "./Web_logo.png";
import avatar from "./generic-avatar.png";

export default function Login() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="login-main flex justify-center w-full h-full">
      <div className="login_main w-3/4 bg-gray-950 mt-12 border-2 border-gray-400 flex rounded-3xl">
        {/* Left Section */}
        <div className="login_left w-3/5 p-10 pt-16">
          <div className="h-auto">
            <div className="flex mb-2 items-center">
              <img className="h-7" src={Logo} alt="Logo" />
              <h2 className="text-2xl font-bold raleway">Abstractions</h2>
            </div>
            <h2 className="text-4xl archivo font-bold">
              Explore the leading Social Media{" "}
              <span className="pink">Analytics Platform</span>
            </h2>
            <p className="text-sm text-gray-300 mt-4">
              Explore new aspects about your socials, try out different things
              while maintaining a balance. Grow your social media like never
              before.
            </p>
            <div className="flex justify-center mt-12 items-center">
              <img src={avatar} className="h-10 avatar" alt="Avatar" />
              <p className="text-xs text-gray-300 ml-4">
                Over <span className="text-white text-sm font-bold">2+</span>{" "}
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login_right bg-gray-800 w-2/5">
          <div className="form-data p-10 pl-12 text-lg" ref={formRef}>
            {/* Heading */}
            <h1 className="text-gray-300 poppins font-bold text-center mb-4">
              Your Journey Starts Here!
            </h1>

            {/* Social Login Buttons */}
            <div className="login-buttons flex gap-x-4 justify-center mt-6">
              <button
                type="button"
                className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-6 py-2.5 flex items-center justify-center"
              >
                <svg
                  className="mr-2 w-5 h-5"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Google Signup
              </button>
              <button
                type="button"
                className="py-2 px-6 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg text-sm flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103z"></path>
                </svg>
                Github Signup
              </button>
            </div>

            <hr className="h-0.5 bg-gray-500 my-6" />

            {/* Form */}
            <form>
              <div className="my-4">
                <label className="text-sm font-semibold" htmlFor="Name">
                  What should we call you?
                </label>
                <input
                  className="bg-gray-300 rounded-lg w-full mt-2 h-9 input-box"
                  type="text"
                  name="Name"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-semibold" htmlFor="Email">
                  Your work-mail:
                </label>
                <input
                  className="bg-gray-300 rounded-lg w-full mt-2 h-9 input-box"
                  type="email"
                  name="Email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div className="my-4">
                <label className="text-sm font-semibold" htmlFor="Password">
                  Your password:
                </label>
                <input
                  className="bg-gray-300 rounded-lg w-full mt-2 h-9 input-box"
                  type="password"
                  name="Password"
                  required
                  placeholder="************"
                />
              </div>
              <div className="flex items-start mb-4">
                <input type="checkbox" className="mt-1" name="Verify" />
                <label className="text-xs ml-2">
                  By signing up, you agree to our Terms of Use and Privacy
                  Policy.
                </label>
              </div>
              <input
                type="submit"
                className="mt-4 poppins bg-blue-800 text-white w-full font-medium p-2 rounded-lg cursor-pointer hover:bg-blue-900"
                value="Create an Account"
              />
            </form>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-xs font-medium">
                Already have an account?{" "}
                <a href="#" className="text-blue-500">
                  Login Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}