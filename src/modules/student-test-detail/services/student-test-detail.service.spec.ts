import { TestBed } from '@angular/core/testing';

import { StudentTestDetailService } from './student-test-detail.service';

describe('StudentTestDetailService', () => {
    let studentTestDetailService: StudentTestDetailService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [StudentTestDetailService],
        });
        studentTestDetailService = TestBed.inject(StudentTestDetailService);
    });

    describe('getStudentTestDetail$', () => {
        it('should return Observable<StudentTestDetail>', () => {
            expect(studentTestDetailService).toBeDefined();
        });
    });
});
