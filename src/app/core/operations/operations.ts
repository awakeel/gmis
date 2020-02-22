import { FormControl, Validators, NgControlStatus } from "@angular/forms";

const useInputField = (type, name) => {
  return `<input type="${type}" formControlName="${name}"/>`;
};

const useSelectBox = (type, name, options) => {
  let result = "";
  options.forEach(item => {
    result += `<option value="${item.id}">${item.title}</option>`;
  });
  return `<${type} formControlName="${name}">${result}</${type}>`;
};

const jsonToFormBuilder = json => {
  const controls = [];
  json.forEach(element => {
    element.data.forEach(res => {
        const validationsArray = [];
        res.validations.forEach(val => {
          if (val.name === "required") {
            validationsArray.push(Validators.required);
          }
          if (val.name === "pattern") {
            validationsArray.push(Validators.pattern(val.validator));
          }
        });
        controls[res.name] = new FormControl("", validationsArray);
      });
  });
  return controls;
};

const flattern = (arr)=>{
    return [].concat.apply([], arr);
}

export { useSelectBox, useInputField, jsonToFormBuilder, flattern };
