import { createWebHistory, createRouter } from "vue-router";
import IntroPage from '@/views/IntroPage'
import GetStarted from '@/views/GetStarted'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import CoursePage from '@/views/CoursePage'
import SettingPage from '@/views/SettingPage'
import ProgressPage from '@/views/ProgressPage'
import VideoPage from '@/views/VideoPage'
import ChatPage from '@/views/ChatPage'
import ReviewPage from '@/views/ReviewPage'
import TestPage from '@/views/TestPage'

const routes = [
    {
        path: '/',
        name: 'home',
        component: IntroPage
    },
    {
        path: '/start',
        name: 'getstarted',
        component: GetStarted
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage
    },
    {
        path: '/course',
        name: 'CoursePage',
        component: CoursePage
    },
    {
        path: '/progress',
        name: 'ProgressPage',
        component: ProgressPage
    },
    {
        path: '/setting',
        name: 'SettingPage',
        component: SettingPage
    },
    {
        path: '/video',
        name: 'VideoPage',
        component: VideoPage
    },
    {
        path: '/chat',
        name: 'ChatPage',
        component: ChatPage
    },
    {
        path: '/review',
        name: 'ReviewPage',
        component: ReviewPage
    },
    {
        path: '/test',
        name: 'TestPage',
        component: TestPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
