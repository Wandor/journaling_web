import { Button } from 'antd';
import { Buttons, ButtonsGroup } from '../styles/button.style';
import withDirection from '../../helpers/rtl';
const AntButton = Buttons(Button);
const isoButton = withDirection(AntButton);
const AntButtonGroup = ButtonsGroup(Button.Group);
const ButtonGroup = withDirection(AntButtonGroup);

export default isoButton;
export { ButtonGroup };
