import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: "200px",
        color: "rgba(0, 204, 34, 1)",

        "& .MuiSlider-thumb": {
          width: 18,
          height: 18,
          backgroundColor: "#fff",
          border: "1px solid rgba(0, 204, 34, 1)",
          boxShadow: "none",
        },

        "& .MuiSlider-thumb:hover, & .MuiSlider-thumb.Mui-focusVisible": {
          boxShadow: "none",
        },

        "& .MuiSlider-thumb::before": {
          content: '""',
          position: "absolute",
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 204, 34, 1)",
          boxShadow: "none",
        },
        "& .MuiSlider-track": {
          backgroundColor: "rgba(0, 204, 34, 1)",
          height: 4,
        },

        "& .MuiSlider-rail": {
          backgroundColor: "rgba(139, 139, 139, 1)",
          border: "1px solid rgba(139, 139, 139, 1)",
          height: 4,
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
