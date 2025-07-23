import AuthForm from '../components/AuthForm';

export default function Home() {
  return (
    <div className="auth-container">
      <h1 className="title">Cubicle.io</h1>
      <AuthForm />
    </div>
  );
}