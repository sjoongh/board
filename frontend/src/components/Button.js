import EventManager from "../core/eventManager";
import { button } from "../core/h";

function Button() {
  return {
    template: ({ name, className, onClick, disabled = false }) => {
      EventManager.addEventHandler(className, "click", onClick);
      return button({ class: className, ...(disabled ? { disabled } : {}) }, [
        name,
      ]);
    },
  };
}

export default Button;