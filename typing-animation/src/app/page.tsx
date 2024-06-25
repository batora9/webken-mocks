import TypingAnimation from '../components/TypingAnimation';

export default function Home() {
  const texts = [
    'This is the first text.',
    'Here comes the second text.',
    'And this is the third one.',
  ];

  return (
    <div>
      <h1>Typing Animation with React and Next.js</h1>
      <TypingAnimation texts={texts} />
    </div>
  );
}
