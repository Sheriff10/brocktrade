import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const navigation = [
      { name: "About", href: "/#about" },
      { name: "Why choose us", href: "/#choose" },
      { name: "Stake", href: "/stake" },
      { name: "Solutions", href: "/#solutions" },
      { name: "Faqs", href: "/#faqs" },
   ];

   return (
      <header className="fixed inset-x-0 top-0 z-50 bg-neutral-900 bg-opacity-30 backdrop-blur-xl text-gray-200">
         <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
         >
            <div className="flex lg:flex-1">
               <a href="#" className="-m-1.5 p-1.5">
                  {/* <span className="sr-only">Your Company</span>
                  <img
                     className="h-8 w-auto"
                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                     alt=""
                  /> */}
                  <span className="text-white font-bold text-2xl">Brock<span className="text-cyan-300">Trade</span></span>
               </a>
            </div>
            <div className="flex lg:hidden">
               <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
               >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
               </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
               {navigation.map((item) => (
                  <a
                     key={item.name}
                     href={item.href}
                     className="text-sm font-semibold leading-6 text-gray-200"
                  >
                     {item.name}
                  </a>
               ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
               <a
                  href="https://brocktrade.gitbook.io/brocktrade/"
                  className="text-sm font-semibold leading-6 text-gray-900 btn bg-cyan-300 "
               >
                  Read Whitepaper <span aria-hidden="true">&rarr;</span>
               </a>
            </div>
         </nav>


         <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
         >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
               <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                     <span className="sr-only">Your Company</span>
                  <span className="text-white font-bold text-2xl">Brock<span className="text-cyan-300">Trade</span></span>

                  </a>
                  <button
                     type="button"
                     className="-m-2.5 rounded-md p-2.5 text-cyan-300"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     <span className="sr-only text-cyan-300">Close menu</span>
                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
               </div>
               <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                     <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                           <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-neutral-900"
                           >
                              {item.name}
                           </a>
                        ))}
                     </div>
                     <div className="py-6">
                        <a
                           href="https://brocktrade.gitbook.io/brocktrade/"
                           className="-mx-3 btn bg-cyan-300  block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                           Read Whitepaper
                        </a>
                     </div>
                  </div>
               </div>
            </Dialog.Panel>
         </Dialog>
      </header>
   );
}
