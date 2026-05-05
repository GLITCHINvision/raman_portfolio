import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, CheckCircle2, AlertCircle, RefreshCcw, Timer, ShieldAlert } from 'lucide-react';

const IQGame = ({ onComplete }) => {
  const [gameState, setGameState] = useState('idle'); // idle, showing, playing, won, lost
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(1);
  const [flashingIndex, setFlashingIndex] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(100);
  const [gameMode, setGameMode] = useState('forward'); // forward, reverse, mirror
  const timerRef = useRef(null);

  const nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const MAX_LEVELS = 3;

  const getModeForLevel = (lvl) => {
    if (lvl === 1) return 'forward';
    if (lvl === 2) return 'reverse';
    return 'mirror';
  };

  const startNewGame = useCallback(() => {
    const initialLvl = 1;
    const newSequence = Array.from({ length: 3 }, () => Math.floor(Math.random() * 9));
    setSequence(newSequence);
    setUserSequence([]);
    setLevel(initialLvl);
    setGameMode('forward');
    playSequence(newSequence, initialLvl);
  }, []);

  const playSequence = async (seq, lvl) => {
    setGameState('showing');
    setFlashingIndex(-1);
    
    // Balanced speed: slightly faster each level but not extreme
    const speed = Math.max(350, 600 - (lvl * 80));
    const gap = 200;

    await new Promise(r => setTimeout(r, 800));

    for (let i = 0; i < seq.length; i++) {
      setFlashingIndex(seq[i]);
      await new Promise(r => setTimeout(r, speed));
      setFlashingIndex(-1);
      await new Promise(r => setTimeout(r, gap));
    }
    
    setGameState('playing');
    setTimeLeft(100);
    startTimer();
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current);
          setGameState('lost');
          return 0;
        }
        return prev - 1.2; // Slightly more generous timer
      });
    }, 100);
  };

  const handleNodeClick = (index) => {
    if (gameState !== 'playing') return;

    const currentStep = userSequence.length;
    let expectedIndex;

    if (gameMode === 'forward') {
      expectedIndex = sequence[currentStep];
    } else if (gameMode === 'reverse') {
      expectedIndex = [...sequence].reverse()[currentStep];
    } else if (gameMode === 'mirror') {
      expectedIndex = 8 - sequence[currentStep];
    }

    if (index !== expectedIndex) {
      clearInterval(timerRef.current);
      setGameState('lost');
      return;
    }

    const newUserSeq = [...userSequence, index];
    setUserSequence(newUserSeq);

    if (newUserSeq.length === sequence.length) {
      clearInterval(timerRef.current);
      // Immediately stop interactions
      setGameState('idle'); 
      
      if (level >= MAX_LEVELS) {
        setGameState('won');
        if (onComplete) onComplete();
      } else {
        const nextLevel = level + 1;
        const nextMode = getModeForLevel(nextLevel);
        const nextSeq = [...sequence, Math.floor(Math.random() * 9)];
        
        setLevel(nextLevel);
        setSequence(nextSeq);
        setGameMode(nextMode);
        setUserSequence([]);
        // Reset timer bar visually for transition
        setTimeLeft(100); 
        setTimeout(() => playSequence(nextSeq, nextLevel), 1000);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="smart-card bg-[#0A0B0D]/90 backdrop-blur-2xl border-accent-primary/20 max-w-md mx-auto w-full relative overflow-hidden group">
      {/* Dynamic Background Data Stream */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--accent-primary)_0%,_transparent_70%)] opacity-20" />
        <div className="flex flex-wrap gap-4 p-4 font-mono text-[8px] text-accent-primary animate-pulse">
            {Array.from({ length: 50 }).map((_, i) => (
                <span key={i}>{Math.random().toString(16).slice(2, 8)}</span>
            ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                    <Brain size={20} className={gameState === 'playing' ? 'animate-pulse' : ''} />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        Neural Sync 
                        {level === MAX_LEVELS && <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-primary/20 text-accent-primary border border-accent-primary/30">FINAL STAGE</span>}
                    </h3>
                    <p className="text-[10px] text-secondary uppercase tracking-widest font-mono">
                        {gameMode === 'forward' && 'Test 1: Cognitive Pattern'}
                        {gameMode === 'reverse' && 'Test 2: Working Memory'}
                        {gameMode === 'mirror' && 'Test 3: Spatial Logic'}
                    </p>
                </div>
            </div>
            <div className="text-right">
                <div className="text-[10px] text-secondary font-mono">LEVEL</div>
                <div className="text-xl font-bold text-accent-primary font-mono">{level}<span className="text-xs text-white/30">/{MAX_LEVELS}</span></div>
            </div>
        </div>

        {/* Timer Bar */}
        <div className="h-1 w-full bg-white/5 rounded-full mb-8 overflow-hidden">
            <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: `${timeLeft}%` }}
                className={`h-full transition-colors duration-300 ${timeLeft < 30 ? 'bg-red-500' : 'bg-accent-primary'}`}
            />
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
            {nodes.map((node) => (
            <motion.button
                key={node}
                whileHover={gameState === 'playing' ? { scale: 1.05, backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)' } : {}}
                whileTap={gameState === 'playing' ? { scale: 0.95 } : {}}
                onClick={() => handleNodeClick(node)}
                className={`aspect-square rounded-xl border transition-all duration-300 flex items-center justify-center relative overflow-hidden
                ${flashingIndex === node ? 'bg-accent-primary border-accent-primary shadow-[0_0_30px_var(--accent-glow)]' : 
                    gameState === 'playing' ? 'bg-white/5 border-white/10 hover:border-accent-primary/50' : 'bg-white/5 border-white/5'}
                `}
            >
                {flashingIndex === node && (
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 2, opacity: 1 }}
                        className="absolute inset-0 bg-white/30 rounded-full"
                    />
                )}
                <div className="text-[10px] font-mono opacity-20 group-hover:opacity-40 transition-opacity">{node}</div>
                
                {/* Mirror Hint Overlay (Subtle) */}
                {gameMode === 'mirror' && gameState === 'playing' && (
                    <div className="absolute top-1 right-1 opacity-10">
                        <ShieldAlert size={8} />
                    </div>
                )}
            </motion.button>
            ))}
        </div>

        <div className="space-y-4">
            {gameState === 'idle' && (
            <button 
                onClick={startNewGame}
                className="w-full py-4 rounded-xl bg-accent-primary text-bg-dark font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:tracking-widest"
            >
                <Zap size={18} />
                INITIATE NEURAL SYNC
            </button>
            )}

            {gameState === 'showing' && (
            <div className="flex flex-col items-center gap-2 py-4">
                <div className="text-accent-primary font-mono text-sm animate-pulse tracking-widest">
                    OBSERVE PATTERN
                </div>
                <div className="text-[10px] text-secondary font-mono">ENCODING NEURAL PATHWAY...</div>
            </div>
            )}

            {gameState === 'playing' && (
            <div className="text-center py-4 space-y-2">
                <div className={`font-mono text-sm font-bold tracking-widest ${gameMode !== 'forward' ? 'text-red-400 animate-pulse' : 'text-white'}`}>
                    {gameMode === 'forward' && 'REPEAT SEQUENCE'}
                    {gameMode === 'reverse' && 'REPEAT IN REVERSE!'}
                    {gameMode === 'mirror' && 'EXECUTE INVERTED LOGIC!'}
                </div>
                <div className="flex justify-center gap-1">
                    {sequence.map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < userSequence.length ? 'bg-accent-primary' : 'bg-white/10'}`} />
                    ))}
                </div>
            </div>
            )}

            {gameState === 'won' && (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <div className="flex flex-col items-center gap-2 text-accent-primary">
                    <CheckCircle2 size={32} />
                    <span className="font-bold text-lg tracking-tighter">COGNITION VERIFIED</span>
                </div>
                <p className="text-xs text-secondary font-mono">You are fully synchronized with the system architecture. Access granted.</p>
                <button 
                    onClick={startNewGame}
                    className="w-full py-3 rounded-xl border border-accent-primary/30 text-accent-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-accent-primary/10 transition-all"
                >
                    RE-VALIDATE
                </button>
            </motion.div>
            )}

            {gameState === 'lost' && (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <div className="flex flex-col items-center gap-2 text-red-500">
                    <AlertCircle size={32} />
                    <span className="font-bold text-lg tracking-tighter">SYNAPTIC COLLAPSE</span>
                </div>
                <p className="text-xs text-secondary font-mono">Calibration failed at level {level}. Neural integrity compromised.</p>
                <button 
                    onClick={startNewGame}
                    className="w-full py-3 rounded-xl bg-red-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                >
                    <RefreshCcw size={16} />
                    RETRY CALIBRATION
                </button>
            </motion.div>
            )}
        </div>
      </div>
    </div>
  );
};

export default IQGame;

