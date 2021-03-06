import {mergeAndApplyMatchingStyles} from './styleHelpers.js';

export {
  applyIfFunction,
  applyToIfFunction, composeViews, composeViewsFromStruct,
  e, eMap, itemizeProps, joinComponents, keyWith, keyWithOr, keyWithDatum, liftAndExtract, liftAndExtractItems, loadingCompleteStatus,
  apolloStatuses,
  mergeEventHandlersForViews,
  mergePropsForViews,
  mergeStylesIntoViews,
  nameLookup,
  propLensEqual, propsAndStyle, propsFor,
  propsForItem, propsForSansClass,
  renderChoicepoint, renderErrorDefault, renderLoadingDefault, makeTestPropsFunction, keysMatchingStatus,
  keyApolloResultWithOrLoadError,
  componentAndPropsFor,
  apolloContainerComponent,
  relevantKeyNotMatchingStatus,
  bypassToDataIfUnauthenticated
} from './componentHelpers.js';

export {
  resolveSvgReact
} from './svgComponentHelpers.js';

export {
  applyStyleFunctionOrDefault,
  createScaledPropertyGetter, getClass, getClassAndStyle, getStyleObj, styleArithmetic,
  styleMultiplier,
  mergeAndApplyMatchingStyles, applyMatchingStyles
} from './styleHelpers.js';

export {FlexAuto, Half, Logo, maxedImage, Quarter, Third, ThreeQuarters} from './atoms/atoms.js';

export {renderWithThemeForTest, ChakraProviderWrapper} from './themeHelpers.js'
