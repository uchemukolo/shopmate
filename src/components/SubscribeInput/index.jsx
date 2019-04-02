import React from "react";

import "./subscribeInput.scss";

const SubscribeInput = () => (
<div className="subscribe">
<i className="far fa-envelope"></i>
    <input type="email" class="subscribe__e-mail" placeholder="Your e-mail here"/>
  </div>
);

export default SubscribeInput;