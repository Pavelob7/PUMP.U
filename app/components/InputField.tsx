import React, { useState } from "react";
import "../../public/styles/InputField.scss"


interface InputFieldProps {
    type: "text" | "email" | "password";
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   type,
                                                   placeholder,
                                                   value,
                                                   onChange,
                                               }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div style={{ position: "relative", width: "100%", marginBottom: "16px" }}>
            <input
                type={type === "password" && passwordVisible ? "text" : type}
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                style={{
                    width: "100%",
                    padding: "8px 40px 8px 8px",
                    boxSizing: "border-box",
                }}
            />
            {type === "password" && (
                <span
                    onClick={togglePasswordVisibility}
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        userSelect: "none",
                    }}
                >
          {passwordVisible ? (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
              >
                  <path
                      d="M12 14.0001C12.5305 14.0001 13.0393 13.7894 13.4144 13.4143C13.7895 13.0392 14.0002 12.5305 14.0002 12C14.0002 11.4695 13.7895 10.9608 13.4144 10.5857C13.0393 10.2105 12.5305 9.99982 12 9.99982C11.4696 9.99982 10.9608 10.2105 10.5857 10.5857C10.2106 10.9608 9.99988 11.4695 9.99988 12C9.99988 12.5305 10.2106 13.0392 10.5857 13.4143C10.9608 13.7894 11.4696 14.0001 12 14.0001Z"
                      stroke="black"
                      strokeWidth="0.96"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
                  <path
                      d="M21 12C21 12 18 18 12 18C6 18 3 12 3 12C3 12 6 6 12 6C18 6 21 12 21 12Z"
                      stroke="black"
                      strokeWidth="0.96"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  />
              </svg>
          ) : (
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
              >
                  <g opacity="0.5">
                      <path
                          d="M12 14.0001C12.5305 14.0001 13.0392 13.7894 13.4143 13.4143C13.7894 13.0392 14.0001 12.5305 14.0001 12C14.0001 11.4695 13.7894 10.9608 13.4143 10.5857C13.0392 10.2105 12.5305 9.99982 12 9.99982C11.4695 9.99982 10.9608 10.2105 10.5857 10.5857C10.2105 10.9608 9.99982 11.4695 9.99982 12C9.99982 12.5305 10.2105 13.0392 10.5857 13.4143C10.9608 13.7894 11.4695 14.0001 12 14.0001Z"
                          stroke="black"
                          strokeWidth="0.96"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                      <path
                          d="M21 12C21 12 18 18 12 18C6 18 3 12 3 12C3 12 6 6 12 6C18 6 21 12 21 12Z"
                          stroke="black"
                          strokeWidth="0.96"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                      <line
                          x1="3.34268"
                          y1="3.6359"
                          x2="20.3427"
                          y2="19.6359"
                          stroke="black"
                      />
                  </g>
              </svg>
          )}
        </span>
            )}
        </div>
    );
};

export default InputField;
