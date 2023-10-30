import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

type Tech = {
  title: string;
  exp: string;
};

function HeaderTechStack({
  color,
  techs,
  title,
}: {
  color: string;
  techs: Tech[];
  title: string;
}) {
  return (
    <div>
      <m.h1
        className={clsx('text-title')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        {title}
      </m.h1>
      <m.ul
        className={clsx(
          'mt-5 flex items-center gap-3.5',
          'text-slate-700',
          'dark:text-slate-300'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        {techs.map((tech) => (
          <>
            <m.li variants={animation}>
              <m.div
                className={clsx(
                  'dark:border-divider-dark light:border-divider-light flex flex-row items-center rounded-full border bg-transparent px-4 py-1'
                )}
              >
                <m.h2 className={clsx(color)}>{tech.title}</m.h2>
                <m.div className="ml-2 text-xs text-slate-500">
                  ( {tech.exp} yrs )
                </m.div>
              </m.div>
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
