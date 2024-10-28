export type ForwardRefComponent<Props> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & {
    children?: JSX.Element | string;
    style?: React.CSSProperties;
    className?: string;
  } & React.RefAttributes<Element>
>;
