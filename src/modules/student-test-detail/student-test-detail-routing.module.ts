/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { StudentTestDetailModule } from './student-test-detail.module';

/* Containers */
import * as studentTestDetailContainers from './containers';

/* Guards */
import * as studentTestDetailGuards from './guards';

/* Routes */
export const ROUTES: Routes = [
    // {
    //     path: '',
    //     canActivate: [],
    //     component: studentTestDetailContainers.StudentTestDetailComponent,
    // },
];

@NgModule({
    imports: [StudentTestDetailModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class StudentTestDetailRoutingModule {}
