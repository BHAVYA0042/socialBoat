import { Disclosure, Menu,} from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import {useState} from "react";

export default function Example(props) {
    const [input,setInput]=useState({
      category:"",
      number: ""
    })
    function changeHandler(event){
      const {name,value}=event.target;
      setInput(prevValue=>{
        return{
          ...prevValue,
          [name]:value
        }
      });
      event.preventDefault();
    }
    function submitHandler(event){
      event.preventDefault();
      props.onAdd(input);
      setInput({
        category:"",
        number: ""
      })
    }
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <img className="inline-block mr-3 h-6 sm:h-9" src="images\8443582-f39744d1a16d4feebef2a81d98bc5ab3-medium_jpg.webp" alt="" />
                <span className="inline-block self-center text-xl font-semibold whitespace-nowrap text-white">SocialBot</span>
     
                </div>


                <div className="hidden sm:block sm:ml-6">
                  {/* <div className="flex space-x-4"> */}
                  <form className="flex space-x-4" onSubmit={submitHandler}>   
                    <input type="text" name="category" value={input.category} onChange={changeHandler} id="search-navbar" className="  inline-block p-2 mr-5 pl-10 w-half text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category..."/>
                    <input type="text" name="number" value={input.number} onChange={changeHandler} id="search-navbar" className=" inline-block p-2 pl-10 w-half text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number..."/>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                  </form>
                  {/* </div> */}
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full ">
                      {/* <span className="sr-only">Open user menu</span> */}
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </Menu>
                </div>
                
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* <div className="px-2 pt-2 pb-3 space-y-1"> */}
            <form className="px-2 pt-2 pb-3 space-y-1" onSubmit={submitHandler}>   
                    <input type="text" name="category" value={input.category} onChange={changeHandler} id="search-navbar" className=" inline-block p-2 mr-5 pl-10 w-half text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category..."/>
                    <input type="text" name="number" value={input.number} onChange={changeHandler} id="search-navbar" className=" inline-block p-2 pl-10 w-half text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number..."/>
                    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                  </form>
            {/* </div> */}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}