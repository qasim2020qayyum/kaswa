import React from "react";

function HeaderTop() {
  return (
    <div>
      {/* header top start */}
      <div className="bg-primary font-recoleta text-white py-[11px]">
        <div className="container">
          <div className="grid items-center grid-cols-12 gap-x-[30px]">
            <div className="col-span-12 sm:col-span-6 text-center sm:text-left">
              <p>
                Have a question?{" "}
                <a className="hover:text-secondary" href="tel:9985254784">
                  +92 335 3242342
                </a>
              </p>
            </div>
            <div className="col-span-12 sm:col-span-6 text-center sm:text-right">
              <p>Visit us: 9am to 10 pm ( Mon - Fri)</p>
            </div>
          </div>
        </div>
      </div>
      {/* header top end */}
    </div>
  );
}

export default HeaderTop;
