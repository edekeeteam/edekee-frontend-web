function showTag(time, jsonArray) {
  // console.log("onPause");
  // this.setState({ playing: false });
  const newLabels = JSON.parse(jsonArray);
  console.log(newLabels.label);
  console.log(time);
  const currentTime = Math.round((time * 1000) / 500) * 500;
  console.log(currentTime);

  // let currentTime = Math.ceil(this.player.getCurrentTime() * 1000);
  // let currentTime = Math.ceil(this.player.getCurrentTime()) * 1000;
  const labelsObj = newLabels.label;
  // console.log(labelsObj);
  // console.log(labelsObj[0].miliseconds);
  // console.log(tm);

  const allTags = labelsObj.filter((label) => label.milliseconds === currentTime);

  // labelsObj.map((lab) => {
  //   console.log(Math.round(lab.milliseconds / 1000) * 1000);
  // });
  // const allTags = labelsObj.filter((label) => Math.round(label.millisecond / 1000) === 200);
  //   label.confidence === 36.597;
  //   if (label.miliseconds === currentTime) {
  //     return label;
  //   }
  return allTags;
  //   console.log(allTags);
  //   setTagArray(allTags);
}
export default showTag;

// const getCoordinates = (bbh, bbw, bbl, bbt, vw, vh) => {
//   const bbhInt = parseFloat(bbh);
//   const bbwInt = parseFloat(bbw);
//   const bblInt = parseFloat(bbl);
//   const bbtInt = parseFloat(bbt);

//   const xCoordinate = bblInt * vw + (bbwInt * vw) / 2;
//   const yCoordinate = bbtInt * vh + (bbhInt * vh) / 2;
//   // let adjustedWidth = (20 / vw) * 100;
//   // let adjustedHeight = (20 / vh) * 100;

//   // const x = bbl * 100;
//   // const y = bbt * 100;
//   const x = (xCoordinate / vw) * 100;
//   const y = (yCoordinate / vh) * 100;
//   // console.log(x, y);

//   // let x = bbl * 100;
//   // let y = bbt * 100;

//   return { x, y };
//   // return { x: x.toString(), y: y.toString() };
//   // return <Tag leftPos="50" topPos="70" title="shirt" price="500" />;
// }; // };
