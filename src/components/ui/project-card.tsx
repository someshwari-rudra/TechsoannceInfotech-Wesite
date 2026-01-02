"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  link: string;
  number: string;
  imageOnRight?: boolean;
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      category,
      technologies,
      link,
      number,
      imageOnRight = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8",
          imageOnRight && "lg:flex-row-reverse",
          className
        )}
        {...props}
      >
        {/* Number Badge */}
        <div className="absolute -top-4 lg:top-8 right-4 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 z-20 w-16 h-16 rounded-full bg-gradient-to-r from-brand-cyan to-[#29619e] flex items-center justify-center shadow-xl shadow-brand-cyan/40">
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="aspect-[4/3] lg:aspect-[16/10]">
              <img
                src={imgSrc}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 pt-8 lg:pt-0">
          {/* Category Badge */}
          <div className="inline-flex">
            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-cyan to-[#29619e] text-white text-xs font-bold uppercase tracking-wider shadow-md">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-brand-dark group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-cyan group-hover:to-[#29619e] group-hover:bg-clip-text transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base text-slate-600 leading-relaxed">
            {description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={link}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-cyan to-[#29619e] text-white font-semibold hover:shadow-2xl transition-all duration-300 hover:gap-3 w-fit shadow-lg shadow-brand-cyan/30 hover:brightness-110"
          >
            View Case Study
            <ArrowRight className="h-5 w-5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
