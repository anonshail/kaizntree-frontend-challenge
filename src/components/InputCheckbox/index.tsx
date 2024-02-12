import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`KaizntreeInputCheckbox-${id}`)

  return (
    <div className="KaizntreeInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("KaizntreeInputCheckbox--label", {
          "KaizntreeInputCheckbox--label-checked": checked,
          "KaizntreeInputCheckbox--label-disabled": disabled,
        })}
        onClick={() => onChange(!checked)} // Bug 2 fix. The below input is hidden (display is set to none, so I just made this a checkbox lol)
      />
      <input
        id={inputId}
        type="checkbox"
        className="KaizntreeInputCheckbox--input"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
    </div>
  )
}
