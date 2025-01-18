import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./register.css";
import "../../components/homepage.css"
import Logo from "../../assets/Web_Logo.png";
import avatar from "../../assets/generic-avatar.png";
import { login as storeLogin } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
    <div className="login-main flex justify-center w-full h-full bg-gradient-to-br from-gray-900 to-black">
      <div className="login_main w-3/4 bg-gray-950/90 mt-12 border border-gray-700 flex rounded-3xl backdrop-blur-lg shadow-2xl">
        {/* Left Section */}
        <div className="login_left w-3/5 p-12 pt-16">
          <div className="h-auto">
            <div className="flex mb-4 items-center">
              <img className="h-8 mr-3" src={Logo} alt="Logo" />
              <h2 className="text-2xl font-bold raleway text-white">Abstractions</h2>
            </div>
            <h2 className="text-5xl archivo font-extrabold leading-tight">
              Explore the leading Social Media
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"> Analytics Platform</span>
            </h2>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Explore new aspects about your socials, try out different things
              while maintaining a balance. Grow your social media like never
              before.
            </p>
            <div className="flex justify-start mt-16 items-center bg-gray-800/50 p-4 rounded-xl">
              <img src={avatar} className="h-12 avatar" alt="Avatar" />
              <p className="text-sm text-gray-300 ml-4">
                Over <span className="text-white text-lg font-bold">2+</span>
                <br/>Happy Customers
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login_right bg-gray-800/50 w-2/5 backdrop-blur-sm">
          <div className="form-data p-12 text-lg" ref={formRef}>
            {/* Heading */}
            <h1 className="text-white poppins text-2xl font-bold text-center mb-6">
              Your Journey Starts Here!
            </h1>

            {/* Social Login Buttons */}
            <div className="login-buttons flex gap-x-4 justify-center mt-6">
              <button
                type="button"
                className="text-white w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:ring-2 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-6 py-3 flex items-center justify-center transition duration-300"
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
                className="py-3 px-6 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-medium rounded-lg text-sm flex items-center justify-center transition duration-300"
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

            <hr className="h-0.5 bg-gray-600 my-8" />

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-gray-200" htmlFor="Name">
                  What should we call you?
                </label>
                <input
                  className="bg-gray-700/50 text-white rounded-lg w-full mt-2 h-11 input-box border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300"
                  type="text"
                  name="Name"
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-200" htmlFor="Email">
                  Your work-mail:
                </label>
                <input
                  className="bg-gray-700/50 text-white rounded-lg w-full mt-2 h-11 input-box border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300"
                  type="email"
                  name="Email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-200" htmlFor="Password">
                  Your password:
                </label>
                <input
                  className="bg-gray-700/50 text-white rounded-lg w-full mt-2 h-11 input-box border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition duration-300"
                  type="password"
                  name="Password"
                  required
                  placeholder="************"
                />
              </div>
              <div className="flex items-start">
                <input type="checkbox" className="mt-1 rounded border-gray-600 text-purple-500 focus:ring-purple-500" name="Verify" />
                <label className="text-xs ml-2 text-gray-300">
                  By signing up, you agree to our Terms of Use and Privacy
                  Policy.
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 poppins bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full font-medium p-3 rounded-lg cursor-pointer transition duration-300 transform hover:scale-[1.02]"
              >
                Create an Account
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-300">
                Already have an account?{" "}
                <a href="/signin" className="text-purple-400 hover:text-purple-300 font-medium transition duration-300">
                  Login 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}