"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React, { useState } from "react";

import { FileUploader } from "./fileUploader";
import styles from "./style.module.scss";

const inputVariants = cva(styles.base, {
  variants: {
    size: { default: "" },
    variant: { default: styles.variant_default },
  },
  defaultVariants: { size: "default", variant: "default" },
});

const Input = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      inputError,
      label,
      icon,
      inputStyle,
      inputFloatingStyle,
      inputContainerStyle,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          styles.inputContainerStyle,
          inputContainerStyle
        )}
      >
        <div
          className={cn(
            styles.inputFloating,
            "form-floating",
            inputFloatingStyle,
            inputError && styles.inputErrorStyle
          )}
        >
          <input
            className={cn(
              styles.floatInput,
              inputVariants({ variant, size, className }),
              inputStyle,
              "form-control"
            )}
            ref={ref}
            {...props}
          />
          {label && (
            <label className={styles.labelCustom} for="floatingInput">
              {label}
            </label>
          )}
          {icon && <div className={styles.iconStyle}>{icon}</div>}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, rounded, rows = 5, label, inputError, ...props }, ref) => {

    return (
      <div
        className={`${styles.inputContainerStyle}`}
      >
        <div
          className={cn(
            styles.inputFloating,
            "form-floating",
            inputError && styles.inputErrorStyle
          )}
        >
          <textarea
            rows={rows}
            className={cn("form-control", className)}
            ref={ref}
            {...props}
          />
          {label && (
            <label className={styles.labelCustom} for="floatingInput">
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

const InputFile = React.forwardRef(
  (
    {
      className,
      variant,
      size,
      inputError,
      label,
      icon,
      inputStyle,
      inputFloatingStyle,
      inputContainerStyle,
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = useState("");
    const handleFile = (file) => {
      setFileName(file.name);
    };

    return (
      <div
        className={`${styles.inputContainerStyle}`}
      >
        <div
          className={cn(
            styles.inputFile,
            "form-floating",
            inputFloatingStyle,
            inputError && styles.inputErrorStyle
          )}
        >
          <FileUploader handleFile={handleFile} {...props} />
          {fileName ? (
            <p className={styles.filePath}>Uploaded file: {fileName}</p>
          ) : null}

          {label && (
            <label
              className={cn(
                styles.labelCustom,
                fileName && styles.labelCustomFloat
              )}
              for="floatingInput"
            >
              {label}
            </label>
          )}
        </div>
      </div>
    );
  }
);
InputFile.displayName = "InputFIle";

const Error = ({ className, children }) => (
  <p className={cn(styles.error, className)}>{children}</p>
);

export { Error, Input, InputFile, Textarea };
