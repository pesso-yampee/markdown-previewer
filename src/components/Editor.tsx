import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Header } from './Header';
import { convertMarkdown } from '../redux/convertorSlice';
import type { RootState, AppDispatch } from '../redux/store';
import '../css/editor.css';

export function Editor() {
	const text = useSelector((state: RootState) => state.convert.inputText);
	const dispatch: AppDispatch = useDispatch();
	return (
		<>
			<div id="editor" className="container">
				<Header text="Editor" />
				<textarea
					name=""
					id="editor"
					className="textarea"
					value={text}
					onChange={(e) => dispatch(convertMarkdown(e.target.value))}
				/>
			</div>
		</>
	);
}
