import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProp } = props;
    return (
        <div
            className={twMerge(
                "inline-flex border border-magenta gap-2 text-magenta font-bold px-3 py-1 rounded-full uppercase items-center",
                className
            )}
            {...otherProp}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}
