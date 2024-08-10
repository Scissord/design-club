import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { useSignupMutation } from "@store/api/authApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IError, ISignUpForm } from "@interfaces";
import { IconUser, IconPhone, IconKey, IconLock } from "@icons";
import { useNavigate, useAppDispatch } from "@hooks";
import { setUser, setAccessToken } from "@store/reducers/authSlice";
import { ViewContext } from "@context";
import { signUpFormSchema } from "@validation";

const css = {
  container: `flex w-[80%] lg:w-[60%] h-[80vh] lg:h-[70vh] border border-gray-300
              dark:border-neutral-200 rounded-xl shadow-2xl
              shadow-neutral-400 dark:shadow-none`,
  left_section: `hidden xl:flex items-center justify-center w-1/2
                border-r border-gray-300 dark:border-neutral-200
                h-full rounded-xl`,
  right_section: `w-full xl:w-1/2 h-full flex flex-col items-center
                justify-between py-6 lg:py-12`,
};

const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const context = useContext(ViewContext);

  const [signup, { isError, isLoading }] = useSignupMutation();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ISignUpForm>({
    mode: "onBlur",
    resolver: yupResolver(signUpFormSchema),
    defaultValues: { gender: 0 },
  });

  const onSubmit: SubmitHandler<ISignUpForm> = async (data) => {
    try {
      const user = await signup(data).unwrap();
      dispatch(setUser(user.user));
      dispatch(setAccessToken(user.accessToken));
      navigate('/login');
      reset();
      // Handle successful signup, e.g., redirect to login page or show a success message
    } catch (error) {
      const typedError = error as IError;
      context?.notification.show(typedError?.data?.error || typedError.message || 'An error occurred', 'error');
    }
  };

  return (
    <div className={css.container}>
      <section className={css.left_section}>
        <img src="pics/registration-form-bg.svg" alt="auth-form-bg" />
      </section>
      <section className={css.right_section}>
        <img src="logo/logo_white.svg" alt="logo" className="w-16 sm:w-20" />
        <p className="text-3xl font-bold">Hello Again!</p>
        <p className="text-lg text-gray-400 break-words text-center">
          Please enter your username and password to continue.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-6 w-[70%]">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <IconUser fill="white"/>
            <input
              type="text"
              className="grow w-full"
              // value={"scissxrd"}
              placeholder="Username"
              {...register("name")}
            />
          </label>
          {errors.name && <div className="text-red-500">{errors.name.message}</div>}
          <label className="input input-bordered flex items-center gap-2 w-full">
            <IconPhone/>
            <input
              type="text"
              className="grow w-full"
              // value={"+77762643168"}
              placeholder="Phone"
              {...register("phone")}
            />
          </label>
          {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}
          <label className="input input-bordered flex items-center gap-2 w-full">
            <IconKey/>
            <input
              type="password"
              className="grow w-full"
              placeholder="******"
              // value={"Surgood123#"}
              {...register("password")}
            />
          </label>
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}
          <label className="input input-bordered flex items-center gap-2 w-full">
            <IconLock/>
            <input
              type="password"
              className="grow w-full"
              placeholder="******"
              // value={"Surgood123#"}
              {...register("confirmPassword")}
            />
          </label>
          {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}
          <div className="flex gap-4 w-full">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value={0}
                {...register("gender")}
                className="mr-2"
                defaultChecked
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value={1}
                {...register("gender")}
                className="mr-2"
              />
              Female
            </label>
          </div>
          {errors.gender && <div className="text-red-500">{errors.gender.message}</div>}

          <Link to={"/recovery-password"} className="label-text-alt ml-auto text-blue-500 hover:underline">Recovery Password?</Link>
          <button type="submit" className="btn btn-active btn-secondary" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "SignUp"}
          </button>
          {isError && <div className="text-red-500">Signup failed. Please try again.</div>}
        </form>
        <p className="px-12 lg:px-0 break-words text-center">
          Already have an account? <Link to={"/login"} className="text-blue-500 hover:underline">Login</Link>
        </p>
      </section>
    </div>
  );
};

export default SignUp
