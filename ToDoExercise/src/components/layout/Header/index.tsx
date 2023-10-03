import React from 'react';
import styles from './index.module.scss';

export interface HeaderProps {
  invert?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  invert = false,
  title,
  subtitle = '',
  rightContent = null,
  children = null,
}: HeaderProps) => {
  return (
    <div className={styles.background} data-testid="headerWrapper">
      <div className={styles.container}>
        <div
          className={`${styles.left} ${invert ? styles.invert : ''}`}
          data-testid="headerContainer"
        >
          <h1>{title}</h1>
          {children ? (
            children
          ) : (
            <>
              <span>{subtitle}</span>
              {children}
            </>
          )}
        </div>
        <div className={styles.right} data-testid="headerRightContent">
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default Header;
