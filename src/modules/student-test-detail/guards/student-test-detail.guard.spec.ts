import { TestBed } from '@angular/core/testing';

import { StudentTestDetailGuard } from './student-test-detail.guard';

describe('StudentTestDetail Guards', () => {
    let studentTestDetailGuard: StudentTestDetailGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [StudentTestDetailGuard],
        });
        studentTestDetailGuard = TestBed.inject(StudentTestDetailGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            studentTestDetailGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
