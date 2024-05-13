export default function SocketProvider ({ children }) {
	return <SocketProvider.Provider>
		{children}
	</SocketProvider.Provider>
}