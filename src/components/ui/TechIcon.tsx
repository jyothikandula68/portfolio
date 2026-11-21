import React from 'react';
import {
  SiAmazonaws,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiMicrosoftazure,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const techIconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Redux: SiRedux,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  AWS: SiAmazonaws,
  Azure: SiMicrosoftazure,
};

const techColors: Record<string, string> = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  React: '#61DAFB',
  Redux: '#764ABC',
  'Tailwind CSS': '#06B6D4',
  'Node.js': '#339933',
  GraphQL: '#E10098',
  Redis: '#DC382D',
  PostgreSQL: '#4169E1',
  MySQL: '#4479A1',
  MongoDB: '#47A248',
  AWS: '#FF9900',
  Azure: '#0078D4',
  NestJS: '#E0234E',
};

const themeAwareIcons = new Set(['Next.js', 'Express']);

export function TechIcon({ name }: { name: string }) {
  const Icon = techIconMap[name];

  if (!Icon) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/20 text-[10px] font-bold text-primary">
        {name.charAt(0)}
      </span>
    );
  }

  if (themeAwareIcons.has(name)) {
    return (
      <Icon
        className={`h-5 w-5 shrink-0 ${
          name === 'Next.js' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-300'
        }`}
      />
    );
  }

  return <Icon className="h-5 w-5 shrink-0" style={{ color: techColors[name] }} />;
}
