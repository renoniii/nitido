import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const classes = cva(
    "border h-12 rounded-full px-6 font-medium inline-flex items-center justify-center",
    {
        variants: {
            variant: {
                primary: "bg-magenta text-white border-magenta",
                secondary: "border-white text-white bg-transparent",
            },
            size: {
                sm: "h-10 text-sm",
            },
        },
    }
);

type ButtonProps =
    | ({ as?: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: "a"; href: string } & AnchorHTMLAttributes<HTMLAnchorElement>);

export default function Button(
    props: ButtonProps & { variant: "primary" | "secondary"; size?: "sm" }
) {
    const { variant, className, size, as = "button", ...otherProps } = props;

    const mergedClassName = twMerge(classes({ variant, size, className }));

    if (as === "a") {
        return (
            <a
                className={mergedClassName}
                {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
            />
        );
    }

    return (
        <button
            className={mergedClassName}
            {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
        />
    );
}
