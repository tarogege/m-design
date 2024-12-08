export type LabelProps = React.HTMLAttributes<HTMLLabelElement> & {
  /** boolean string, node
  @default false
  @example 
  */
  required?: React.ReactNode;
  /**
   * @default medium
   */
  size?: "small" | "medium" | "large";
  /**
   * @default false
   */
  disabled?: boolean;
  /**
   * @default regular
   */
  weight?: "regular" | "semibold";
};
