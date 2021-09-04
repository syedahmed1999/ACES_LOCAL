/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { TeacherTestDetailModule } from './teacher-test-detail.module';

/* Containers */
import * as teacherTestDetailContainers from './containers';

/* Guards */
import * as teacherTestDetailGuards from './guards';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: 'teacherview',
        pathMatch: 'full',
        redirectTo: 'mainteachertest',
    },
    {
        path: 'mainexam',
        canActivate: [],
        component: teacherTestDetailContainers.MainTeachertestComponent,
        data: {
            title: 'Exam Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Exams',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
    {
        path: 'resultexam',
        canActivate: [],
        component: teacherTestDetailContainers.ResultTeachertestComponent,
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
        component: teacherTestDetailContainers.SubTeachertestComponent,
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
    {
        path: 'setExam',
        canActivate: [],
        component: teacherTestDetailContainers.SetTeachertestComponent,
        data: {
            title: 'Set Exam',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Set Exam',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [TeacherTestDetailModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TeacherTestDetailRoutingModule {}
