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
      <div className="flex gap-4">
        {words.map((word) => (
          <div key={word} className="inline-flex gap-4">
            <span>{word}</span>
            <StarIcon className="size-6" />
          </div>
        ))}
      </div>
    </div>
  );
};
