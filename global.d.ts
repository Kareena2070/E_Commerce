// Project-wide type declarations

// Treat imported CSS files as modules exporting a map of class names -> string
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

export {};
