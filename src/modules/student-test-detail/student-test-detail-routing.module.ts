/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { StudentTestDetailModule } from './student-test-detail.module';

/* Containers */
import * as studentTestDetailContainers from './containers';

/* Guards */
import * as studentTestDetailGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: 'studentview',
        pathMatch: 'full',
        redirectTo: 'studentsubjectdetail',
    },
    {
        path: 'takeExam',
        canActivate: [],
        component: studentTestDetailContainers.TakeExamComponent,
        data: {
            title: 'Exam Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'TakeExam',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'resultexam',
        canActivate: [],
        component: studentTestDetailContainers.ResultExamComponent,
        data: {
            title: 'Results',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Results',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'studentsubjectdetail',
        canActivate: [],
        component: studentTestDetailContainers.DetailsExamComponent,
        data: {
            title: 'Student Exam Detail',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Student Exam Detail',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [StudentTestDetailModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class StudentTestDetailRoutingModule {}
