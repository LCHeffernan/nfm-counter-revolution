import React, { useState } from "react";
import PropTypes from "prop-types";
import Disc from "./Disc";

const DiscController = ({
  incrementIndex,
  figures,
  index,
  baseAnimationDurationMs,
  startAppIdleTimer,
  isAppIdle,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    incrementIndex();
    setIsButtonDisabled(true);
    startAppIdleTimer();
  };
  return (
    <div className="disc-controller" data-testid="revolver">
      <Disc
        isAppIdle={isAppIdle}
        figures={figures}
        setIsButtonDisabled={setIsButtonDisabled}
        index={index}
        baseAnimationDurationMs={baseAnimationDurationMs}
      />
      <button
        className="disc-controller__button"
        disabled={isButtonDisabled}
        onClick={handleClick}
        type="button"
      >
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M4.98313549,11.0001422 C5.49589839,10.9914935 5.92501998,11.3703506 5.99116425,11.8666444 L5.99985778,11.9831355 L6.00348884,12.2068855 C6.11245031,15.4321748 8.76323537,17.9999971 11.9999971,17.9999971 C12.1869612,17.9999971 12.3726725,17.9914753 12.5567465,17.9745765 L12.2928932,17.7071068 C11.9023689,17.3165825 11.9023689,16.6834175 12.2928932,16.2928932 C12.6834175,15.9023689 13.3165825,15.9023689 13.7071068,16.2928932 L15.7071068,18.2928932 C16.0976311,18.6834175 16.0976311,19.3165825 15.7071068,19.7071068 L13.7071068,21.7071068 C13.3165825,22.0976311 12.6834175,22.0976311 12.2928932,21.7071068 C11.9023689,21.3165825 11.9023689,20.6834175 12.2928932,20.2928932 L12.6111505,19.9769552 C12.4086045,19.9922816 12.2047796,19.9999971 11.9999971,19.9999971 C7.7687005,19.9999971 4.28886152,16.7094374 4.01666425,12.5105203 L4.00420123,12.2575143 L4.00014222,12.0168645 C3.9908282,11.4646583 4.43092928,11.0094562 4.98313549,11.0001422 Z M11.7071068,2.29289322 C12.0675907,2.65337718 12.0953203,3.22060824 11.7902954,3.61289944 L11.7071068,3.70710678 L11.3891629,4.0230186 C11.5916051,4.00770767 11.7953244,4 12,4 C16.418278,4 20,7.581722 20,12 C20,12.5522847 19.5522847,13 19,13 C18.4477153,13 18,12.5522847 18,12 C18,8.6862915 15.3137085,6 12,6 C11.8129339,6 11.6271216,6.00853145 11.4429483,6.02544919 L11.7071068,6.29289322 C12.0976311,6.68341751 12.0976311,7.31658249 11.7071068,7.70710678 C11.3466228,8.06759074 10.7793918,8.09532028 10.3871006,7.79029539 L10.2928932,7.70710678 L8.29289322,5.70710678 C7.93240926,5.34662282 7.90467972,4.77939176 8.20970461,4.38710056 L8.29289322,4.29289322 L10.2928932,2.29289322 C10.6834175,1.90236893 11.3165825,1.90236893 11.7071068,2.29289322 Z"
          />
        </svg>
      </button>
    </div>
  );
};

DiscController.propTypes = {
  index: PropTypes.number.isRequired,
  figures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      angle: PropTypes.number,
      text: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  incrementIndex: PropTypes.func.isRequired,
  baseAnimationDurationMs: PropTypes.number.isRequired,
  startAppIdleTimer: PropTypes.func.isRequired,
  isAppIdle: PropTypes.bool.isRequired,
};

export default DiscController;
