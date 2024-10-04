import React from "react";
import { Label } from "../label";
import { Input } from "../input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../select";
import { Textarea } from "../textarea";

function FormControls({ formControls = [], formData, setFormData }) {
  function renderComponentByType(getControleItem) {
    let element = null;
    const currentControlItemValue = formData[getControleItem.name];
    
    switch (getControleItem.componentType) {
      case "input":
        element = (
          <Input
            id={getControleItem.name}
            name={getControleItem.name}
            placeholder={getControleItem.placeholder}
            type={getControleItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControleItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            value={currentControlItemValue}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControleItem.name]: value,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControleItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getControleItem.options && getControleItem.option.length > 0
                ? getControleItem.options.map((optionItem) => (
                    <SelectItem id={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            id={getControleItem.name}
            name={getControleItem.name}
            placeholder={getControleItem.placeholder}
            type={getControleItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControleItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      default:
        element = (
          <Input
            id={getControleItem.name}
            name={getControleItem.name}
            placeholder={getControleItem.placeholder}
            type={getControleItem.type}
            value={currentControlItemValue}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControleItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controleItem) => (
        <div key={controleItem.name}>
          <Label htmlFor={controleItem.name}>{controleItem.label}</Label>
          {renderComponentByType(controleItem)}
        </div>
      ))}
    </div>
  );
}

export default FormControls;
