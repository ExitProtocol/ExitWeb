function isHeading(line: string) {
  return (
    /^\d+\./.test(line) ||
    (/^[A-Z][\w\s/&$\-?!]+$/.test(line.trim()) && !line.trim().endsWith(':'))
  );
}

export default function AboutPage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  // Typewriter logic
  useEffect(() => {
    if (currentLine >= lines.length) return;
    const line = lines[currentLine];
    const currentText = line.slice(0, charIndex + 1);
    const updatedLines = [...displayedLines];
    updatedLines[currentLine] = currentText;
    setDisplayedLines(updatedLines);

    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLine]);

  // Terminal height sync with hidden measure div
  useEffect(() => {
    if (!terminalRef.current || !measureRef.current) return;
    const newHeight = measureRef.current.offsetHeight;
    terminalRef.current.style.height = `${newHeight}px`;
  }, [displayedLines]);

  return (
   <main className="bg-black min-h-screen py-24 px-6 font-mono relative overflow-hidden text-[#BCBCBC]">
      {/* BG Effects */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full particles-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full noise-bg z-0" />

      <div className="flex justify-center z-10 relative">
        {/* Actual Terminal Box */}
        <div
          ref={terminalRef}
          className="w-full max-w-4xl bg-[#0f0f0f]/80 border border-gray-700 rounded-xl p-6 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ minHeight: '60vh' }}
        >
          {displayedLines.map((line, i) => (
            <p
              key={i}
              className={`text-sm md:text-base leading-relaxed whitespace-pre-wrap mb-2 ${
                isHeading(lines[i])
                  ? 'text-white text-base font-bold tracking-wide mt-6 mb-3'
                  : ''
              }`}
            >
              {line}
              {i === currentLine && <span className="blinking-cursor">|</span>}
            </p>
          ))}
        </div>

        {/* Hidden Measure Box */}
        <div
          ref={measureRef}
          className="invisible absolute w-full max-w-4xl text-sm md:text-base leading-relaxed p-6 font-mono"
          style={{ whiteSpace: 'pre-wrap' }}
        >
          {displayedLines.map((line, i) => (
            <p
              key={i}
              className={`mb-2 ${
                isHeading(lines[i])
                  ? 'text-base font-bold tracking-wide mt-6 mb-3'
                  : ''
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
