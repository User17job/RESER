import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_extends,
  require_prop_types,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-ADX7F6XS.js";
import {
  require_jsx_runtime
} from "./chunk-A5KFILAF.js";
import {
  __toESM,
  require_react
} from "./chunk-QEHVKR7R.js";

// node_modules/@mui/material/CardContent/CardContent.js
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/material/CardContent/cardContentClasses.js
function getCardContentUtilityClass(slot) {
  return generateUtilityClass("MuiCardContent", slot);
}
var cardContentClasses = generateUtilityClasses("MuiCardContent", ["root"]);
var cardContentClasses_default = cardContentClasses;

// node_modules/@mui/material/CardContent/CardContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component"];
var useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getCardContentUtilityClass, classes);
};
var CardContentRoot = styled_default("div", {
  name: "MuiCardContent",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(() => {
  return {
    padding: 16,
    "&:last-child": {
      paddingBottom: 24
    }
  };
});
var CardContent = React.forwardRef(function CardContent2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCardContent"
  });
  const {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(CardContentRoot, _extends({
    as: component,
    className: clsx_default(classes.root, className),
    ownerState,
    ref
  }, other));
});
true ? CardContent.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var CardContent_default = CardContent;

export {
  getCardContentUtilityClass,
  cardContentClasses_default,
  CardContent_default
};
//# sourceMappingURL=chunk-AJMRFQMH.js.map
