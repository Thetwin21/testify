import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { loginClasses } from "../../pages/auth/LoginClasses";

interface ResetPasswordProps {
  isOpen: boolean;
  onClose: () => void;
  handleResetPassword:  () => Promise<void>;
  resetPasswordEmail: string;
  resetPasswordSuccess: string | null;
  resetPasswordError: string | null;
  setResetPasswordEmail: Dispatch<SetStateAction<string>>
}

const ResetPassword: FC<ResetPasswordProps> = (props) => {
  const { buttonStyle, inputStyle } = loginClasses;
  const { isOpen, onClose ,handleResetPassword, resetPasswordEmail, resetPasswordSuccess, resetPasswordError, setResetPasswordEmail} = props;

  return (
    <div
      className="fixed bg-[#00000037] left-0 right-0 top-0 bottom-0 z-10 flex justify-center items-center"
      style={{ transform: `translateY(${isOpen ? "0%" : "-100%"})` }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 flex flex-col gap-y-2">
        {resetPasswordError && <span className="text-red-500 text-base">{resetPasswordError}</span>}
        <h1 className="text-2xl font-bold mb-4">Password Reset</h1>
        <input
          className={`{ px-3 py-2  shadow-sm rounded-lg ${inputStyle}`}
          type="email"
          value={resetPasswordEmail}
          placeholder="email"
          id=""
          onChange={(e) => setResetPasswordEmail(e.target.value)}
        />
        {resetPasswordSuccess && <span className="text-green-500 text-base ">{resetPasswordSuccess}</span> }
        <div className="flex gap-x-2 my-5">
          <button className={`${buttonStyle}`} onClick={handleResetPassword}>Reset Password</button>
          <button
            onClick={onClose}
            className={`bg-red-500 hover:bg-red-600 ${buttonStyle}`}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
