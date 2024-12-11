import * as yup from 'yup';

export const useAuthValidationSchema = () => yup.object({
    username: yup.string().required().label('Username'),
    password: yup.string().required().label('Password'),
});

export const useProfileValidationSchema = () => yup.object({
    overallSkills: yup.array().nullable().min(1).of(yup.string().min(1)).label('skills'),
    experiences: yup.array().nullable().min(1).of(useExperienceValidationSchema()).label('Experiences'),
});

export const useExperienceValidationSchema = () => yup.object({
    title: yup.string().required().label('Title'),
    logo: yup.string().nullable().url().label('Logo'),
    company: yup.string().required().label('Company name'),
    type: yup.string().oneOf(['fulltime', 'parttime', 'contract']).label('Type of employment'),
    start: yup.date().typeError('Invalid Date').required().when('end', {
        is: (end) => end !== null,
        then: () => yup.date().max(yup.ref('end')),
    }).label('Start date'),
    end: yup.date().nullable().typeError('Invalid Date').label('End date'),
    skills: yup.array().min(1).of(yup.string().min(1)).label('Skills'),
    detail: yup.string().required().label('Detail of archievements'),
});

export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}