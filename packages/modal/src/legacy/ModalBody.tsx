import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from '../styles/LegacyModal.module.css';

type ModalBodyProps = HTMLAttributes<HTMLDivElement> & { 'data-test-id'?: string };

const ModalBody = ({
  className,
  children,
  'data-test-id': testId = 'modal-body',
  ...rest
}: ModalBodyProps) => {
  const classes = cx(styles.body, className);

  return (
    <div data-test-id={testId} className={classes} {...rest}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
