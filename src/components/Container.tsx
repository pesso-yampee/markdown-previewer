import { Editor } from './Editor';
import { Previewer } from './Previewer';

export function Container() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
				paddingTop: '20px',
				backgroundColor: '#87B5B5',
				minHeight: '100vh'
			}}>
			<Editor />
			<Previewer />
		</div>
	);
}
