/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { TestModule } from './test.module';

/* Containers */
import * as testContainers from './containers';
import { SBRouteData } from '@modules/navigation/models';

/* Guards */
import * as testGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: testContainers.TestComponent,
        data: {
            title: 'Charts',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Charts',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [TestModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TestRoutingModule {}
