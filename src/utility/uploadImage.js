export default function uploadImage(e, image, setImage) {
  if (e.target.files[0]) {
    setImage(e.target.files[0]);
  } else {
    setImage(image);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setImage(reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
}
