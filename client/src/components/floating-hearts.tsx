import { Heart } from "lucide-react";

export default function FloatingHearts() {
  const hearts = [
    { top: '20%', left: '10%', delay: '0s', size: 'text-2xl' },
    { top: '60%', right: '15%', delay: '2s', size: 'text-xl' },
    { top: '40%', left: '70%', delay: '4s', size: 'text-lg' },
    { top: '80%', left: '30%', delay: '1s', size: 'text-sm' }
  ];

  return (
    <>
      {hearts.map((heart, index) => (
        <div
          key={index}
          className={`floating-heart text-romantic-red ${heart.size}`}
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            animationDelay: heart.delay
          }}
        >
          <Heart className="fill-current" />
        </div>
      ))}
    </>
  );
}
