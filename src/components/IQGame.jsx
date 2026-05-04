import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, CheckCircle2, AlertCircle, RefreshCcw } from 'lucide-react';

const IQGame = ({ onComplete }) => {
  const [gameState, setGameState] = useState('idle'); // idle, showing, playing, won, lost
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [level, setLevel] = useState(1);
  const [flashingIndex, setFlashingIndex] = useState(-1);

  const nodes = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const startNewGame = useCallback(() => {
    const newSequence = Array.from({ length: 3 }, () => Math.floor(Math.random() * 9));
    setSequence(newSequence);
    setUserSequence([]);
    setLevel(1);
    playSequence(newSequence);
  }, []);

  const playSequence = async (seq) => {
    setGameState('showing');
    for (let i = 0; i < seq.length; i++) {
      setFlashingIndex(seq[i]);
      await new Promise(r => setTimeout(r, 600));
      setFlashingIndex(-1);
      await new Promise(r => setTimeout(r, 200));
    }
    setGameState('playing');
  };

  const handleNodeClick = (index) => {
    if (gameState !== 'playing') return;

    const newUserSeq = [...userSequence, index];
    setUserSequence(newUserSeq);

    // Check if correct
    if (index !== sequence[userSequence.length]) {
      setGameState('lost');
      return;
    }

    // Check if finished sequence
    if (newUserSeq.length === sequence.length) {
      if (level >= 3) {
        setGameState('won');
        if (onComplete) onComplete();
      } else {
        const nextLevel = level + 1;
        const nextSeq = [...sequence, Math.floor(Math.random() * 9)];
        setLevel(nextLevel);
        setSequence(nextSeq);
        setUserSequence([]);
        setTimeout(() => playSequence(nextSeq), 1000);
      }
    }
  };

  return (
    <div className="smart-card bg-[#0A0B0D]/80 backdrop-blur-xl border-accent-primary/20 max-w-md mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
            <Brain size={20} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Neural Pattern Recognition</h3>
            <p className="text-[10px] text-secondary uppercase tracking-widest font-mono">Cognitive Integrity Verification</p>
          </div>
        </div>
        {gameState === 'playing' && (
            <div className="px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-[10px] text-accent-primary font-mono animate-pulse">
                SYNCING...
            </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {nodes.map((node) => (
          <motion.button
            key={node}
            whileHover={gameState === 'playing' ? { scale: 1.05 } : {}}
            whileTap={gameState === 'playing' ? { scale: 0.95 } : {}}
            onClick={() => handleNodeClick(node)}
            className={`aspect-square rounded-xl border transition-all duration-300 flex items-center justify-center relative overflow-hidden
              ${flashingIndex === node ? 'bg-accent-primary border-accent-primary shadow-[0_0_20px_var(--accent-glow)]' : 
                gameState === 'playing' ? 'bg-white/5 border-white/10 hover:border-accent-primary/50' : 'bg-white/5 border-white/5'}
            `}
          >
            {flashingIndex === node && (
                <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 2, opacity: 1 }}
                    className="absolute inset-0 bg-white/20 rounded-full"
                />
            )}
            <div className="text-[10px] font-mono opacity-20">{node}</div>
          </motion.button>
        ))}
      </div>

      <div className="space-y-4">
        {gameState === 'idle' && (
          <button 
            onClick={startNewGame}
            className="w-full py-4 rounded-xl bg-accent-primary text-bg-dark font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Zap size={18} />
            INITIATE NEURAL SYNC
          </button>
        )}

        {gameState === 'showing' && (
          <div className="text-center py-4 text-accent-primary font-mono text-sm animate-pulse">
            OBSERVE SEQUENCE...
          </div>
        )}

        {gameState === 'playing' && (
          <div className="text-center py-4 text-white font-mono text-sm">
            REPEAT PATTERN (LEVEL {level}/3)
          </div>
        )}

        {gameState === 'won' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-accent-primary">
              <CheckCircle2 size={24} />
              <span className="font-bold">INTELLIGENCE VERIFIED</span>
            </div>
            <p className="text-xs text-secondary">Core performance metrics optimized. System synchronized.</p>
          </motion.div>
        )}

        {gameState === 'lost' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 text-red-500">
              <AlertCircle size={24} />
              <span className="font-bold">SYNC FAILED</span>
            </div>
            <button 
                onClick={startNewGame}
                className="w-full py-3 rounded-xl border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
                <RefreshCcw size={16} />
                RETRY CALIBRATION
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default IQGame;
