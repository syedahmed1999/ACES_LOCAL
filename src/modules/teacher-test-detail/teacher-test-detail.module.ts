/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import * as $ from 'jquery'

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as teacherTestDetailComponents from './components';

/* Containers */
import * as teacherTestDetailContainers from './containers';

/* Guards */
import * as teacherTestDetailGuards from './guards';

/* Services */
import * as teacherTestDetailServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        NgxSpinnerModule
    ],
    providers: [...teacherTestDetailServices.services, ...teacherTestDetailGuards.guards],
    declarations: [...teacherTestDetailContainers.containers, ...teacherTestDetailComponents.components],
    exports: [...teacherTestDetailContainers.containers, ...teacherTestDetailComponents.components],
})
export class TeacherTestDetailModule {}
