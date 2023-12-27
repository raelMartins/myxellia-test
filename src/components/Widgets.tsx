import { Box, Center, Divider, Flex, Link, Text } from '@chakra-ui/react';
import { NoImageIcon } from './SVGAssets';
import Image from 'next/image';

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

export const ListingOverviewCard = ({
  title = 'Most',
  accent_color = '#12d8a0',
  data
}: {
  title?: string;
  accent_color?: string;
  data?: { name: string; image: string };
}) => {
  return (
    <Box>
      <Text textTransform={'capitalize'} fontSize={'1rem'} fontWeight={'400'}>
        {title}
      </Text>
      <Divider mt={'.4rem'} mb={'1rem'} border={'.14rem solid #e4e4e4'} />
      <Flex gap={'1.4rem'}>
        <Center
          position={'relative'}
          height={'6.7rem'}
          width={'6.7rem'}
          overflow={'hidden'}
          backgroundColor={'#f5f5f5'}
          borderRadius={'1.2rem'}
          border={`.1rem solid ${`${accent_color}` || '#12d8a0'}`}
        >
          {!data?.image ? (
            // <span style={{ scale: 0.36 }}>
            <NoImageIcon scale={0.45} />
          ) : (
            // </span>
            <Image
              src={data.image}
              alt='Listing Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
        </Center>
        <Text padding='1.4rem 0rem' fontWeight={'600'} fontSize={'1.6rem'}>
          {data?.name || 'None'}
        </Text>
      </Flex>
    </Box>
  );
};
