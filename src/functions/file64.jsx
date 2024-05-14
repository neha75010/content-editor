const file64 = e => {
	var reader = new FileReader();
	reader.readAsDataURL(e.target.files[0]);
	reader.onload = () => setVl(reader.result);
	reader.onerror = (error) => console.log('Error: ', error);
}
export default file64;