import { Flex, Grid, Heading } from '@chakra-ui/react';
import { CustomersOverviewIcon, PropertyOverviewIcon } from './SVGAssets';
import { SimpleOverviewStat } from './SimpleOverviewStat';
import { ViewAllLink } from './Widgets';
import styles from 'styles/components/customersoverviewsection.module.scss';

export const CustomersOverviewSection = () => {
  return (
    <>
      <Flex gap={'1rem'} align={'center'} mb={'2.1rem'}>
        <CustomersOverviewIcon />
        <Heading fontWeight={'500'} fontSize={'1.4rem'} color={'#3d3d3d'}>
          Customers Overview
        </Heading>
        <span style={{ marginLeft: 'auto' }}>
          <ViewAllLink />
        </span>
      </Flex>
      <Grid
        // templateColumns={'repeat(4, 1fr)'}
        gap={'1.2rem'}
        className={styles.grid_stats}
      >
        <SimpleOverviewStat value={50} label='Total' />
        <SimpleOverviewStat value={42} label='New' />
        <SimpleOverviewStat value={39} label='Active' />
        <SimpleOverviewStat value={11} label='Inactive' />
      </Grid>
    </>
  );
};
