import React from 'react';
import image from '../images/avatar.png'


class Avatar extends React.Component{
    render() {
    const {avatar, onChangeAvatar} = this.props;
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
              onChange={onChangeAvatar}
            />
            <label 
            htmlFor="avatar"
            className="custom-file-label"
            >Choose avatar</label>
          </div>
          </div>
</div>
</div>

)
}
};

export default Avatar;