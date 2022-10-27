import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Button.module.css';

type ButtonGroupProps = HTMLAttributes<HTMLDivElement> & {
  spacing?: 'compact' | 'base' | 'large';
  'data-test-id'?: string;
};

const ButtonGroup = ({
  spacing = 'base',
  className,
  children,
  'data-test-id': testId = 'button-group',
  ...rest
}: ButtonGroupProps) => {
  const classes = cx(styles.group, styles[`${spacing}`], className);

  return (
    <div className={classes} data-test-id={testId} {...rest}>
      {children}
    </div>
  );
};

export { ButtonGroup };
export type { ButtonGroupProps };
