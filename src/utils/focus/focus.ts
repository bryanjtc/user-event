import {eventWrapper} from '../misc/eventWrapper'
import {getActiveElement} from './getActiveElement'
import {isFocusable} from './isFocusable'
import {updateSelectionOnFocus} from './selection'

function focus(element: Element) {
  if (!isFocusable(element)) return

  const isAlreadyActive = getActiveElement(element.ownerDocument) === element
  if (isAlreadyActive) return

  eventWrapper(() => element.focus())

  updateSelectionOnFocus(element)
}

export {focus}
