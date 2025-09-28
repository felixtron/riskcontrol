'use server';

import { z } from 'zod';
import { generateSmartCTAs, GenerateSmartCTAsInput } from '@/ai/flows/generate-smart-ctas';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Here you would typically send the data to a CRM or database.
  // For this example, we'll just log it to the console.
  console.log('New Contact Form Submission:', validatedFields.data);

  return { message: 'success' };
}


export type CtaGeneratorState = {
  message: string;
  data?: {
    suggestedCTATexts: string[];
    rationale: string;
  }
  errors?: any;
};

export async function generateCtaAction(
  prevState: CtaGeneratorState,
  formData: FormData
): Promise<CtaGeneratorState> {
  const input: GenerateSmartCTAsInput = {
    currentCTAText: formData.get('currentCTAText') as string,
    landingPageSegment: formData.get('landingPageSegment') as string,
    conversionRate: parseFloat(formData.get('conversionRate') as string),
    abTestingData: formData.get('abTestingData') as string,
  };

  try {
    const result = await generateSmartCTAs(input);
    return { message: 'success', data: result };
  } catch (e) {
    console.error(e);
    return { message: 'error', errors: 'An unexpected error occurred.' };
  }
}
