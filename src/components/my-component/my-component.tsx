import {Component, h} from '@stencil/core';


@Component({
  tag: 'menu-shidoris',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  

  closeNav () {
   
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";     
    
    
  };

  openNav () {
    
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      
    
  };

  


  render() {

    return[

      <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onClick={() => this.closeNav()}>&times;</a>
      <slot></slot>
      </div>,
      <div id="main">
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => this.openNav()}>&#9776; abrir</span>

      </div>
      
      
    ]

  }
      
      
}   
      

      
