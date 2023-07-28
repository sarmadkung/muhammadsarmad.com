import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  FigmaIcon,
  FramerMotionIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from '@/components/Icons';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const colors = [
  'text-teal-500',
  'text-green-500',
  'text-teal-700',
  'text-indigo-300',
  'text-green-500',
  'text-indigo-500',
  'text-green-800',
  'text-indigo-300',
];

const techs = [
  'ReactJs',
  'React Native',
  'Nodejs',
  'RestApi',
  'Graphql',
  'Rust',
];

function HeaderTechStack() {
  return (
    <div>
      <m.strong
        className={clsx('text-xl text-green-600')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Current favorite tech stack/tools:
      </m.strong>
      <m.ul
        className={clsx(
          'mt-5 flex items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        {techs.map((tech, index) => (
          <>
            <m.li variants={animation}>
              <strong
                className={clsx(
                  'dark:border-divider-dark light:border-divider-light relative z-10 flex-1 rounded-full border bg-transparent px-4 py-1',
                  colors[index]
                )}
              >
                {tech}
              </strong>
            </m.li>
            <m.li variants={animation}>
              <div
                className={clsx('h-3 w-[1px] bg-slate-300 dark:bg-slate-700')}
              />
            </m.li>
          </>
        ))}
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
