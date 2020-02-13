import React from 'react';
import image from '../../images/avatar.png'


class Avatar extends React.Component{

  onChangeAvatar = event => {
    // console.log(event.target.files);
    const reader = new FileReader();
    reader.onload = event => {
      // console.log(event.target.result);
    
    };

    reader.readAsDataURL(event.target.files[0]);
  };
    render() {
    const { avatar, errors, updateValue } = this.props;
    console.log(this);
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
              onChange={this.onChangeAvatar(updateValue)}
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
}
};

export default Avatar;