import React, { useState, useEffect } from 'react';

const DecoderText = ({ text, start = true, delay: startDelay = 0, className }: { text: string, start?: boolean, delay?: number, className?: string }) => {
  const [decodedText, setDecodedText] = useState('');

  useEffect(() => {
    let animation: NodeJS.Timeout;
    const content = text.split('');
    let currentIndex = 0;

    const startAnimation = () => {
      animation = setInterval(() => {
        if (currentIndex >= content.length) {
          clearInterval(animation);
        } else {
          const randomizedText = content
            .map((char: string, index: number) => (index <= currentIndex ? char : getRandomCharacter()))
            .join('');
          setDecodedText(randomizedText);
          currentIndex++;
        }
      }, 100); // Adjust speed of decoding here
    };

    const getRandomCharacter = () => {
      const glyphs = [
        'ア', 'イ', 'ウ', 'エ', 'オ',
        'カ', 'キ', 'ク', 'ケ', 'コ',
        'サ', 'シ', 'ス', 'セ', 'ソ',
        'タ', 'チ', 'ツ', 'テ', 'ト',
        'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
        'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
        'マ', 'ミ', 'ム', 'メ', 'モ',
        'ヤ', 'ユ', 'ヨ', 'ー',
        'ラ', 'リ', 'ル', 'レ', 'ロ',
        'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
        'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
        'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
        'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
        'バ', 'ビ', 'ブ', 'ベ', 'ボ',
        'パ', 'ピ', 'プ', 'ペ', 'ポ',
      ];
      const rand = Math.floor(Math.random() * glyphs.length);
      return glyphs[rand];
    };

    if (start) {
      const timeoutId = setTimeout(() => {
        startAnimation();
      }, startDelay);
      return () => clearTimeout(timeoutId);
    }
  }, [text, start, startDelay]);

  return <span className={className}>{decodedText}</span>;
};

export default DecoderText;
