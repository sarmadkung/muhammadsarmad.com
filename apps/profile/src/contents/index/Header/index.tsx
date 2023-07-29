import clsx from 'clsx';

import HeaderCta from '@/contents/index/Header/HeaderCta';
import HeaderTechStack from '@/contents/index/Header/HeaderTechStack';
import HeaderTitle from '@/contents/index/Header/HeaderTitle';

const langs = [
  { title: 'Javascript', exp: '6+' },
  { title: 'TypeScript', exp: '6+' },
  { title: 'Nodejs', exp: '6+' },
  { title: 'Rust', exp: '3+' },
  { title: 'Go', exp: '2+' },
  { title: 'Python', exp: '3+' },
];
const frameworks = [
  { title: 'React Native', exp: '6+' },
  { title: 'ReactJs', exp: '6+' },
  { title: 'NextJs', exp: '4+' },
  { title: 'Graphql', exp: '5+' },
  { title: 'Tauri', exp: '1+' },
  { title: 'Actix', exp: '1+' },
];
const techs = [
  { title: 'RestApi', exp: '6+' },
  { title: 'RealTime Apps', exp: '6+' },
  { title: 'Mobile apps development', exp: '6+' },
  { title: 'Graphql', exp: '6+' },
  { title: 'Rust', exp: '6+' },
];

const dbs = [
  { title: 'Mongodb', exp: '6+' },
  { title: 'Postgres', exp: '4+' },
  { title: 'Redis', exp: '4+' },
];
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
            <HeaderTechStack
              color="text-green-700"
              techs={langs}
              title="Favorite Languages"
            />
          </div>

          <div className={clsx('lg:mt-26 mt-10')}>
            <HeaderTechStack
              color="text-green-600"
              techs={frameworks}
              title="App Development Framework / libraries"
            />
          </div>

          <div className={clsx('lg:mt-26 mt-10')}>
            <HeaderTechStack
              color="text-green-500"
              techs={dbs}
              title="Databases / ORMs / Libraries"
            />
          </div>
          <div className={clsx('lg:mt-26 mt-10')}>
            <HeaderTechStack
              color="text-green-400"
              techs={techs}
              title="Techs / tools"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
