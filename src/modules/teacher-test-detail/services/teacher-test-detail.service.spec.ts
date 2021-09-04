import { TestBed } from '@angular/core/testing';

import { TeacherTestDetailService } from './teacher-test-detail.service';

describe('TeacherTestDetailService', () => {
    let teacherTestDetailService: TeacherTestDetailService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TeacherTestDetailService],
        });
        teacherTestDetailService = TestBed.inject(TeacherTestDetailService);
    });

    describe('getTeacherTestDetail$', () => {
        it('should return Observable<TeacherTestDetail>', () => {
            expect(teacherTestDetailService).toBeDefined();
        });
    });
});
