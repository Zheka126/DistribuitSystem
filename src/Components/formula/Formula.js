import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
  static className = "excel__formula";

  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input"],
    });
  }

  onInput(event) {
    console.log("formula", event.target);
  }

  onClick(event) {
    console.log("formula", event.target);
  }

  toHTML() {
    return `
    <div class="info">fx</div>
    <div id="formula" class="input" contenteditable spellcheck="false"></div>
  `;
  }
}
