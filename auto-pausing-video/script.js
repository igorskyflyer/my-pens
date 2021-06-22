if('IntersectionObserver' in window) {
	const video = document.querySelector('video');
	let observer = new IntersectionObserver((entries, observer) => {
		if(entries.length === 0) {
			console.error('No IntersectionObserver entries were passed.');
			return;
		}

		const entry = entries[0];

		if(!entry.isIntersecting && !video.paused) {
			video.pause();
		}
		else
		if(video.paused) {
			video.play();
		}
	}, { threshold: 1 });

	observer.observe(video);
}
else {
	alert('Hey mate, your browser is outdated, install the latest Chrome so you can see this demo in action :D');
}
