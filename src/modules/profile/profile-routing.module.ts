/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { ProfileModule } from './profile.module';

/* Containers */
import * as profileContainers from './containers';

/* Guards */
import * as profileGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: 'profile',
        pathMatch: 'full',
        redirectTo: 'profile',
    },
    {
        path: 'profile',
        canActivate: [],
        component: profileContainers.ProfilecComponent,
        data: {
            title: 'Profile',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Profile',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'profile-edit',
        canActivate: [],
        component: profileContainers.ProfileEditComponent,
        data: {
            title: 'Edit Profile',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Edit Profile',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ProfileModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ProfileRoutingModule {}
