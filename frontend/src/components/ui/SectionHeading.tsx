import clsx from "clsx";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
  headingClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4";
};

const SectionHeading = ({
  children,
  className,
  headingClassName,
  as: Tag = "h1",
}: SectionHeadingProps) => {
  return (
    <div className={clsx("flex w-full justify-center", className)}>
      <Tag
        className={clsx(
          `relative inline-block px-4 text-3xl font-semibold text-white md:text-6xl
          
          before:absolute
          before:-bottom-3
          before:-left-3
          before:h-10
          before:w-10
          before:rounded-bl-3xl
          before:border-b-[5px]
          before:border-l-[5px]
          before:border-lime-200
          before:content-['']

          md:before:h-16
          md:before:w-16

          after:absolute
          after:-top-1
          after:-right-3
          after:h-10
          after:w-10
          after:rounded-tr-3xl
          after:border-t-4
          after:border-r-[5px]
          after:border-lime-200
          after:content-['']

          md:after:h-16
          md:after:w-16`,
          headingClassName
        )}
      >
        {children}
      </Tag>
    </div>
  );
};

export default SectionHeading;