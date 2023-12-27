import { Box, Center, Divider, Flex, Link, Text } from '@chakra-ui/react';
import { NoImageIcon } from './SVGAssets';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

export const VirtualAssistantPopup = () => {
  const [expand, set_expand] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      set_expand(true);
      setTimeout(() => {
        set_expand(false);
      }, 3000);
    }, 1000);
  }, []);

  return (
    <Flex
      as='button'
      position={'fixed'}
      right={'1.6rem'}
      bottom={'6rem'}
      backgroundColor={'#4545fe'}
      borderRadius={'7rem'}
      boxShadow={'.4rem .4rem .8rem 0rem rgba(123, 157, 157, 0.15)'}
      gap={'.8rem'}
      color={'white'}
      padding={'1rem 1.5rem'}
      fontSize={'2rem'}
      fontWeight={'400'}
      align={'center'}
      maxH={'4.6rem'}
      transition={'.5s'}
      // maxWidth={'100%'}
      width={'max-content'}
      _hover={{ transform: 'translate(-5%, -5%)' }}
    >
      <svg
        width='18'
        height='18'
        viewBox='0 0 18 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_1_1140)'>
          <path
            d='M13.4956 1.71429C12.5801 0.896451 11.459 0.343732 10.2528 0.115618C9.04664 -0.112497 7.80109 -0.00736837 6.65021 0.419689C5.49933 0.846745 4.4867 1.57956 3.72129 2.53927C2.95588 3.49898 2.46667 4.64926 2.30632 5.86629C2.1623 6.93343 2.27748 8.01956 2.64211 9.03275C3.00673 10.0459 3.61007 10.9564 4.40107 11.687C4.89022 12.116 5.28493 12.6419 5.56018 13.2314C5.83543 13.8209 5.98523 14.4611 6.00007 15.1115V15.2323C6.00086 15.966 6.29269 16.6695 6.81153 17.1883C7.33036 17.7072 8.03383 17.999 8.76757 17.9998H9.23257C9.96631 17.999 10.6698 17.7072 11.1886 17.1883C11.7074 16.6695 11.9993 15.966 12.0001 15.2323V14.8205C12.0113 14.2456 12.1466 13.6799 12.3967 13.1622C12.6468 12.6444 13.0057 12.1867 13.4491 11.8205C14.168 11.1909 14.7449 10.4156 15.1417 9.54615C15.5384 8.67668 15.7458 7.73284 15.7502 6.77715C15.7546 5.82146 15.5558 4.87575 15.1672 4.00266C14.7785 3.12958 14.2087 2.34905 13.4956 1.71279V1.71429ZM9.23257 16.4998H8.76757C8.43153 16.4994 8.10937 16.3657 7.87175 16.1281C7.63413 15.8905 7.50047 15.5683 7.50007 15.2323C7.50007 15.2323 7.49482 15.0373 7.49407 14.9998H10.5001V15.2323C10.4997 15.5683 10.366 15.8905 10.1284 16.1281C9.89077 16.3657 9.56861 16.4994 9.23257 16.4998ZM12.4576 10.694C11.6036 11.4347 10.9869 12.4106 10.6846 13.4998H9.75007V8.11179C10.1872 7.95723 10.566 7.67137 10.8345 7.29332C11.103 6.91527 11.2481 6.46349 11.2501 5.99979C11.2501 5.80088 11.1711 5.61012 11.0304 5.46946C10.8897 5.32881 10.699 5.24979 10.5001 5.24979C10.3012 5.24979 10.1104 5.32881 9.96974 5.46946C9.82909 5.61012 9.75007 5.80088 9.75007 5.99979C9.75007 6.19871 9.67105 6.38947 9.5304 6.53012C9.38975 6.67078 9.19898 6.74979 9.00007 6.74979C8.80116 6.74979 8.61039 6.67078 8.46974 6.53012C8.32909 6.38947 8.25007 6.19871 8.25007 5.99979C8.25007 5.80088 8.17105 5.61012 8.0304 5.46946C7.88975 5.32881 7.69898 5.24979 7.50007 5.24979C7.30116 5.24979 7.11039 5.32881 6.96974 5.46946C6.82909 5.61012 6.75007 5.80088 6.75007 5.99979C6.75199 6.46349 6.89713 6.91527 7.16563 7.29332C7.43414 7.67137 7.81289 7.95723 8.25007 8.11179V13.4998H7.25857C6.92031 12.3817 6.28591 11.3759 5.42257 10.589C4.68978 9.90624 4.16761 9.02807 3.91767 8.05816C3.66773 7.08825 3.70045 6.06708 4.01198 5.11516C4.3235 4.16325 4.90082 3.32031 5.67582 2.68582C6.45081 2.05133 7.39114 1.65177 8.38582 1.53429C8.59202 1.51128 8.79934 1.49976 9.00682 1.49979C10.295 1.49596 11.5386 1.97126 12.4958 2.83329C13.0506 3.32799 13.4939 3.93496 13.7963 4.61396C14.0987 5.29297 14.2533 6.02849 14.2499 6.77178C14.2465 7.51508 14.0851 8.24916 13.7765 8.92536C13.4679 9.60157 13.0191 10.2044 12.4598 10.694H12.4576Z'
            fill='white'
          />
        </g>
        <defs>
          <clipPath id='clip0_1_1140'>
            <rect width='18' height='18' fill='white' />
          </clipPath>
        </defs>
      </svg>
      <Box overflow={'hidden'} transition={'.5s'}>
        <Flex align={'center'} gap={'.8rem'} padding={'0rem'}>
          <span>Veerge Assistant</span>

          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_1_1143)'>
              <path
                d='M11.9996 5.99986C11.8589 5.85926 11.6682 5.78027 11.4693 5.78027C11.2705 5.78027 11.0797 5.85926 10.9391 5.99986L8.99959 7.93936L7.06009 5.99986C6.91864 5.86324 6.72919 5.78765 6.53254 5.78936C6.3359 5.79107 6.14779 5.86994 6.00873 6.009C5.86968 6.14806 5.7908 6.33616 5.78909 6.53281C5.78738 6.72946 5.86298 6.91891 5.9996 7.06036L7.93909 8.99986L5.9996 10.9394C5.86298 11.0808 5.78738 11.2703 5.78909 11.4669C5.7908 11.6636 5.86968 11.8517 6.00873 11.9907C6.14779 12.1298 6.3359 12.2087 6.53254 12.2104C6.72919 12.2121 6.91864 12.1365 7.06009 11.9999L8.99959 10.0604L10.9391 11.9999C11.0805 12.1365 11.27 12.2121 11.4666 12.2104C11.6633 12.2087 11.8514 12.1298 11.9904 11.9907C12.1295 11.8517 12.2084 11.6636 12.2101 11.4669C12.2118 11.2703 12.1362 11.0808 11.9996 10.9394L10.0601 8.99986L11.9996 7.06036C12.1402 6.91972 12.2192 6.72899 12.2192 6.53011C12.2192 6.33124 12.1402 6.14051 11.9996 5.99986Z'
                fill='white'
              />
              <path
                d='M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM9 16.5C7.51664 16.5 6.0666 16.0601 4.83323 15.236C3.59986 14.4119 2.63856 13.2406 2.07091 11.8701C1.50325 10.4997 1.35473 8.99168 1.64411 7.53682C1.9335 6.08197 2.64781 4.74559 3.6967 3.6967C4.7456 2.64781 6.08197 1.9335 7.53683 1.64411C8.99168 1.35472 10.4997 1.50325 11.8701 2.0709C13.2406 2.63856 14.4119 3.59985 15.236 4.83322C16.0601 6.06659 16.5 7.51664 16.5 9C16.4978 10.9885 15.7069 12.8948 14.3009 14.3009C12.8948 15.7069 10.9885 16.4978 9 16.5Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_1_1143'>
                <rect width='18' height='18' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </Flex>
      </Box>
    </Flex>
  );
};

