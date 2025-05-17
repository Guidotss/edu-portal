import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

// @ts-ignore
// eslint-disable-next-line
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'app-courses-mfe-entry': any;
    }
  }
}

const loadRemoteElement = () =>
  new Promise<void>((resolve, reject) => {
    if (window.customElements.get('app-courses-mfe-entry')) {
      resolve();
      return;
    }
    const scripts = [
      'http://localhost:4201/polyfills.js', // Load Zone.js first
      'http://localhost:4201/vendor.js',
      'http://localhost:4201/main.js',
      'http://localhost:4201/remoteEntry.mjs',
    ];
    let loaded = 0;
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'module';
      script.async = false;
      script.onload = () => {
        loaded++;
        if (loaded === scripts.length) resolve();
      };
      script.onerror = () => reject();
      document.head.appendChild(script);
    });
  });

const CoursesMfe = () => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    loadRemoteElement().then(() => setReady(true));
  }, []);

  if (!ready) return <div>Cargando...</div>;
  return <app-courses-mfe-entry />;
};

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cursos">Cursos (Angular MFE)</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="edu-shell" />} />
        <Route path="/cursos" element={<CoursesMfe />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
