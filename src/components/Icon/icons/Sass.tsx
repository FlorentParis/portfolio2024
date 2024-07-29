type SassProps = React.SVGProps<SVGSVGElement> & {
  color?: string;
};

const Sass = ({ color = '#000', ...props }: SassProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3718 2.14967C17.6494 2.38362 18.931 2.95877 19.5523 4.14219C20.1925 5.36153 20.1254 6.54799 19.5931 7.54688C19.09 8.49116 18.2137 9.19688 17.3306 9.67101C16.441 10.1486 15.4383 10.449 14.5592 10.5078C14.1216 10.5371 13.6615 10.5102 13.2435 10.3753C12.8228 10.2395 12.36 9.96256 12.1034 9.44277C11.8588 8.94757 12.062 8.3479 12.5572 8.10336C13.0217 7.87402 13.578 8.03852 13.8471 8.46838C13.8504 8.46951 13.8539 8.47069 13.8577 8.47192C13.9564 8.50378 14.1435 8.53118 14.4257 8.51229C14.9864 8.47477 15.7142 8.26879 16.3845 7.9089C17.0613 7.54557 17.5742 7.08275 17.8281 6.60638C18.0528 6.18464 18.1104 5.69836 17.7815 5.07185C17.5811 4.69004 17.0439 4.306 16.0116 4.11696C15.0135 3.93419 13.7471 3.97678 12.447 4.24722C11.1503 4.51696 9.88376 5.00024 8.87976 5.64391C7.86596 6.29386 7.2052 7.04998 6.95131 7.8336C6.67668 8.68127 6.77402 9.27789 7.02132 9.76791C7.29259 10.3054 7.78942 10.8032 8.47449 11.3361C8.80606 11.5941 9.1581 11.8429 9.52913 12.1052L9.54928 12.1195C9.92009 12.3816 10.3115 12.6587 10.6774 12.9476C10.9855 13.1909 11.3003 13.4609 11.5885 13.7647C12.8818 13.5153 14.0023 13.5424 14.9205 13.9624C16.1028 14.5031 16.6955 15.5687 16.9743 16.7748C17.0987 17.3129 16.7633 17.8499 16.2252 17.9743C15.6871 18.0987 15.1501 17.7633 15.0257 17.2252C14.8256 16.3593 14.4986 15.9687 14.0887 15.7812C13.7882 15.6438 13.3394 15.5655 12.6714 15.6262C13.2874 17.7915 12.2119 19.7524 10.8952 20.8632C10.1859 21.4616 9.31751 21.8977 8.44947 21.9843C7.54156 22.075 6.57156 21.7705 6.00238 20.8227C5.49974 19.9858 5.49575 19.0959 5.75793 18.3035C6.01018 17.5412 6.50837 16.855 7.05418 16.287C7.74016 15.573 8.60299 14.9426 9.42126 14.5041C9.10818 14.2578 8.76558 14.0147 8.3948 13.7526L8.35934 13.7275C7.99964 13.4733 7.61479 13.2013 7.24641 12.9147C6.49533 12.3304 5.71114 11.6108 5.23582 10.669C4.73654 9.67971 4.62173 8.53497 5.04868 7.21717C5.49638 5.83533 6.56434 4.75261 7.80034 3.96021C9.04614 3.16152 10.5504 2.59894 12.0397 2.28914C13.5255 1.98006 15.06 1.90945 16.3718 2.14967ZM10.722 16.09C10.0488 16.3955 9.17323 16.9682 8.49635 17.6726C8.06676 18.1198 7.78131 18.5551 7.6567 18.9318C7.54201 19.2784 7.56793 19.5449 7.71693 19.793C7.7994 19.9303 7.92577 20.0267 8.25081 19.9942C8.61572 19.9578 9.11685 19.7469 9.60556 19.3346C10.5409 18.5455 11.1072 17.3249 10.722 16.09ZM13.8121 8.45393C13.8121 8.45392 13.8127 8.45422 13.8138 8.45488Z"
      />
    </svg>
  );
};

export default Sass;
