'use server';

import { createClient } from '@/lib/supabase/server';
import { z } from 'zod';

export async function sendContactForm(
  prevState: {
    status: string;
    message: string;
  },
  formData: FormData,
) {
  const supabase = createClient();

  const passwordSchema = z.object({
    email: z.string().email(),
  });

  const response = passwordSchema.safeParse({
    email: formData.get('email'),
  });

  if (!response.success) {
    return {
      status: 'error',
      message: 'Invalid email',
    };
  }

  const { error } = await supabase.from("prospects").insert({ email: response.data.email });

  if (error) {
    return {
      status: 'error',
      message: `${error.message}`,
    };
  } else {
    return {
      status: 'success',
      message: "We'll be reaching out shortly!",
    };
  }
}
