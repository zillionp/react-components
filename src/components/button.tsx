import React from "react";

interface Props {
  name?: string;
  title: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Button: React.FC<Props> = (props: Props): React.ReactElement => {
  const { title, ...rest } = props;
  return (<button {...rest}>{title}</button>)
};