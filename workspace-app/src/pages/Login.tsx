import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Top Bar */}
            <div className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        W
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-text-dark">Workspace</div>
                        <div className="text-[10px] text-text-gray">Standard Plan</div>
                    </div>
                </div>
                <div className="text-sm text-text-gray">
                    Need Help?{' '}
                    <a href="#" className="text-primary font-medium hover:underline">
                        Contact Support
                    </a>
                </div>
            </div>

            {/* Form Container */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-[460px] bg-white rounded-xl shadow-sm border border-gray-100 p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-text-dark mb-2">Welcome back</h1>
                        <p className="text-sm text-text-gray">Login to manage your projects</p>
                    </div>

                    <form className="space-y-5">
                        {/* Email Address */}
                        <div>
                            <label className="block text-xs font-medium text-text-dark mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-xs font-medium text-text-dark">
                                    Password
                                </label>
                                <a href="#" className="text-xs text-primary hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full h-10 px-3 pr-10 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-gray hover:text-text-dark"
                                >
                                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-11 bg-primary text-white font-medium text-sm rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Sign In
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white px-3 text-text-gray">OR</span>
                            </div>
                        </div>

                        {/* Social Sign In */}
                        <div className="space-y-3">
                            <button
                                type="button"
                                className="w-full h-10 flex items-center justify-center gap-2 border border-gray-300 rounded-lg text-sm text-text-dark font-medium hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                                </svg>
                                Sign in with Google
                            </button>

                            <button
                                type="button"
                                className="w-full h-10 flex items-center justify-center gap-2 border border-gray-300 rounded-lg text-sm text-text-dark font-medium hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#00A4EF" d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
                                </svg>
                                Sign in with SSO
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="text-center text-sm text-text-gray mt-6">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-primary font-medium hover:underline">
                                Sign up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
