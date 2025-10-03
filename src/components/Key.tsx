import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-14 dark:bg-neutral-300 bg-neutral-500 inline-flex items-center justify-center rounded-2xl text-xl dark:text-neutral-950 text-white font-medium",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
}
