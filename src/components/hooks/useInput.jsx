import { useState } from 'react';

const useInput = (initValue) => {
	const [value, setValue] = useState(initValue);

	const onChange = (e) => setValue(e.target.value);

	const bind = {
		value,
		onChange,
	};

	return [value, bind];
};

export default useInput;
