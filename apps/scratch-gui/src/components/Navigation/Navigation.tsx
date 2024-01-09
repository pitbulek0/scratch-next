import { cva, type VariantProps } from 'class-variance-authority';

const navigation = cva('flex w-full h-12', {
  variants: {
    background: {
      dark: 'bg-dark-700',
      light: 'bg-light-100',
    },
  },
  defaultVariants: {
    background: 'dark',
  },
});

export interface NavigationProps extends VariantProps<typeof navigation> {
  className?: string;
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ className, background, children }) => {
  return <nav className={navigation({ background, className })}>{children}</nav>;
};

export default Navigation;
