import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { ListingOverviewCard } from './Widgets';
import { BookmarkIcon } from './SVGAssets';

export const ListingOverviewSection = () => {
  return (
    <>
      <Heading fontSize='2rem'>Listing Overview</Heading>
      <Grid gap={'2rem'} templateColumns={'repeat(2, 1fr)'} mt={'1.8rem'}>
        <ListingOverviewCard title='most viewed' accent_color='#12D8A0' />
        <ListingOverviewCard title='most shared' accent_color='#4545FE' />
      </Grid>
      <Grid
        gap={'2rem'}
        templateColumns={'repeat(2, 1fr)'}
        mt={'1.8rem'}
        backgroundColor={'#f5f5f566'}
        borderRadius={'1.2rem'}
        padding={'1rem'}
        alignItems={'flex-end'}
      >
        <ListingOverviewCard title='most watchlisted' accent_color='#FF9103' />
        <Flex
          padding={'1rem'}
          pl={'1.5rem'}
          justify={'space-between'}
          align={'flex-start'}
          backgroundColor={'white'}
          borderRadius={'1.2rem'}
          border={'.1rem solid #e4e4e4'}
        >
          <Box>
            <Text fontSize={'2.4rem'} fontWeight={'400'}>
              0
            </Text>
            <Text fontSize={'1rem'} fontWeight={'500'}>
              Number of watchlists
            </Text>
          </Box>
          <BookmarkIcon />
        </Flex>
      </Grid>
    </>
  );
};
