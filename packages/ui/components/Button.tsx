type Props = {
	children?: React.ReactNode;
	onClick?: () => void;
};

const Button = (props: Props) => (
	<button style={styles.button} onClick={props.onClick}>
		{props.children}
	</button>
);

const styles = {
	button: {
		padding: '8px 16px',
		backgroundColor: '#0070f3',
		color: '#fff',
		border: 'none',
		borderRadius: '4px',
		cursor: 'pointer',
	} as React.CSSProperties,
};

export default Button;
