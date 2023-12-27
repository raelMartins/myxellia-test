import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styles from 'styles/layout/header/tablink.module.scss';

export const TabLink = ({
  icon,
  label,
  active = false,
  noicon = false
}: {
  icon: ReactNode;
  label: String;
  active?: Boolean;
  noicon?: boolean;
}) => {
  return (
    <Link
      href='#'
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap='.8rem'
      // minWidth={148}
      borderRadius={8}
      padding='.7rem 2.2rem'
      _hover={{ backgroundColor: '#f5f5f5' }}
      backgroundColor={active ? '#f5f5f5' : 'transparent'}
      className={styles.tablink}
      style={noicon ? { minWidth: 'max-content' } : {}}
    >
      {noicon ? (
        <span className={styles.icon}>{label}</span>
      ) : (
        <>
          <span className={styles.icon}>{icon}</span>
          <span className={styles.label}>{label}</span>
        </>
      )}
    </Link>
  );
};
