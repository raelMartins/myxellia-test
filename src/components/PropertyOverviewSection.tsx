import { Flex, Grid, Heading } from '@chakra-ui/react';
import { PropertyOverviewIcon } from './SVGAssets';
import { SimpleOverviewStat } from './SimpleOverviewStat';
import { ViewAllLink } from './Widgets';

export const PropertyOverviewSection = () => {
  return (
    <>
      <Flex gap={'1rem'} align={'center'} mb={'2.5rem'}>
        <PropertyOverviewIcon />
        <Heading fontWeight={'500'} fontSize={'1.4rem'} color={'#3d3d3d'}>
          Property Overview
        </Heading>
        <span style={{ marginLeft: 'auto' }}>
          <ViewAllLink />
        </span>
      </Flex>
      <Grid templateColumns={'repeat(3, 1fr)'} gap={'1.2rem'}>
        <SimpleOverviewStat value={132} label='Total' />
        <SimpleOverviewStat value={20} label='Available' />
        <SimpleOverviewStat value={112} label='Sold Out' />
      </Grid>
    </>
  );
};
