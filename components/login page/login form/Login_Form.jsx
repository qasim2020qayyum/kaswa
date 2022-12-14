function Login_Form() {
  return (
    <div className="py-[80px] lg:py-[120px]">
      <div className="container">
        <form action="#">
          <div className="grid grid-cols-12 gap-x-[30px] mb-[-30px]">
            <div className="col-span-12 lg:col-span-6 mb-[30px]">
              <h2 className="font-recoleta text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl mb-[15px]">
                Login to Kaswa<span className="text-secondary">.</span>
              </h2>
              <p className="max-w-[465px] mb-[50px]">
                Huge number of propreties availabe here for buy, sell and Rent.
                Also you find here co-living property, lots opportunity you have
                to choose here and enjoy huge discount you can get.
              </p>
              <div className="grid grid-cols-12 gap-x-[20px] gap-y-[35px]">
                <div className="col-span-12">
                  <input
                    className="font-light w-full sm:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="Usename"
                  />
                </div>
                <div className="col-span-12">
                  <input
                    className="font-light w-full sm:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-[#FD6400] focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="password"
                    placeholder="Password"
                  />
                  <div className="flex flex-wrap items-center justify-between w-full sm:w-[400px] mt-[15px]">
                    <div className="flex flex-wrap items-center">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        name="Remember me"
                      />
                      <label
                        htmlFor="checkbox1"
                        className="ml-[5px] cursor-pointer text-[14px]"
                      >
                        {" "}
                        Remember me
                      </label>
                      <br />
                    </div>
                    <a
                      href="#"
                      className="hover:text-secondary text-[14px] block"
                    >
                      Forgot Password
                    </a>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex flex-wrap items-center">
                    <button
                      type="submit"
                      className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[40px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all"
                    >
                      Login
                    </button>
                    <a
                      href="register.html"
                      className="font-medium text-primary hover:text-secondary ml-[40px]"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 mb-[30px]">
              <img
                src="/images/contact/image.png"
                className="w-full h-auto rounded-[10px]"
                width={546}
                height={478}
                alt="image"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login_Form;
