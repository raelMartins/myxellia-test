import { Link } from '@chakra-ui/react';

export const ViewAllLink = ({ url = '/' }) => {
  return (
    <Link
      href={url}
      textAlign={'right'}
      fontSize={'1.2rem'}
      color={'#cbcbcb'}
      fontWeight={'500'}
      style={{ display: 'flex', alignItems: 'center', gap: '.2rem' }}
    >
      <span>View all</span>
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_1_1029)'>
          <path
            d='M9.87852 8.99956L6.16602 5.28706L7.22652 4.22656L11.9995 8.99956L7.22652 13.7726L6.16602 12.7121L9.87852 8.99956Z'
            fill='#CBCBCB'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_1029'>
            <rect width='18' height='18' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
