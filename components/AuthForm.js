import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <form className="auth-form" onSubmit={e => {
      e.preventDefault();
      // TODO: implement real auth
      localStorage.setItem('cubicle_user', email);
      router.push('/editor');
    }}>
      <input type="email" placeholder="Email" required
        value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Register / Login</button>
    </form>
  );
}