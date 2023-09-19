type Props = {
  className?: string;
};

const RightArrow = ({ className = "w-4" }: Props) => {
  return (
    <svg
      viewBox="0 0 18 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2445 6.00053L12.2215 1.97754M16.2445 6.00053L12.2215 10.0235M16.2445 6.00053H1.76172"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RightArrow;
