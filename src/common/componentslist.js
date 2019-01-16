/**
 * Created by Administrator on 2018/12/21.
 */

export default {
  XInput: (resolve) => require(['@/components/controls/XInput'], resolve),
  Checklist: (resolve) => require(['@/components/controls/Checklist'], resolve),
  PopupRadio: (resolve) => require(['@/components/controls/PopupRadio'], resolve),
  radio: (resolve) => require(['@/components/controls/radio'], resolve),
  XTextarea: (resolve) => require(['@/components/controls/XTextarea'], resolve),
}
export const  componentMap ={
  "textbox":"XInput",
  "checkBox":"Checklist",
  "combobox":"PopupRadio",
  "textArea":"XTextarea",
  "radio":"radio",
}

