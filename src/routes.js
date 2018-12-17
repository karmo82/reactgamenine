import WelcomePage from './pages/welcome.page';
import LoginPage  from './pages/login.page';
import GameNine from './pages/game-nine.page';
import Shops from './pages/shops-index.page';
import ShopEdit from './pages/shop-edit.page';

const routes = [
    {
        path: '/',
        component: WelcomePage
    },
    {
        path: '/home',
        component: WelcomePage
    },
    {
        path: '/welcome',
        component: WelcomePage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/gamenine',
        component: GameNine
    },
    {
        path: '/shops',
        component: Shops
    },
    {
        path: '/shop/:id',
        component: ShopEdit
    }


];

export default routes;