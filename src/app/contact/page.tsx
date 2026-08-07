'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { contactSchema, getFieldErrors, type ContactFormValues } from '@/lib/validation';

const CONTACT_DETAILS = [
  { icon: 'location_on', title: 'Address', value: '123 King Street, Your City' },
  { icon: 'phone', title: 'Phone', value: '+1 (123) 456-7890' },
  { icon: 'mail', title: 'Email', value: 'hello@kingsdine.com' },
  { icon: 'schedule', title: 'Hours', value: 'Every Day: 10:00 AM - 12:00 AM' },
] as const;

const initialValues: ContactFormValues = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fieldErrors = getFieldErrors(contactSchema, values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    try {
      // Simulated network call — swap for POST /api/contact in production,
      // with server-side re-validation using the same contactSchema.
      await new Promise((resolve) => window.setTimeout(resolve, 800));
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="relative mx-auto max-w-container-max overflow-hidden p-margin-mobile md:p-margin-desktop">
      <div className="pointer-events-none absolute top-0 right-0 z-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-stack-lg md:flex-row md:gap-gutter">
        <div className="flex-1 space-y-stack-md">
          <div className="space-y-stack-sm">
            <h1 className="font-display text-display-lg-mobile text-on-background md:text-display-lg">
              We&apos;re Here to Help
            </h1>
            <p className="font-body-md text-on-surface-variant">
              Have a question or need assistance? We&apos;re just a message away.
            </p>
          </div>
          <div className="space-y-stack-md rounded-xl border border-outline-variant/30 bg-surface-container-low p-6 shadow-sm">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4">
                <div className="shrink-0 rounded-full bg-primary-container/30 p-3 text-primary">
                  <span className="material-symbols-outlined">{detail.icon}</span>
                </div>
                <div>
                  <h3 className="font-label-bold text-on-surface">{detail.title}</h3>
                  <p className="font-body-md mt-1 text-on-surface-variant">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-lg">
          {status === 'success' ? (
            <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-3 text-center">
              <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                task_alt
              </span>
              <h2 className="font-headline-sm text-on-surface">Message sent!</h2>
              <p className="font-body-md max-w-xs text-on-surface-variant">
                Thanks for reaching out — our team usually replies within one business day.
              </p>
              <Button variant="outline" onClick={() => setStatus('idle')}>
                Send another message
              </Button>
            </div>
          ) : (
            <form className="relative z-10 space-y-4" onSubmit={handleSubmit} noValidate>
              <Input
                label="Your Name"
                hideLabel
                name="name"
                placeholder="Your Name"
                type="text"
                value={values.name}
                onChange={(e) => updateField('name', e.target.value)}
                error={errors.name}
              />
              <Input
                label="Email Address"
                hideLabel
                name="email"
                placeholder="Email Address"
                type="email"
                value={values.email}
                onChange={(e) => updateField('email', e.target.value)}
                error={errors.email}
              />
              <Input
                label="Subject"
                hideLabel
                name="subject"
                placeholder="Subject"
                type="text"
                value={values.subject}
                onChange={(e) => updateField('subject', e.target.value)}
                error={errors.subject}
              />
              <Textarea
                label="Your Message"
                hideLabel
                name="message"
                placeholder="Your Message"
                rows={4}
                value={values.message}
                onChange={(e) => updateField('message', e.target.value)}
                error={errors.message}
              />

              {status === 'error' && (
                <p className="font-body-md text-error" role="alert">
                  Something went wrong sending your message. Please try again.
                </p>
              )}

              <Button type="submit" className="w-full !rounded-full !py-4" isLoading={status === 'submitting'}>
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="relative mt-stack-lg h-48 overflow-hidden rounded-2xl shadow-sm">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMbZlEjmKSjmcR7olXk61ozUc8s4_uUAFIwvCJiNyEu7EM6uCqWJ7wNQm9TTzlFxzv5BqJS_Kl6r3HZGaVNl6RiaCgWRCc2qmOpljMZnQmI-SBYyWt-n6yeyAgUysDRmd5Wxo37dSvILBObKfGrj16BwnyBu4Fa7WMTbuA_wgqZ9BXe6pTHSmk0Ac3r_yLO0wpgm1tV09ALkRW5-1TM1ozT75hU1tRD00neDqmg7J2qmE6dUnq2h0hhQ"
          alt="Fresh basil, tomatoes and garlic scattered on a marble countertop"
          fill
          sizes="1200px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      </div>
    </main>
  );
}
