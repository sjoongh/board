import EventManager from "../core/eventManager";
import { input } from "../core/h";

function InputText() {
  return {
    template: ({ className, placeholder, onChange, value }) => {
      EventManager.addEventHandler(className, "change", onChange);
      return input({
        type: "text",
        class: className,
        placeholder,
        value,
      });
    },
  };
}

export default InputText;