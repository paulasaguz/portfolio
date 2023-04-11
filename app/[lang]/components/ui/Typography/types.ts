type TagTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'small' | 'strong';
type VariantTypes = 'heading' | 'body' | 'pageHeading' | 'sectionHeading';

export interface TypographyInterface {
  Tag: TagTypes;
  children?: React.ReactNode;
  variant?: VariantTypes;
  className?: string;
}
