export default function Conditional({ showWhen, children }) {
	if (showWhen) return <>{children}</>
	return <></>
}
