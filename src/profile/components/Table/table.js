import "./table.scss";

class TableIcon extends HTMLElement {
    constructor() {
        super();
        this.icon1;
        this.icon2;
        this.icon3;
        this.icon4;
        this.state1;
        this.state2;
        this.state3;
        this.state4;
        this.date1;
        this.date2;
        this.date3;
        this.date4;
        this.mount1;
        this.mount2;
        this.mount3;
        this.mount4;
    }

    static get observedAttributes() {
        return [
            "icon1",
            "icon2",
            "icon3",
            "icon4",
            "state1",
            "state2",
            "state3",
            "state4",
            "date1",
            "date2",
            "date3",
            "date4",
            "mount1",
            "mount2",
            "mount3",
            "mount4"
        ]
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {

        switch (nameAtr) {
            case "icon1":
                this.icon1 = newValue
                break;
                
            case "icon2":
                this.icon2 = newValue
                break;
                
            case "icon3":
                this.icon3 = newValue
                break;
                
            case "icon4":
                this.icon4 = newValue
                break;
                
            case "state1":
                this.state1 = newValue
                break;
            case "state2":
                this.state2 = newValue
                break;
            case "state3":
                this.state3 = newValue
                break;
            case "state4":
                this.state4 = newValue
                break;

            case "date1":
                this.date1 = newValue
                break;
            case "date2":
                this.date2 = newValue
                break;
            case "date3":
                this.date3 = newValue
                break;
            case "date4":
                this.date4 = newValue
                break;

            case "mount1":
                this.mount1 = newValue
                break;
            case "mount2":
                this.mount2 = newValue
                break;
            case "mount3":
                this.mount3 = newValue
                break;
            case "mount4":
                this.mount4 = newValue
                break;
        }

    }


    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
    <link rel="stylesheet" href="../Table/table.scss">
    <section class="Table-container">
    <table class="Content-table">
        <thead>
          <tr class="Color-Table">
            <th>Movimiento</th>
            <th>Fecha</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="Content-Type">
              <span>${this.icon1}</span>   
              <p>${this.state1}</p>            
            </td>
            <td>${this.date1}</td>
            <td>$${this.mount1}</td>
          </tr>
          <tr>
            <td class="Content-Type">
              <span>${this.icon2}</span>    
              <p>${this.state2}</p>
            </td>
            <td>${this.date2}</td>
            <td>$${this.mount2}</td>
          </tr>
          <tr>
            <td class="Content-Type">
              <span>${this.icon3}</span>
             <p>${this.state3}</p>
            </td>
            <td>${this.date3}</td>
            <td>$${this.mount3}</td>
          </tr>
          <tr>
            <td class="Content-Type">
              <span>${this.icon4} </span>
              <p>${this.state4}</p>
            </td>
            <td>${this.date4}</td>
            <td>$${this.mount4}</td>
          </tr>
        </tbody>
    </table>
    <div class="Movements">
      <a href="/">Ver más movimientos</a>
    </div>
  </section>
    `
    }

}

customElements.define('table-icon', TableIcon)