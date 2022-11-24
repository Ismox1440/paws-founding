import React, { useState } from "react";
import { PuffLoader } from "react-spinners";
import { uploadImage } from "../../../utils";


const UploadImage = ({ image, setImage }) => {
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    setLoading(true);
    const { image } = await uploadImage("preset_posts", e.target.files[0]);
    setImage(image);
    setLoading(false);
  };

  const resetImage = () => setImage(false);

  return (
    <div className="grid grid-cols-1 space-y-2">
      <label className="text-sm font-bold text-[#979b9c] tracking-wide">
        Upload image
      </label>
      {image && (
        <button
          type="button"
          onClick={resetImage}
          className="text-blue-400 w-fit px-2  mx-auto border border-[#FAF2E7] rounded-xl hover:border-blue-100"
        >
          reset
        </button>
      )}
      <div className="flex items-center justify-center w-full">
        {image ? (
          <img alt="uplouted" src={image} />
        ) : loading ? (
          <PuffLoader color="#462312" loading size={240} />
        ) : (
          <label
            draggable="true"
            className="flex flex-col rounded-lg border-[#d7dadb] border-4 border-dashed w-full h-60 p-10 group text-center cursor-pointer"
          >
            <div className="h-full w-full text-center flex flex-col items-center justify-center">
              <div className="flex flex-auto max-h-48 w-2/5 mx-auto ">
                <img
                  className="has-mask h-36 object-center"
                  src="https://i.pinimg.com/originals/00/65/ee/0065ee133294c73fe29dbab81dc6acc9.png"
                  alt="freepik"
                />
              </div>
              <p className="pointer-none text-[#b2b3b4]">
                      <p
                        className="text-[#979b9c] font-bold"
                      >
                        select a file
                      </p>{" "}
                      from your computer
              </p>
            </div>
            <input
              onChange={handleChange}
              accept="image/*"
              multiple
              draggable
              type="file"
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
