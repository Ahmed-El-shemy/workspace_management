import { Link } from 'react-router-dom';

const SignUp = () => {
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
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary font-medium hover:underline">
                        Log in
                    </Link>
                </div>
            </div>

            {/* Form Container */}
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="w-full max-w-[600px] bg-white rounded-xl shadow-sm border border-gray-100 p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-text-dark mb-2">Create your account</h1>
                        <p className="text-sm text-text-gray">Start collaborating with your team today.</p>
                    </div>

                    <form className="space-y-5">
                        {/* First Name & Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-text-dark mb-1.5">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., John"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-text-dark mb-1.5">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Doe"
                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-xs font-medium text-text-dark mb-1.5">
                                Phone Number
                            </label>
                            <div className="relative">
                                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-gray" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <input
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    className="w-full h-10 pl-10 pr-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div>
                            <label className="block text-xs font-medium text-text-dark mb-1.5">
                                Email Address
                            </label>
                            <div className="relative">
                                <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-gray" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="w-full h-10 pl-10 pr-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Password & Re-enter Password */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-text-dark mb-1.5">
                                    Password
                                </label>
                                <div className="relative">
                                    <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-gray" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full h-10 pl-10 pr-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-text-dark mb-1.5">
                                    Re-enter Password
                                </label>
                                <div className="relative">
                                    <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-gray" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full h-10 pl-10 pr-3 border border-gray-300 rounded-lg text-sm placeholder:text-text-gray focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                            <label className="block text-xs font-medium text-text-dark mb-1.5">
                                Date of Birth
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm text-text-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                    <option>Month</option>
                                </select>
                                <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm text-text-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                    <option>Day</option>
                                </select>
                                <select className="h-10 px-3 border border-gray-300 rounded-lg text-sm text-text-gray bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                                    <option>Year</option>
                                </select>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mt-0.5 w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                            />
                            <label htmlFor="terms" className="text-xs text-text-gray">
                                I agree to the{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-primary hover:underline">
                                    Privacy Policy
                                </a>
                                .
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-11 bg-primary text-white font-medium text-sm rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Create Account
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white px-3 text-text-gray">OR SIGN UP WITH</span>
                            </div>
                        </div>

                        {/* Social Sign Up */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="h-10 flex items-center justify-center gap-2 border border-gray-300 rounded-lg text-sm text-text-dark font-medium hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                                </svg>
                                Google
                            </button>
                            <button
                                type="button"
                                className="h-10 flex items-center justify-center gap-2 border border-gray-300 rounded-lg text-sm text-text-dark font-medium hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 21 21">
                                    <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                                    <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                                    <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                                    <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                                </svg>
                                Microsoft
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
