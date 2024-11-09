import StarIcon from '@/assets/icons/star.svg';

const words = [
  'Performant',
  'Accessible',
  'Responsive',
  'Interactive',
  'Scalable',
  'User Friendly',
];

export const TapeSection = () => {
  return (
    <div>
      {words.map((word) => (
        <div key={word}>
          <span>{word}</span>
          <StarIcon />
        </div>
      ))}
    </div>
  );
};
