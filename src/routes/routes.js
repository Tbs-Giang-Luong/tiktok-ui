//public Route
import { Home } from '~/pages';
import { Following } from '~/pages';
import { Profile } from '~/pages';
import { Upload } from '~/pages';
import { Live } from '~/pages';
import { HeaderOnly } from '~/layouts';

import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
