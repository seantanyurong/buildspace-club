'use client';

// Packages
import React from 'react';
import Balancer from 'react-wrap-balancer';
import _ from 'lodash';
import { useFormState } from 'react-dom';

// Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { sendContactForm } from '@/app/actions/contact';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, MailCheck } from 'lucide-react';
import { Label } from "@/components/ui/label"
import { SubmitButton } from './SubmitButton';


const ContactForm = () => {
  const initialState = {
    status: '',
    message: '',
  };

  const [state, formAction] = useFormState(sendContactForm, initialState);

  return (
    <Card className='w-full mb-4'>
      <CardHeader>
        <CardTitle className='text-md'>Are you part of a telegram community?</CardTitle>
        <CardDescription>
          <Balancer>If you are and want to connect with other members, enter your email below and we&apos;ll reach out with next steps.</Balancer>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className='flex space-y-2 md:space-y-0 flex-col md:flex-row mb-4'>
          <Label htmlFor='email' hidden>Email</Label>
          <Input id='email' type='email' name='email' placeholder='thejoblessclub@gmail.com' required className='md:mr-2' />
          <SubmitButton />
        </form>
        {state?.status === 'success' && (
          <Alert aria-live='polite' className='not-sr-only'>
            <MailCheck className='h-4 w-4' />
            <AlertTitle>{_.startCase(state?.status)}</AlertTitle>
            <AlertDescription>{state?.message}</AlertDescription>
          </Alert>
        )}
        {state?.status === 'error' && (
          <Alert aria-live='polite' variant='destructive' className='not-sr-only'>
            <AlertCircle className='h-4 w-4' />
            <AlertTitle>{_.startCase(state?.status)}</AlertTitle>
            <AlertDescription>{state?.message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;
