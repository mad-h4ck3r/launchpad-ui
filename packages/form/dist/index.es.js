import './style.css';
import { forwardRef, useState, useRef, Children, isValidElement, cloneElement } from "react";
import { cx } from "classix";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { VisuallyHidden } from "@react-aria/visually-hidden";
const formGroup = "_formGroup_1qrlg_1";
const formIncreasedErrorMargin = "_formIncreasedErrorMargin_1qrlg_9";
const formInline = "_formInline_1qrlg_13";
const form = "_form_1qrlg_1";
const formInput = "_formInput_1qrlg_27";
const isFocused = "_isFocused_1qrlg_47";
const iconField = "_iconField_1qrlg_64";
const suffixContainer = "_suffixContainer_1qrlg_68";
const isInvalid = "_isInvalid_1qrlg_73";
const inlineForm = "_inlineForm_1qrlg_84";
const label = "_label_1qrlg_89";
const labelDisabled = "_labelDisabled_1qrlg_95";
const labelOptional = "_labelOptional_1qrlg_103";
const compactTextField = "_compactTextField_1qrlg_109";
const fieldError = "_fieldError_1qrlg_133";
const hint = "_hint_1qrlg_175";
const field = "_field_1qrlg_133";
const fieldErrorMessage = "_fieldErrorMessage_1qrlg_195";
const isDisabled = "_isDisabled_1qrlg_208";
const checkbox = "_checkbox_1qrlg_270";
const radio = "_radio_1qrlg_277";
const number = "_number_1qrlg_281";
const suffix = "_suffix_1qrlg_68";
const iconFieldIcon = "_iconFieldIcon_1qrlg_319";
const formInputTiny = "_formInputTiny_1qrlg_327";
const requiredAsterisk = "_requiredAsterisk_1qrlg_336";
const fieldSet = "_fieldSet_1qrlg_340";
const isActive = "_isActive_1qrlg_351";
const styles = {
  formGroup,
  formIncreasedErrorMargin,
  formInline,
  form,
  formInput,
  isFocused,
  iconField,
  suffixContainer,
  isInvalid,
  inlineForm,
  label,
  labelDisabled,
  labelOptional,
  compactTextField,
  fieldError,
  hint,
  field,
  fieldErrorMessage,
  isDisabled,
  checkbox,
  radio,
  number,
  suffix,
  iconFieldIcon,
  formInputTiny,
  requiredAsterisk,
  fieldSet,
  isActive
};
const RequiredAsterisk = ({
  className,
  "data-test-id": testId = "required-asterisk",
  ...rest
}) => {
  const classes = cx(styles.requiredAsterisk, className);
  return /* @__PURE__ */ jsx("span", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children: "*"
  });
};
const Label = ({
  disabled,
  className,
  children,
  required = false,
  optional = false,
  "data-test-id": testId = "label",
  ...rest
}) => {
  const classes = cx(styles.label, className, disabled && styles.labelDisabled);
  return /* @__PURE__ */ jsxs("label", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children: [children, optional && !required && /* @__PURE__ */ jsx("small", {
      className: styles.labelOptional,
      children: "(optional)"
    }), required && !optional && /* @__PURE__ */ jsx(RequiredAsterisk, {})]
  });
};
const Checkbox = forwardRef(({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  children,
  disabled,
  checked,
  labelClassName,
  "data-test-id": testId = "checkbox",
  ...rest
}, ref) => {
  const hasAriaLabel = ariaLabel !== void 0 || ariaLabelledby !== void 0;
  if (!children && !hasAriaLabel) {
    console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  }
  return /* @__PURE__ */ jsxs(Label, {
    className: labelClassName,
    children: [/* @__PURE__ */ jsx("input", {
      ...rest,
      ref,
      checked,
      "aria-checked": checked ? "true" : "false",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      className: styles.checkbox,
      disabled,
      type: "checkbox",
      "data-test-id": testId
    }), " ", disabled ? /* @__PURE__ */ jsx("span", {
      className: styles.labelDisabled,
      children
    }) : children]
  });
});
Checkbox.displayName = "Checkbox";
const createFieldErrorId = (fieldIdentifier) => fieldIdentifier ? `${[...fieldIdentifier].join("")}-err` : void 0;
const TextField = forwardRef(({
  className,
  type = "text",
  tiny = false,
  readOnly,
  tabIndex = 0,
  suffix: suffix2,
  overrideWidth,
  "data-test-id": testId = "text-field",
  ...rest
}, ref) => {
  const classes = overrideWidth ? className : cx(styles.formInput, tiny && styles.formInputTiny, className);
  if (suffix2) {
    return /* @__PURE__ */ jsxs("div", {
      className: styles.suffixContainer,
      children: [/* @__PURE__ */ jsx("input", {
        ...rest,
        type,
        "data-test-id": testId,
        className: classes,
        readOnly,
        ref,
        "aria-describedby": rest["aria-describedby"] || createFieldErrorId(rest.id)
      }), /* @__PURE__ */ jsx("label", {
        className: styles.suffix,
        htmlFor: rest.id,
        children: suffix2
      })]
    });
  }
  return /* @__PURE__ */ jsx("input", {
    ...rest,
    type,
    className: classes,
    readOnly,
    tabIndex,
    ref,
    "data-test-id": testId,
    style: overrideWidth ? {
      width: overrideWidth
    } : void 0,
    "aria-describedby": rest["aria-describedby"] || createFieldErrorId(rest.id)
  });
});
TextField.displayName = "TextField";
const CompactTextField = forwardRef(({
  className,
  id,
  label: label2,
  needsErrorFeedback,
  value,
  onFocus,
  onBlur,
  "data-test-id": testId = "compact-text-field",
  ...rest
}, ref) => {
  const [isActive2, setIsActive] = useState((typeof value === "boolean" || value ? value.toString() : "").trim().length !== 0);
  const isActiveState = isActive2 || needsErrorFeedback;
  const classes = cx(styles.compactTextField, className, isActiveState && styles.isActive);
  const placeholder = isActiveState ? "" : label2;
  const handleFocus = (event) => {
    setIsActive(true);
    if (onFocus) {
      onFocus(event);
    }
  };
  const handleBlur = (event) => {
    const value2 = event.target.value || "";
    setIsActive(value2.trim().length !== 0);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: classes,
    "data-test-id": testId,
    children: [/* @__PURE__ */ jsx(Label, {
      htmlFor: id,
      children: label2
    }), /* @__PURE__ */ jsx(TextField, {
      ...rest,
      id,
      placeholder,
      value,
      ref,
      onFocus: handleFocus,
      onBlur: handleBlur
    })]
  });
});
CompactTextField.displayName = "CompactTextField";
const FieldError = ({
  name,
  errorMessage,
  className,
  "data-test-id": testId = "field-error",
  ...rest
}) => {
  if (!errorMessage) {
    return null;
  }
  return /* @__PURE__ */ jsx("span", {
    ...rest,
    className: cx(styles.fieldError, className),
    "aria-live": "polite",
    "data-test-id": testId,
    id: createFieldErrorId(name),
    children: `Error - ${errorMessage}`
  });
};
const FieldSet = ({
  children,
  className,
  "data-test-id": testId = "field-set",
  ...rest
}) => {
  const classes = cx(styles.fieldSet, className);
  return /* @__PURE__ */ jsx("fieldset", {
    "data-test-id": testId,
    className: classes,
    ...rest,
    children
  });
};
const Form = (props) => {
  const {
    className,
    inline,
    children,
    hasIncreasedErrorMargin,
    "data-test-id": testId = "form",
    ...rest
  } = props;
  const classes = cx(styles.form, className, inline && styles.formInline, !!hasIncreasedErrorMargin && styles.formIncreasedErrorMargin);
  return /* @__PURE__ */ jsx("form", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children
  });
};
const FormGroup = (props) => {
  const {
    className,
    name,
    ignoreValidation,
    isInvalid: isInvalid2,
    children,
    "data-test-id": testId = "form-group",
    ...rest
  } = props;
  const classes = cx(styles.formGroup, className, !ignoreValidation && isInvalid2 && styles.isInvalid);
  return /* @__PURE__ */ jsx("fieldset", {
    className: classes,
    "data-test-id": testId,
    ...rest,
    children
  });
};
const FormHint = ({
  className,
  children,
  "data-test-id": testId = "form-hint",
  ...rest
}) => {
  const classes = cx(styles.hint, className);
  return /* @__PURE__ */ jsx("div", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children
  });
};
const FormField = ({
  isRequired,
  label: label2,
  name,
  htmlFor,
  hint: hint2,
  errorMessage,
  ignoreValidation,
  isInvalid: isInvalid2,
  children,
  className,
  onBlur,
  "data-test-id": testId = "form-field"
}) => {
  const handleBlur = () => {
    onBlur && onBlur(name);
  };
  return /* @__PURE__ */ jsxs(FormGroup, {
    className: cx(styles.field, className),
    name,
    ignoreValidation,
    isInvalid: isInvalid2,
    onBlur: handleBlur,
    "data-test-id": testId,
    children: [label2 && /* @__PURE__ */ jsxs("label", {
      htmlFor,
      children: [label2, isRequired && /* @__PURE__ */ jsx(RequiredAsterisk, {})]
    }), hint2 && /* @__PURE__ */ jsx(FormHint, {
      className: styles.hint,
      children: hint2
    }), children, /* @__PURE__ */ jsx(FieldError, {
      className: styles.fieldErrorMessage,
      name,
      errorMessage
    })]
  });
};
const IconField = ({
  icon,
  children,
  className,
  "data-test-id": testId = "icon-field",
  ...rest
}) => {
  const Icon = icon;
  const classes = cx(styles.iconField, className);
  return /* @__PURE__ */ jsxs("div", {
    className: classes,
    "data-test-id": testId,
    ...rest,
    children: [children, /* @__PURE__ */ jsx(Icon, {
      size: "small",
      className: styles.iconFieldIcon
    })]
  });
};
const Radio = ({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  checked = false,
  children,
  className,
  disabled = false,
  id,
  labelClassName,
  labelStyle,
  "data-test-id": testId = "radio",
  ...rest
}) => {
  const hasAriaLabel = ariaLabel !== void 0 || ariaLabelledby !== void 0;
  if (!children && !hasAriaLabel) {
    console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  }
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("input", {
      ...rest,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      className: cx(styles.radio, className),
      checked,
      disabled,
      id,
      "data-test-id": testId,
      type: "radio"
    }), /* @__PURE__ */ jsx(Label, {
      className: labelClassName,
      htmlFor: id,
      style: labelStyle,
      children: disabled ? /* @__PURE__ */ jsx("span", {
        className: styles.labelDisabled,
        children
      }) : children
    })]
  });
};
const RadioGroup = (props) => {
  const {
    name,
    value,
    onChange,
    children,
    disabled,
    legend,
    "data-test-id": testId = "radio-group",
    ...rest
  } = props;
  const fieldsetRef = useRef(null);
  function updateRadioElems(elem) {
    var _a, _b;
    if (!isValidElement(elem)) {
      return elem;
    }
    const item = elem;
    if ((item == null ? void 0 : item.type) && item.type === Radio) {
      return cloneElement(item, {
        ...item.props,
        name,
        checked: item.props.value === value,
        onChange,
        disabled: typeof ((_a = item.props) == null ? void 0 : _a.disabled) !== "undefined" ? item.props.disabled : disabled
      });
    }
    if ((item == null ? void 0 : item.type) && item.type === Label) {
      return cloneElement(item, {
        ...item.props,
        onChange,
        disabled
      });
    }
    const elemChildren = (_b = item == null ? void 0 : item.props) == null ? void 0 : _b.children;
    if (elemChildren) {
      if (Array.isArray(elemChildren)) {
        return cloneElement(item, {
          children: Children.map(elemChildren, (elemChild) => updateRadioElems(elemChild))
        });
      }
      return cloneElement(item, {
        children: updateRadioElems(elemChildren)
      });
    }
    if ((item == null ? void 0 : item.type) && item.type !== Radio && item.type !== Label) {
      return item;
    }
    return null;
  }
  const radios = Children.map(children, (child) => updateRadioElems(child));
  return /* @__PURE__ */ jsxs("fieldset", {
    "data-test-id": testId,
    ref: fieldsetRef,
    children: [legend && /* @__PURE__ */ jsx("legend", {
      children: /* @__PURE__ */ jsx(VisuallyHidden, {
        children: legend
      })
    }), /* @__PURE__ */ jsx("div", {
      ...rest,
      children: radios
    })]
  });
};
const Select = ({
  className,
  children,
  "data-test-id": testId = "select",
  ...rest
}) => {
  const classes = cx(styles.formInput, className);
  return /* @__PURE__ */ jsx("select", {
    ...rest,
    "data-test-id": testId,
    className: classes,
    children
  });
};
const TextArea = forwardRef(({
  className,
  "data-test-id": testId = "text-area",
  ...props
}, ref) => {
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.stopPropagation();
    }
    if (e.key === "Escape") {
      e.nativeEvent.stopImmediatePropagation();
    }
  };
  return /* @__PURE__ */ jsx("textarea", {
    ...props,
    className: cx(styles.formInput, className),
    ref,
    "data-test-id": testId,
    "aria-describedby": props["aria-describedby"] || createFieldErrorId(props.id),
    onKeyDown
  });
});
TextArea.displayName = "TextArea";
export {
  Checkbox,
  CompactTextField,
  FieldError,
  FieldSet,
  Form,
  FormField,
  FormGroup,
  FormHint,
  IconField,
  Label,
  Radio,
  RadioGroup,
  RequiredAsterisk,
  Select,
  TextArea,
  TextField
};
//# sourceMappingURL=index.es.js.map
