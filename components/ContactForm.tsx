'use client';

// Packages
import React from 'react';
import Balancer from 'react-wrap-balancer';
import _ from 'lodash';

// Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, MailCheck } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { SubmitButton } from './SubmitButton';

const ContactForm = () => {
  return (
    <Card className='w-full mb-4'>
      <CardHeader>
        <CardTitle className='text-md'>Are you a buildspace founder?</CardTitle>
        <CardDescription>
          <Balancer>If you are and want to connect with other founders, apply to join the community below.</Balancer>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SubmitButton />
      </CardContent>
    </Card>
  );
};

export default ContactForm;
