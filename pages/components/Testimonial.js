import React from 'react';
export default class Testimonial extends React.Component {
  render() {
    return (
      <section
        class="py-24 md:pb-28 bg-white"
        //style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
      >
        <div class="container px-4 mx-auto">
          <div class="relative max-w-5xl sm:px-6 pb-6 mb-10 mx-auto text-center">
            <img
              class="absolute top-0 left-0"
              src="flex-ui-assets/elements/testimonials/quote-top-red.svg"
              alt=""
            />
            <img
              class="absolute bottom-0 right-0"
              src="flex-ui-assets/elements/testimonials/quote-down-red.svg"
              alt=""
            />
            <div class="relative">
              <span class="inline-block py-px px-2 mb-4 text-xs leading-5 text-red-500 bg-red-100 font-medium uppercase rounded-9xl"></span>
              <h2 class="text-2xl md:text-5xl font-semibold tracking-tighter">
                തിരുനാളുകളുടെ തിരുനാളായ ഉയർപ്പിൻറെ മംഗളങ്ങൾ ഏവർക്കും
                ആശംസിക്കുന്നു.
              </h2>
            </div>
          </div>
          <div class="text-center mb-8">
            <img
              class="w-24 h-24 mx-auto mb-6 rounded-full"
              src="http://eparchyofgreatbritain.org/wp-content/uploads/2021/05/Bishop-Srampikkal-450-x-600.png"
              alt=""
            />
            <h3 class="mb-2 text-xl md:text-2xl font-semibold">
              Mar Joseph Srampickal
            </h3>
            <span class="text-lg text-coolGray-500 font-medium">
              Bishop of the Syro-Malabar Eparchy of Great Britain
            </span>
          </div>
          <div class="text-center">
            <button class="inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100"></button>
            <button class="inline-block h-3 w-3 mr-3 rounded-full bg-red-500"></button>
            <button class="inline-block h-3 w-3 rounded-full bg-coolGray-100"></button>
          </div>
        </div>
      </section>
    );
  }
}
