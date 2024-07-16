import { FC } from "react";
import { Link } from "react-router-dom";

const css = {
  container: `flex w-[80%] lg:w-[60%] h-[80vh] lg:h-[70vh] border border-gray-300 
              dark:border-neutral-200 rounded-xl shadow-2xl 
              shadow-neutral-400 dark:shadow-none`,
  left_section: `hidden xl:flex items-center justify-center w-1/2 
                border-r border-gray-300 dark:border-neutral-200 
                h-full rounded-xl`,
  right_section: `w-full xl:w-1/2 h-full flex flex-col items-center 
                  justify-between py-0 lg:py-12`,
}

const SignIn: FC = () => {


  return (
    <div className={css.container}>
      <section className={css.left_section}>
        <img src="pics/auth-form-bg.svg" alt="auth-form-bg"/>
      </section>
      <section className={css.right_section}>
        <div className="h-full flex flex-col items-center gap-6 px-4">
          <img src="logo/logo_white.svg" alt="logo" className="w-16 sm:w-20"/>
          <p className="text-3xl font-bold">Recovery Password!</p>
          <p className="text-lg text-gray-400 break-words text-center">Please enter you're username and password to continue.</p>
          <button className="btn btn-active btn-secondary">
            Login
          </button>
        </div>
        <p className="pb-12 lg:pb-0 pt-0 lg:pt-3 px-12 lg:px-0 break-words text-center">Don't have an account yet? <Link to={"/registration"} className="text-blue-500 hover:underline">Sign Up</Link></p>
      </section>
    </div>
  );
};

export default SignIn
