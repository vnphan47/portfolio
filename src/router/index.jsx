import { Outlet } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Illustration from '../pages/Illustration';
import LogoFolio from '../pages/Logofolio';
import NutriBlog from '../pages/NutriBlog';
import NutriBlogStudy from '../pages/NutriBlog/NutriBlogStudy';
import NutriBlogAntioxidants from '../pages/NutriBlog/NutriBlogAntioxidants';
import Kitchen from '../pages/Illustration/kitchen';
import NftPage from '../pages/Illustration/NftPage';
import VeggiesPage from '../pages/Illustration/VeggiesPage';
import BlenderPage from '../pages/Illustration/BlenderPage';
import ArtsPage from '../pages/Illustration/ArtsPage';
import TalkShow from '../pages/Illustration/TalkShow';
import Design from '../pages/Design';
import FoodPlayPage from '../pages/Design/FoodPlayPage';
import RobosPage from '../pages/Design/RobosPage';
import IllustrationPage from '../pages/Illustration/IllustrationPage';
import EducationPage from '../pages/Illustration/EducationPage';

export const router = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'illustration',
                element: <Illustration />,
                children: [
                    {
                        index: true,
                        element: <IllustrationPage />
                    },
                    {
                        path: 'kitchen',
                        element: <Kitchen />
                    },
                    {
                        path: 'nft',
                        element: <NftPage />
                    },
                    {
                        path: 'veggies',
                        element: <VeggiesPage />
                    },
                    {
                        path: 'blender',
                        element: <BlenderPage />
                    },
                    {
                        path: 'arts',
                        element: <ArtsPage />
                    },
                    {
                        path: 'talkshow',
                        element: <TalkShow />
                    },
                    {
                        path: 'activity',
                        element: <EducationPage />
                    }
                ]
            },
            {
                path: 'design',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Design />
                    },
                    {
                        path: 'foodplay',
                        element: <FoodPlayPage />
                    },
                    {
                        path: 'robos',
                        element: <RobosPage />
                    }
                ]
            },
            {
                path: 'logofolio',
                element: <LogoFolio />
            },
            {
                path: 'nutri',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <NutriBlog />
                    },
                    {
                        path: 'study',
                        element: <NutriBlogStudy />
                    },
                    {
                        path: 'antioxidants',
                        element: <NutriBlogAntioxidants />
                    }
                ]
            }
        ]
    }
];
