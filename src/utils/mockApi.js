export const mockApiCall = () => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 1000) + 1000;

		setTimeout(() => {
			const shouldFail = Math.random() < 0.2;

			if (shouldFail) {
				reject("API Failed");
			} else {
				resolve("Success");
			}
		}, delay);
	});
};
