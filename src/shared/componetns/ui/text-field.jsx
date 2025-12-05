import React from "react";

export default function TextField({
  label,
  name,
  type = "string",
  register,
  errors,
}) {
  const hasError = errors && errors[name];
  const errorMessage = hasError ? errors[name].message : "";
  return (
    <div className="flex flex-col gap-y-2.5">
      <div className="flex flex-col gap-y-3">
        <label className="text-[12px] font-bold" htmlFor={name}>
          {label}
        </label>
        <input
          autoComplete="off"
          {...register(name)}
          name="name"
          type={type}
          className="border border-white "
        />
      </div>
      {hasError && (
        <span className="text-[12px] text-error"> {errorMessage}</span>
      )}
    </div>
  );
}
