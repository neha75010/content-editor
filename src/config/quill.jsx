export default {
	theme: "snow",
	placeholder: 'Compose an epic...',
	modules: {
		toolbar: [
			[{ 'header': 1 }, { 'header': 2 }, { 'size': [] }, { 'font': [] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ 'color': [] }, { 'background': [] }],
			[{ 'align': [] }, { 'indent': '-1'}, { 'indent': '+1' }],
			[{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
			['link', 'image', 'video', 'formula']
		]
	}
}