import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { Header } from './Header';
import { marked } from 'marked';
import '../css/previewer.css';

export function Previewer() {
	const inputText = useSelector((state: RootState) => state.convert.inputText);
	const convertMarkup = (text: string) => {
		const markup = marked(text);
		return { __html: markup };
	};
	return (
		<div id="preview" className="preview">
			<Header text="Previewer" />
			<div className="contents">
				<div dangerouslySetInnerHTML={convertMarkup(inputText)}></div>
			</div>
		</div>
	);
}
