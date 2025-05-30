import { Outlet } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Illustration from '../pages/Illustration';
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
import LogofolioPage from '../pages/Illustration/LogofolioPage';
import UMassDiningPage from '../pages/Illustration/UMassDiningPage';
import ContentCreation from '../pages/ContentCreation';
import ContentCreationPage from '../pages/ContentCreation/ContentCreationPage';
import InstagramPage from '../pages/ContentCreation/InstagramPage';

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
                        path: 'umass-dining',
                        element: <UMassDiningPage />
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
                        path: 'logofolio',
                        element: <LogofolioPage />
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
                path: 'content',
                element: <ContentCreation />,
                children: [
                    {
                        index: true,
                        element: <ContentCreationPage />
                    },
                    {
                        path: 'instagram',
                        element: <InstagramPage />
                    }
                ]
            },
            {
                path: 'nutri',
                element:<Outlet/>,
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
