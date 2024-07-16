import { lazy } from 'react';
import { CW } from '@components';
import { IRoute } from '@interfaces';

const SignInPage = lazy(() => import('@pages/SignIn'));
const SignUpPage = lazy(() => import('@pages/SignUp'));
const RecoveryPasswordPage = lazy(() => import('@pages/RecoveryPassword'));

const AuthRoutes: IRoute[] = [
	{ 
		path: "/login", 
		element: CW(SignInPage),
		layout: "auth",
		title: "Sign In",
	},
	{ 
		path: "/registration", 
		element: CW(SignUpPage),
		layout: "auth",
		title: "Sign Up",
	},
	{ 
		path: "/recovery-password", 
		element: CW(RecoveryPasswordPage),
		layout: "auth",
		title: "Recovery Password",
	},
]

export default AuthRoutes