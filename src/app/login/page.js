import React from "react";

const login = () => {
  return (
    <div className="bg-gray-200 h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-[21rem] h-[25rem] shadow-2xl rounded-xl overflow-hidden">
        <div className="">
          <h1 className="bg-rose-800 text-3xl text-center text-white pt-7 pb-4 font-semibold underline underline-offset-4">
            User Login
          </h1>
          <div className="h-[20rem] flex pt-10 justify-center">
            <form className="flex flex-col items-center gap-5">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="E-mail">E-mail</label>
                <input
                  className="px-2 h-8 rounded-lg border-black border-2 outline-none"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Password">Password</label>
                <input
                  className="px-2 h-8 rounded-lg border-black border-2 outline-none"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <button className="px-6 py-1 rounded-lg bg-blue-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
