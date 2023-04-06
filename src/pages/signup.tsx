const logup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <div className="flex justify-center justify-items-center my-4 " >
                    <img className="w-[70px] " src="../../public/img/logo.png" alt="" />
                </div>
                <h3 className="text-3xl font-bold text-center text-[#D70018] ">
                    Sign Up
                </h3>
                <form action="">
                    <div className="mt-4">
                        <div>
                            <label className="block font-semibold" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                Email field is required
                            </span>
                        </div>
                        <div className="mt-4 font-semibold">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                Password field is required
                            </span>
                        </div>
                        <div className="mt-4">
                            <label className="block font-semibold" htmlFor="password">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#D70018]"
                            />
                            <span className="text-xs tracking-wide text-red-600 font-semibold">
                                Confirm password field is required
                            </span>
                        </div>
                        <div className="flex items-baseline justify-center">
                            <button className="px-6 py-2 mt-4 text-white bg-[#D70018] rounded-lg hover:bg-[#ff001e]">Lognup</button>
                            {/* <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a> */}
                        </div>
                        <div className="text-center mt-4">
                            <div className="">
                                Already a member? <a href="/login" className="text-[#5855ff]">Log in</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default logup;