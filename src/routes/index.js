import Home from '@/pages/Home'
import Following from "@/pages/Following";

// public
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
];

// private
const privateRoutes = [

];

export { publicRoutes, privateRoutes }