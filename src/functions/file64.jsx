const file64 = (e, c) => {
	var reader = new FileReader();
	reader.readAsDataURL(e.target.files[0]);
	reader.onload = () => c(reader.result);
	reader.onerror = (error) => console.log('Error: ', error);
}
export default file64;