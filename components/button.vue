<template>
    <button
      :class="getClasses (color, fromColor, toColor, fullWidth, fullHeight, colorNum, outlineNum, depressed, shadowSize, shadowColorNum, shadowColor, roundedRadius)"
    >
      <slot />
    </button>
  </template>
  <script setup>
    defineProps ({
      color: {
        type: String,
        default: "",
      },
      fromColor: {
        type: String,
        default: ""
      },
      toColor: {
        type: String,
        detaule: ""
      },
      fullWidth: {
        default: false,
      },
      fullHeight: {
        default: ''
      },
      colorNum: {
      },
      outlineNum: {
        default: ''
      },
      depressed: {
        default: ''
      },
      shadowSize: {
        default: ''
      },
      shadowColor: {
        default: ''
      },
      shadowColorNum: {
        default:''
      },
      roundedRadius: {

      }
    });
function getClasses (color, fromColor, toColor, fullWidth, fullHeight, colorNum, outlineNum, depressed, shadowSize, shadowColorNum, shadowColor, roundedRadius){
        let fullWidthValue, fullHeightValue, depressButton;
        // Setting the button variant and color
        if(depressed === "normal"){
          depressButton = `bg-gray-100 hover:bg-${color}-${colorNum} shadow-${shadowSize} shadow-${shadowColor}-${shadowColorNum}/50 rounded-${roundedRadius}`
        }else if (depressed==="primary") {
          depressButton = `bg-blue-500 hover:bg-${color}-${colorNum} drop-shadow-${shadowSize} shadow-${shadowSize} shadow-${shadowColor}-${shadowColorNum}/50`
        }else if(depressed === "error") {
          depressButton = `bg-red-500`
        }else if(depressed === "disabled") {
          depressButton = `bg-gray-300`
        }else if(depressed === "gradient") {
          depressButton = `bg-gradient-to-r from-${fromColor}-${colorNum} to-${toColor}-${colorNum} hover:bg-${color}-${colorNum} drop-shadow-${shadowSize} shadow-${shadowSize} shadow-${shadowColor}-${shadowColorNum}/50`;
        }else if(depressed === "outline") {
          depressButton = `outline outline-offset-${outlineNum} bg-blue-500 hover:bg-${color}-${colorNum} drop-shadow-${shadowSize} shadow-${shadowSize} shadow-${shadowColor}-${shadowColorNum}/50`
        }else {
          depressButton = `bg-${color}-${colorNum}`;
        }
        fullWidthValue = fullWidth ? `w-${fullWidth}` : null;
        fullHeightValue = fullHeight ? `h-${fullHeight}` : null;
        return `${fullWidthValue} ${fullHeightValue} ${depressButton}`;
      };
  </script>