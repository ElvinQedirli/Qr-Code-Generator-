import React from 'react';



const ImagePicker = ({ onImageSelect }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file"  accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImagePicker;
