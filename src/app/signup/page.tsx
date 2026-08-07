'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { signupSchema, getFieldErrors } from '@/lib/validation';

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [formError, setFormError] = useState<string | undefined>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const candidate = { fullName, email, password, confirmPassword, agreeToTerms };
    const fieldErrors = getFieldErrors(signupSchema, candidate);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setFormError(undefined);
    setStatus('submitting');
    try {
      // Simulated account creation — production wires this to POST /api/auth/register
      // and should treat "email already registered" as a distinct, user-friendly error.
      await new Promise((resolve) => window.setTimeout(resolve, 800));
      router.push('/login');
    } catch {
      setStatus('error');
      setFormError('Something went wrong creating your account. Please try again.');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-margin-mobile py-stack-lg">
      <div className="w-full max-w-md rounded-xl bg-surface-container-lowest p-stack-md shadow-lg">
        <div className="mb-stack-sm text-center">
          <p className="font-display text-headline-sm font-black text-secondary">King&apos;s Dine</p>
          <h1 className="font-headline-sm mt-2 text-on-surface">Create Your Account</h1>
          <p className="font-body-md text-on-surface-variant">Join us for hot, fresh food delivered fast.</p>
        </div>

        <form className="flex flex-col gap-stack-sm" onSubmit={handleSubmit} noValidate>
          <Input
            label="Full Name"
            hideLabel
            name="fullName"
            placeholder="Full Name"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={errors.fullName}
          />
          <Input
            label="Email Address"
            hideLabel
            name="email"
            placeholder="Email Address"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <div className="relative">
            <Input
              label="Password"
              hideLabel
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              className="pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            <button
              type="button"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
            </button>
          </div>
          <p className="font-body-md -mt-2 text-xs text-on-surface-variant">
            At least 8 characters, with one uppercase letter and one number.
          </p>
          <Input
            label="Confirm Password"
            hideLabel
            name="confirmPassword"
            placeholder="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />

          <label className="font-body-md flex items-start gap-2 text-sm text-on-surface-variant">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
            />
            I agree to the Terms &amp; Conditions and Privacy Policy
          </label>
          {errors.agreeToTerms && (
            <p className="font-body-md -mt-2 text-sm text-error" role="alert">
              {errors.agreeToTerms}
            </p>
          )}

          {formError && (
            <p className="font-body-md text-error" role="alert">
              {formError}
            </p>
          )}

          <Button type="submit" className="mt-stack-sm w-full !rounded-lg" isLoading={status === 'submitting'}>
            Create Account
          </Button>
        </form>

        <p className="font-body-md mt-stack-sm text-center text-on-surface-variant">
          Already have an account?{' '}
          <Link href="/login" className="font-label-bold text-primary hover:text-secondary">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
