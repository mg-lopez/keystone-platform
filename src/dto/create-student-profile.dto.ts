export class CreateStudentProfileDto {
  nationality: string;
  highSchoolGrades?: string;
  admissionExamGrades?: string;
  universityGrades?: string;
  universityOfferLetterUrl?: string;
  desiredUniversity?: string;
  desiredCourse?: string;
  languageProficiency?: string;
  cvUrl?: string;
  personalStory?: string;
  videoUrl?: string;
  supportingMedia?: { photos?: string[]; letters?: string[] };
  fundingRequest?: {
    tuitionAmount?: number;
    livingCosts?: number;
    fundingType?: 'donation' | 'loan' | 'both';
  };
}