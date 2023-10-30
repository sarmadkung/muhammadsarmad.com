import clsx from 'clsx';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import CleanIntuitive from '@/contents/index/CleanIntuitive';
import DetailOriented from '@/contents/index/DetailOriented';
import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import PrettyOptimized from '@/contents/index/PrettyOptimized';
import Quote from '@/contents/index/Quote';

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('-mt-12 mb-12', 'md:mb-24 md:mt-0')}>
        <QuoteSection />
      </div>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <CleanIntuitive />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <DetailOriented />
      </section>
      <section className={clsx('mb-12', 'lg:mb-24')}>
        <PrettyOptimized />
      </section>
    </>
  );
}

export default IndexContents;
