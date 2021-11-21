window.addEventListener('message', function (event) {
  if (event.origin !== 'https://giscus.app') return;
  if (!(typeof event.data === 'object' && event.data.giscus)) return;
  const giscusData = event.data.giscus;
	if ('discussion' in giscusData) {
		let comments = giscusData.discussion.totalCommentCount;
		let commentCount = "&middot; " + comments + " comments";
		document.querySelector("header div span").innerHTML = (commentCount);
	}
});
