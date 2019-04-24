import { DirectiveOptions } from "vue";
import { DirectiveBinding } from "vue/types/options";

const myDirective: DirectiveOptions = {
  inserted(element: HTMLElement, binding: DirectiveBinding) {
    console.log("my-directive");
    element.innerHTML = "마이 디렉티브지롱";
    console.log(binding);
    element.style.color = binding.value;
  }
};

export default myDirective;
