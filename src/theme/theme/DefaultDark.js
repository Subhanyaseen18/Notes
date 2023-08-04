import { Colours, fontsSize, borders, family } from '../../components/Colors';
const DEFAULT_DARK_COLOR_THEME = {
  appBackground: Colours.green,
  white: Colours.white,
  textColor: Colours.white,
  error: Colours.red,
  IconColor: Colours.green,
  bariconColor: Colours.white,
  buttonBackground: Colours.lightgrey,
  inputBorderBackground: Colours.white,
  inputtext: Colours.black,
  borderColor: Colours.softblue,
  buttonText: Colours.white,
  logoutborderColor: Colours.red,
  logoutTextColor: Colours.red,
  headingTextborder: Colours.green,
  headingText: Colours.white,
  modaltextColor: Colours.black,
  modalBackground: Colours.white,
  modelbackscreenColor: Colours.lightblack,
  modalbuttonBackground: Colours.lightgrey,
  modaliconColor: Colours.black,
  welbackColor: Colours.grey,
  viewbtnColor: Colours.blue,
};

const FONT_SET = {
  size: {
    xSmall: fontsSize.extrasmall,
    small: fontsSize.small,
    medium: fontsSize.medium,
    large: fontsSize.large,
    xLarge: fontsSize.extralarge,
  },
  family: {
    xsmall: family.extrasmall,
    small: family.small,
    medium: family.medium,
    large: family.large,
    xlarge: family.extralarge,
  },
};

const BORDER_RADIUS = {
  radius1: borders.buttonBorder,
  radius2: borders.inputRadius,
  radius3: borders.modal,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME = {
  id: DEFAULT_DARK_THEME_ID,
  color: DEFAULT_DARK_COLOR_THEME,
  size: FONT_SET.size,
  borders: BORDER_RADIUS,
  family: FONT_SET.family,
};
