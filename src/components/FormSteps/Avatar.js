import React from 'react';
import image from '../../images/avatar.png'


const Avatar = props => {
  const { avatar, errors, onChange } = props;
  const onChangeAvatar = e => {
    const reader = new FileReader()
    reader.onload = e => {
      onChange({
        target: {
          name: "avatar",
          value: e.target.result,
        },
      })
    }
   reader.readAsDataURL(e.target.files[0]);
  }

    return(
       <div>

      <div className="custom-file">
      <img className="img" width="100%" src={avatar === "" ? image : avatar}  alt={"avatar"} />
      <div className="mb-4">
        <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="avatar"
              name ="avatar"
              onChange={onChangeAvatar}
            />
            <label 
            htmlFor="avatar"
            className="custom-file-label"
            >Choose avatar</label>
          </div>
          {errors.avatar ? (
                      <div className="invalid-feedback">
                        {errors.avatar}
                      </div>
                    ) : null}
          </div>
</div>
</div>
)
  };

export default Avatar;