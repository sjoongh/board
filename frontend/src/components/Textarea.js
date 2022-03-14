import EventManager from "../core/eventManager";
import { input, textarea } from "../core/h";

function Textarea() {
  return {
    template: ({ className, placeholder, onChange, value }) => {
      EventManager.addEventHandler(className, "change", onChange);
      return textarea(
        {
          type: "text",
          class: className,
          placeholder,
        },
        [value]
      );
    },
  };
}

export default Textarea;
