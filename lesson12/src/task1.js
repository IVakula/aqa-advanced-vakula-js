console.log('Start..');

function delayedPrint(text, mls) {
	setTimeout(
		function () {
			console.log(text)
		},
		mls,
		text,
	)
}

delayedPrint('Task1', 2000);
