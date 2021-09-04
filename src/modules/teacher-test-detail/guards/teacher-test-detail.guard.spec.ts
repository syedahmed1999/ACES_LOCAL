import { TestBed } from '@angular/core/testing';

import { TeacherTestDetailGuard } from './teacher-test-detail.guard';

describe('TeacherTestDetail Guards', () => {
    let teacherTestDetailGuard: TeacherTestDetailGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [TeacherTestDetailGuard],
        });
        teacherTestDetailGuard = TestBed.inject(TeacherTestDetailGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            teacherTestDetailGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
