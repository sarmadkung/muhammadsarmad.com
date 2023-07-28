import clsx from 'clsx';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  const controls = useAnimationControls();

  return (
    <div>
      <m.div
        className={clsx(
          'bold mb-1 flex items-center gap-1 text-slate-600',
          'md:mb-0 md:gap-2 md:text-2xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        Hi,
      </m.div>
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'mb-4 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-5xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            Muhammad
          </strong>{' '}
          Sarmad,{' '}
        </m.span>
        <m.h1
          className={clsx(
            'block text-base text-slate-600',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span>A</span>{' '}
          <strong
            className={clsx(
              'font-bold lowercase text-slate-700',
              'dark:text-slate-300'
            )}
          >
            Full stack software engineer (web and mobile).
          </strong>
          <p>
            having strong(6+ years) expertise in apps development.I am very
            strong in solving complex problems using the above techs and is
            focused on learning new techs and the best future software
            development approaches.
          </p>
          <p>
            Higher education(M.phil) includes Machine Learning, Deep Learning,
            Mathematical problem solutions, and data science
          </p>
          <span className={clsx('block')}>clean and modern UI design.</span>
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
