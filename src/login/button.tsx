import React from "react";

interface ButtonProps {
  type: string;
  value: string;
}
export const Button = ({ type, value }: ButtonProps) => {
  return <input type={type} value={value} />;
};
