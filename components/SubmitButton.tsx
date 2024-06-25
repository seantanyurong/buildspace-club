'use client';

import { useFormStatus } from 'react-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { Button } from '@/components/ui/button';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending} className='shrink=0' variant='secondary'>
      {pending ? (
        <BeatLoader color='#000000' size={5} aria-label='Loading Spinner' data-testid='loader' speedMultiplier={0.5} />
      ) : (
        "I'm interested"
      )}
    </Button>
  );
}
