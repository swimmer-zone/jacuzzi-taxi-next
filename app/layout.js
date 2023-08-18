export const metadata = {
	title: 'Jacuzzi Taxi',
	description: 'De verhuurspecialist',
	themeColor: '#0b2e56'
}

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}

export default RootLayout;
