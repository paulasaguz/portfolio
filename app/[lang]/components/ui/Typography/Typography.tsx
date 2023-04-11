import cn from 'classnames';
import s from './Typography.module.css';

import { TypographyInterface } from './types';

const Typography = ({ Tag, variant, children, className }: TypographyInterface) => {
  return (
    <Tag
      className={cn(
        s.root,
        {
          [s.body]: variant === 'body',
          [s.heading]: variant === 'heading',
          [s.pageHeading]: variant === 'pageHeading',
          [s.sectionHeading]: variant === 'sectionHeading',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
