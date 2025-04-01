// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: Mar 31, 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateVolumeOfPyramid() {
  // input
  const lengthOfPyramid = parseInt(
    document.getElementById("length-of-pyramid").value
  )
    const widthOfPyramid = parseInt(
    document.getElementById("width-of-pyramid").value
  )
  const heightOfPyramid = parseInt(
    document.getElementById("height-of-pyramid").value
  )

  // process
  const volumeOfPyramid = (lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3

  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volumeOfPyramid + " mm³"
}
