/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MenuShidoris {}
}

declare global {


  interface HTMLMenuShidorisElement extends Components.MenuShidoris, HTMLStencilElement {}
  var HTMLMenuShidorisElement: {
    prototype: HTMLMenuShidorisElement;
    new (): HTMLMenuShidorisElement;
  };
  interface HTMLElementTagNameMap {
    'menu-shidoris': HTMLMenuShidorisElement;
  }
}

declare namespace LocalJSX {
  interface MenuShidoris extends JSXBase.HTMLAttributes<HTMLMenuShidorisElement> {}

  interface IntrinsicElements {
    'menu-shidoris': MenuShidoris;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


