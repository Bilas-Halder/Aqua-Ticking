import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// implemented from stackover flow for top scrolling every time route change
const ScrollToTop = ({ history }) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}
export default withRouter(ScrollToTop);