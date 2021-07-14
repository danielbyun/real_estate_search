import * as React from 'react'
import {CircleButton, Dialog} from './lib'
import {VisuallyHidden} from '@reach/visually-hidden'

const callAll =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args))

const ModalContext = React.createContext()

const Modal = (...props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

const ModalDismissButton = ({children: child}) => {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onCLick),
  })
}

const ModalOpenButton = ({children: child}) => {
  const [, setIsOpen] = React.useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  })
}

const ModalContentsBase = (props) => {
  const [isOpen, setIsOpen] = React.useContext(ModalContext)
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

const ModalContexts = ({title, children, ...props}) => {
  return (
    <ModalContentsBase>
      <div>
        <ModalDismissButton>
          <CircleButton>
            <VisuallyHidden></VisuallyHidden>
          </CircleButton>
        </ModalDismissButton>
      </div>
    </ModalContentsBase>
  )
}

export {Modal, ModalDismissButton, ModalOpenButton, ModalContexts}
