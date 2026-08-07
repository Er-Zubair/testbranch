'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { loginSchema, getFieldErrors, type LoginFormValues } from '@/lib/validation';

export default function LoginPage() {
  const router = useRouter();
  const [values, setValues] = useState<LoginFormValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormValues, string>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [formError, setFormError] = useState<string | undefined>();

  function updateField<K extends keyof LoginFormValues>(field: K, value: LoginFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fieldErrors = getFieldErrors(loginSchema, values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setFormError(undefined);
    setStatus('submitting');
    try {
      // Simulated auth call — production wires this to POST /api/auth/login,
      // stores the returned JWT/refresh token, and handles 401s explicitly.
      await new Promise((resolve, reject) =>
        window.setTimeout(() => (values.password.length >= 6 ? resolve(undefined) : reject()), 700),
      );
      router.push('/');
    } catch {
      setStatus('error');
      setFormError('Incorrect email or password. Please try again.');
    }
  }

  return (
    <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm" />
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnjIphv82__VMcm5bVSC2RMgB9rKGy3apcKbcE1q2oLbOrD5W67tmk7nIQW51OPbVPc88F0976wGzIY2zTqfOF5jwcuJZhFPS4lqeqw-lHfEqN7JJ2BL_PezpO1Q0Qy4oCO5XS9OMj5LmGh1o2IAYWWwGoP4he8GOjQdJqAv9zgDHeyKhzFeQ0xyRPUYw3pvi6huP28AZw9Q9BUPfLUI9PFTtaeraBRbjxElfIm5Ovy3_2GptTK2kn8Q"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-20 w-full max-w-md px-margin-mobile">
        <div className="relative flex flex-col gap-stack-sm overflow-hidden rounded-xl bg-surface-container-lowest p-stack-md shadow-lg">
          <div className="absolute top-0 right-0 -z-10 h-32 w-32 rounded-bl-full bg-primary-container/20 pointer-events-none" />
          <div className="mb-base text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-3xl font-bold text-primary">restaurant_menu</span>
              <span className="font-headline-sm font-black uppercase tracking-tight text-secondary">King&apos;s Dine</span>
            </div>
            <h1 className="font-headline-md text-on-surface">Welcome Back</h1>
            <p className="font-body-md text-on-surface-variant">Sign in to your King&apos;s Dine account</p>
          </div>

          <form className="flex flex-col gap-stack-sm" onSubmit={handleSubmit} noValidate>
            <Input
              label="Email Address"
              hideLabel
              name="email"
              placeholder="Email Address"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => updateField('email', e.target.value)}
              error={errors.email}
            />
            <div className="relative">
              <Input
                label="Password"
                hideLabel
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                className="pr-12"
                value={values.password}
                onChange={(e) => updateField('password', e.target.value)}
                error={errors.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-4 top-3 text-on-surface-variant"
              >
                <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>

            {formError && (
              <p className="font-body-md text-error" role="alert">
                {formError}
              </p>
            )}

            <Button type="submit" className="mt-2 w-full !rounded-lg" isLoading={status === 'submitting'}>
              Login
            </Button>
          </form>

          <div className="mt-base flex flex-col gap-2 text-center">
            <Link href="#" className="font-label-bold text-on-surface-variant hover:text-primary">
              Forgot Password?
            </Link>
            <p className="font-body-md text-on-surface-variant">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-label-bold ml-1 text-primary hover:text-secondary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
