import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const useLocationBlocker = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const getLocationId = ({ pathname, search, hash }) => {
		return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
	};

	useEffect(() => {
		const unblock = navigate((to) => {
			if (to.pathname !== location.pathname) {
				return getLocationId(to) === getLocationId(location);
			}
			return false;
		});

		return unblock;
	}, [navigate, location]);

	return null; // Return null as this is a hook
};

export default useLocationBlocker;
