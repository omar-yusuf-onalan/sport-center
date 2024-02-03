let yourHeight = document.querySelector("#your-height");
let yourWeight = document.querySelector("#your-weight");
let orangeArrow = document.querySelector(".orange-arrow")

yourHeight.addEventListener("input", manipulateOrangeArrow);
yourWeight.addEventListener("input", manipulateOrangeArrow);

const BMIValueToPassEachSection = 5;
const pixelLengthOfEachSection = 90;
const orangeArrowTravelDistanceMultiplier = 90 / 5;
const lowestBMI = 13.50;

function manipulateOrangeArrow() {
    let height = yourHeight.value;
    let weight = yourWeight.value;

    let invalidInput = !(height.length > 0 && weight.length > 0);

    if (invalidInput) {
        return;
    }

    let bmi = Number(weight) / Math.pow((Number(height) / 100), 2);
    
    console.log(bmi);

    orangeArrow.style.marginLeft = `${38 + Number(bmi - lowestBMI) * Number(orangeArrowTravelDistanceMultiplier)}px`;
}
