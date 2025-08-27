import React, { useState } from "react";

export default function InputField({
  label,
  type,
  name,
  value,
  onChange,
  error,
}) {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mb-4 relative">
      <label className="block font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={isPassword && show ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="w-full border-b p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
        autoComplete="off"
      />
      {isPassword && (
        <span
          className="absolute right-3 top-9 cursor-pointer select-none text-gray-500"
          onClick={() => setShow((s) => !s)}
        >
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.083 3.61 6.105 6 9.75 6 1.563 0 3.06-.362 4.396-1.01M6.53 6.53A9.956 9.956 0 0 1 12 6c3.645 0 7.667 2.39 9.75 6a10.477 10.477 0 0 1-1.284 1.987M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3l18 18"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12C4.333 8.39 8.355 6 12 6c3.645 0 7.667 2.39 9.75 6-2.083 3.61-6.105 6-9.75 6-3.645 0-7.667-2.39-9.75-6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          )}
        </span>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
