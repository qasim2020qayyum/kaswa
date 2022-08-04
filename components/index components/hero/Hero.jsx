import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div>
      {/* Hero section start */}
      <section className="bg-white relative">
        <div className=" hero-slider overflow-hidden pt-[130px] lg:pt-[80px] xl:pt-[0px] pb-[70px] lg:pb-[0px]">
          <div className="swiper-container bg_img-head ">
            <div className="swiper-wrapper ">
              {/* swiper-slide start */}
              <div className=" swiper-slide lg:h-[700px] xl:h-[960px] xs:h-[auto] flex flex-wrap items-center">
                <div className="container ">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                      {/* <div className="slider-content">
                        <div className="relative mb-5 sub_title">
                          <img
                            className="animate-animateSpin"
                            src="/images/hero/cogs.png"
                            width={62}
                            height={62}
                            alt="icon"
                          />
                          <span className=" text-base text-secondary block absolute left-[28px] top-1/2 -translate-y-1/2 hero__title">
                            A new way to find Properties
                          </span>
                        </div>
                        <h1 className="font-recoleta text-primary text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl title">
                          <span>Find your Most Suitable Property</span>
                        </h1>
                        <p className="text-base text-[#494949] mt-5 mb-8 text max-w-[570px]">
                          Huge number of propreties availabe here for buy, and
                          sell, also you can find here co-living property, So
                          you have lots of opportunity
                        </p>
                        <div className="inline-block mb-7 hero_btn">
                          <Link href="contact">
                            <a className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all block">
                              Contact us
                            </a>
                          </Link>
                        </div>
                        <span className="block font-recoleta hero_info">
                          <span className="text-[20px] sm:text-[22px] text-secondary hero__title">
                            Have a question?
                          </span>
                          <a
                            href="tel:9985254784"
                            className="text-[22px] sm:text-[32px] text-primary hover:underline"
                          >
                            +92 335 3242342
                          </a>
                        </span>
                      </div> */}
                    </div>
                    <div className="col-span-12 lg:col-span-5 xl:col-span-6 mb-5">
                      <div className="slider-content">
                        <div className="relative mb-5 sub_title">
                          <img
                            className="animate-animateSpin"
                            src="/images/hero/cogs.png"
                            width={62}
                            height={62}
                            alt="icon"
                          />
                          <span className=" text-base text-white block absolute left-[28px] top-1/2 -translate-y-1/2 hero__title">
                            A new way to find Properties
                          </span>
                        </div>
                        <h1 className="font-recoleta text-white text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl title">
                          <span>Find your Most Suitable Property</span>
                        </h1>
                        <p className="text-base text-white mt-5 mb-8 text max-w-[570px]">
                          Huge number of propreties availabe here for buy, and
                          sell, also you can find here co-living property, So
                          you have lots of opportunity
                        </p>
                        <div className="inline-block mb-7 hero_btn">
                          <Link href="contact">
                            <a className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all block">
                              Contact us
                            </a>
                          </Link>
                        </div>
                        <span className="block font-recoleta hero_info">
                          <span className="text-[20px] sm:text-[22px] text-secondary hero__title">
                            Have a question?
                          </span>
                          <a
                            href="tel:9985254784"
                            className="text-[22px] sm:text-[32px] text-white hover:underline"
                          >
                            +92 335 3242342
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* swiper-slide end*/}
            </div>
          </div>
          {/* Add Pagination */}
          <div className="swiper-pagination" />
          {/* swiper navigation */}
        </div>
        <img
          className="absolute left-0 bottom-0"
          src="/images/hero/star.png"
          width={112}
          height={138}
          alt="icon"
        />
      </section>
      {/* Hero section end */}
    </div>
  );
}

export default Hero;
