import PostsList from "./PostsList"
import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter"
import TodosList from "./TodosList"
// import withFetch from "./withFetch"

// props passed into these components won't work because the props are passed
// in the HOC rather than its individual component props
function HigherOrderComponentApp() {
  // const NewComponent = withFetch(PostsList);
  return (
    <div>
        <ClickCounter name="Jason" />
        <HoverCounter />
        {/* <NewComponent /> */}
        <PostsList />
        <TodosList />
    </div>
  )
}

export default HigherOrderComponentApp