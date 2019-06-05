import {Component, h} from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  

  closeNav () {
    if (
      document.getElementById("mySidenav")
    ) {
      document.getElementById("mySidenav").style.width = "0";      
    }
    
  };

  openNav () {
    if (
      document.getElementById("mySidenav")
    ) {
      document.getElementById("mySidenav").style.width = "250px";
      
    }
  };

  


  render() {

    return[

      <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>
      <slot></slot>
      </div>,
      <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => this.openNav()}>&#9776; open</span>
      
    ]

  }
      
      
}   
      

      
