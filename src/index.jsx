import { h, render } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { editor } from 'monaco-editor';
import './styles.css';

function App() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
    editor.create(elementRef.current, {
      value: 'console.log("Hello, world")',
      language: 'javascript'
    });
  }, [elementRef]);

  return <div className="container" ref={elementRef}></div>;
}

render(<App />, document.getElementById('app'));
