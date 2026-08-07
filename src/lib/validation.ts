import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const signupSchema = z
  .object({
    fullName: z.string().trim().min(2, 'Full name must be at least 2 characters'),
    email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Include at least one uppercase letter')
      .regex(/[0-9]/, 'Include at least one number'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: 'You must agree to the Terms & Conditions' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
export type SignupFormValues = z.infer<typeof signupSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  subject: z.string().trim().min(3, 'Subject must be at least 3 characters'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});
export type ContactFormValues = z.infer<typeof contactSchema>;

export const trackOrderSchema = z.object({
  orderId: z
    .string()
    .trim()
    .min(1, 'Enter an order ID')
    .regex(/^#?[A-Za-z]{2}-\d{4,6}$/, 'Format should look like #KD-84729'),
});
export type TrackOrderFormValues = z.infer<typeof trackOrderSchema>;

/**
 * Runs a Zod schema against form values and returns a flat field->message
 * error map, which is easier to bind to individual inputs than Zod's
 * native tree-shaped error format.
 */
export function getFieldErrors<T>(schema: z.ZodType<T>, values: unknown): Partial<Record<string, string>> {
  const result = schema.safeParse(values);
  if (result.success) return {};

  const errors: Partial<Record<string, string>> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (typeof key === 'string' && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}
