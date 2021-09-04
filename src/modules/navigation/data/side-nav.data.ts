import { SideNavItems, SideNavSection } from '@modules/navigation/models';

export const sideNavSectionss: SideNavSection[] = [
    {
        text: 'CORES',
        items: ['dashboard'],
    },
    {
        text: 'EXAM',
        items: ['layouts', 'pages'],
    },
    {
        text: 'PROFILE',
        items: ['profile'],
    },
];
export const sideNavSectionst: SideNavSection[] = [
    {
        text: 'CORET',
        items: ['dashboard'],
    },
    {
        text: 'EXAM',
        items: ['layouts'],
    },
    {
        text: 'PROFILE',
        items: ['profile'],
    },
];

export const sideNavItemst: SideNavItems = {
    
    dashboard: {
        icon: 'tachometer-alt',
        text: 'DashboardT',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Exam Details',
        submenu: [
            {
                text: 'Details',
                link: '/teacherview/mainexam',
            },
            {
                text: 'Result',
                link: '/teacherview/resultexam',
            },
        ],
    },
    // pages: {
    //     icon: 'book-open',
    //     text: 'Pages',
    //     submenu: [
    //         {
    //             text: 'Authentication',
    //             submenu: [
    //                 {
    //                     text: 'Login',
    //                     link: '/auth/login',
    //                 },
    //                 {
    //                     text: 'Register',
    //                     link: '/auth/register',
    //                 },
    //                 {
    //                     text: 'Forgot Password',
    //                     link: '/auth/forgot-password',
    //                 },
    //             ],
    //         },
    //         // {
    //         //     text: 'Error',
    //         //     submenu: [
    //         //         {
    //         //             text: '401 Page',
    //         //             link: '/error/401',
    //         //         },
    //         //         {
    //         //             text: '404 Page',
    //         //             link: '/error/404',
    //         //         },
    //         //         {
    //         //             text: '500 Page',
    //         //             link: '/error/500',
    //         //         },
    //         //     ],
    //         // },
    //     ],
    // },
    profile: {
        icon: 'chart-area',
        text: 'Profile',
        link: '/profile/profile',
    },
    // tables: {
    //     icon: 'table',
    //     text: 'Tables',
    //     link: '/tables',
    // },
};
export const sideNavItemss: SideNavItems = {
    
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard S',
        link: '/dashboard',
    },
    layouts: {
        icon: 'columns',
        text: 'Exam Details',
        submenu: [
            {
                text: 'Static Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Sidenav',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    {
                        text: 'Login',
                        link: '/auth/login',
                    },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    {
                        text: 'Forgot Password',
                        link: '/auth/forgot-password',
                    },
                ],
            },
            // {
            //     text: 'Error',
            //     submenu: [
            //         {
            //             text: '401 Page',
            //             link: '/error/401',
            //         },
            //         {
            //             text: '404 Page',
            //             link: '/error/404',
            //         },
            //         {
            //             text: '500 Page',
            //             link: '/error/500',
            //         },
            //     ],
            // },
        ],
    },
    profile: {
        icon: 'chart-area',
        text: 'Profile',
        link: '/profile/profile',
    },
    // tables: {
    //     icon: 'table',
    //     text: 'Tables',
    //     link: '/tables',
    // },
};
