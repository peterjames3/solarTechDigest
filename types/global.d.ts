declare global {
    namespace JSX {
      interface IntrinsicElements {
        "amp-img": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }
  
  export {};
  