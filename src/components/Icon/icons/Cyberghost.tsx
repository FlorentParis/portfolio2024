type CyberghostProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Cyberghost = ({ color = '#000', ...props }: CyberghostProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M38.89,22.71c-.56-3.83,0-2.36-.48-5.85-.82-5.84-7-12.67-15.3-12.35C10,5,8.1,16.3,8.1,22.68c0,2.65-.86,6.33-.57,11.85C8,43.3,8.91,44.19,21.61,43.15c16.91-1.37,18.86-8.11,19-11.78S39.29,25.47,38.89,22.71ZM20.24,28.87c-3.79,0-5.75-4.6-5.75-8.31s2.41-7.75,5.75-7.75c3.64,0,5.62,4.28,5.62,7.9C25.86,24.53,24,28.87,20.24,28.87Zm13.11-3.28c-2.79,0-4.22-3.34-4.22-6s1.77-5.64,4.22-5.64c2.68,0,4.13,3.11,4.13,5.74C37.48,22.43,36.14,25.59,33.35,25.59Z"
      />
    </svg>
  );
};

export default Cyberghost;
