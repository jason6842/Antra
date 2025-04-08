import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter"

// props passed into these components won't work because the props are passed
// in the HOC rather than its individual component props
function HigherOrderComponentApp() {
  return (
    <div>
        <ClickCounter name="Jason" />
        <HoverCounter />
    </div>
  )
}

export default HigherOrderComponentApp