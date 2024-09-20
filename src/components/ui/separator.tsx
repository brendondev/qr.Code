import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Separator(props: ComponentProps<"div">) {
	return (
		<div
			{...props}
			className={twMerge("h-px bg-emerald-900 w-full my-5", props.className)}
		/>
	);
}
