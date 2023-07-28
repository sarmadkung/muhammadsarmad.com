import clsx from 'clsx';

import HeaderCta from '@/contents/index/Header/HeaderCta';
import HeaderImage from '@/contents/index/Header/HeaderImage';
import HeaderTechStack from '@/contents/index/Header/HeaderTechStack';
import HeaderTitle from '@/contents/index/Header/HeaderTitle';

function Header() {
  return (
    <header
      id="page-header"
      className={clsx('background-grid background-grid--fade-out pb-20 pt-32')}
    >
      <div className={clsx('content-wrapper p-0')}>
        <div className={clsx('relativ')}>
          <div className={clsx('relative z-10')}>
            <HeaderTitle />
          </div>
          <div className={clsx('mt-6 md:mt-8')}>
            <HeaderCta />
          </div>
          <div className={clsx('mt-20 lg:mt-36')}>
            <HeaderTechStack />
          </div>
          {/* <div
            className={clsx(
              'pointer-events-none -top-36 right-0 z-0 hidden select-none',
              'lg:block'
            )}
          >
            <HeaderImage />
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