export const Paginator = ({
  page = 1,
  change_page = (num: number) => {},
  max_page = 5
}: {
  page?: number;
  change_page?: Function;
  max_page?: number;
}) => {
  const next_page = () => {
    if (page < max_page) {
      change_page(page + 1);
    }
  };
  const previous_page = () => {
    if (page > 0) {
      change_page(page - 1);
    }
  };

  return (
    <Flex gap={'1.1rem'} align={'center'}>
      <Text color={'#606060'}>
        {page}/{max_page}
      </Text>
      <Flex gap={'.8rem'} align={'center'}>
        <Center
          as='button'
          height={'3.2rem'}
          width={'3.2rem'}
          borderRadius={'50%'}
          backgroundColor={'#e4e4e4'}
          onClick={previous_page}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M8 12L14 6L14 18L8 12Z' fill='#919191' />
          </svg>
        </Center>
        <Center
          as='button'
          height={'3.2rem'}
          width={'3.2rem'}
          borderRadius={'50%'}
          backgroundColor={'#e4e4e4'}
          onClick={next_page}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_1_1061)'>
              <path d='M16 12L10 18V6L16 12Z' fill='#191919' />
            </g>
            <defs>
              <clipPath id='clip0_1_1061'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
        </Center>
      </Flex>
    </Flex>
  );
};
