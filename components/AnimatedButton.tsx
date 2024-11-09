// components/AnimatedButton.js
export default function AnimatedButton() {
  return (
    <button className="relative text-hsl-186-100-69 cursor-pointer py-2 px-4 border-2 border-hsl-186-100-69 rounded-lg bg-none perspective-2 font-raleway text-2xl font-extrabold tracking-wider shadow-inset-0-0-0.5-hsl-186-100-69 animate-border-flicker">
      <span className="absolute inset-0 w-full h-0 bg-hsl-186-100-69 transition-all duration-500 ease-out hover:h-full"></span>
      <span className="relative z-10">
        C<span className="opacity-50 animate-faulty-flicker">L</span>ICK
      </span>
    </button>
  );
}
