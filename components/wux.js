import Dialog from 'dialog/dialog';
import Picker from 'picker/picker';
import PickerCity from 'picker-city/picker-city';

export default function () {
    return {
        $wuxPicker: Picker,
        $wuxPickerCity: PickerCity,
        $wuxDialog: Dialog
    }
}