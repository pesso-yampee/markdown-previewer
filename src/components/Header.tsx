import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import '../css/header.css';

type Props = {
	text: string;
};
export function Header({ text }: Props): JSX.Element {
	return (
		<header className="header">
			<div className="inner">
				<div className="logo">
					<FontAwesomeIcon icon={faFire} size="1x" />
					<span className="name">{text}</span>
				</div>
				<Button />
			</div>
		</header>
	);
}
