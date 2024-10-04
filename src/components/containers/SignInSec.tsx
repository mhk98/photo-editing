import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "public/images/facebook.png";
import google from "public/images/google.png";

const SignInSec = () => {
  return (
    <div className="registration-popup registration-popup-page">
      <div className="registration-inner">
        <div className="back-to-home">
          <Link href="/" className="btn btn--secondary back-home">
            Back To Home
          </Link>
        </div>
        <div className="single registration-pop" id="signModal">
          <div className="row gaper">
            <div className="col-12 col-md-4 col-lg-6 col-xl-8">
              <div className="thumb">
                <div className="cta__grop">
                  <Link href="/sign-in" className="btn btn--primary regi-btn">
                    Sign In
                  </Link>
                  <Link href="/sign-up" className="btn btn--secondary regi-btn">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-6 col-xl-4">
              <div className="registration__content">
                <h2 className="h2 title">welcome back</h2>
                <form action="#" method="post" name="signInForm">
                  <div className="group-input">
                    <input
                      type="email"
                      name="sign-in-email"
                      id="signInEmail"
                      placeholder="email address"
                      required
                    />
                  </div>
                  <div className="group-input">
                    <input
                      type="password"
                      name="sign-in-password"
                      id="signInPassword"
                      placeholder="enter password"
                      required
                    />
                  </div>
                  <div className="divide">
                    <p>OR</p>
                  </div>
                  <div className="authentic">
                    <button type="submit" className="btn btn--secondary">
                      <Image src={google} alt="Image" /> continue with google
                    </button>
                    <button type="submit" className="btn btn--secondary">
                      <Image src={facebook} alt="Image" /> continue with
                      facebook
                    </button>
                  </div>
                  <div className="group-radio">
                    <input
                      type="checkbox"
                      name="sign-in-check"
                      id="signInCheck"
                    />
                    <label htmlFor="signInCheck">
                      i accept your terms & conditions
                    </label>
                  </div>
                  <div className="cta__group">
                    <button type="submit" className="btn btn--primary">
                      sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSec;
