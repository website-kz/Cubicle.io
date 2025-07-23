import { useEffect } from 'react';
import EditorCanvas from '../components/EditorCanvas';
import '../styles/editor.css';
import { useRouter } from 'next/router';

export default function Editor() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('cubicle_user')) {
      router.push('/');
    }
  }, []);

  return (
    <div className="editor-page">
      <header className="editor-header">
        <h2>Your Cubicle Store</h2>
        <button onClick={() => localStorage.clear() && router.push('/')}>Logout</button>
      </header>
      <EditorCanvas />
    </div>
  );
}