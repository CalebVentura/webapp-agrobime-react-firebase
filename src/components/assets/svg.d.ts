declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.scss" {
  const content: any;
  export default content;
}

declare module "*.md" {
  const value: string;
  export default value;
}
