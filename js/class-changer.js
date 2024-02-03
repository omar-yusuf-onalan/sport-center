let yogaButton = document.querySelector("#yoga-button");
let groupButton = document.querySelector("#group-button");
let soloButton = document.querySelector("#solo-button");
let stretchingButton = document.querySelector("#stretching-button");

yogaButton.addEventListener("click", loadYogaClass);
groupButton.addEventListener("click", loadGroupClass);
soloButton.addEventListener("click", loadSoloClass);
stretchingButton.addEventListener("click", loadStretchingClass);

let changingClassDomElement = document.querySelector("#changing-class");

function loadYogaClass() {
    changingClassDomElement.innerHTML = `
    <div id="changing-class" class="changing-class">
    <div class="class-description">
        <h3>Why are your Yoga</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima amet, illo modi eius totam
            explicabo nulla facilis officiis, doloremque nam blanditiis alias id culpa dicta necessitatibus, qui
            error. Corrupti?
        </p>
        
        <h3>When comes Yoga Your Time</h3>
        <h4>Saturday-Sunday: 8:00am - 10:00am</h4>
        <h4>Monday-Tuesday: 10:00am - 12:00pm</h4>
        <h4>Wednesday-Friday: 3:00pm - 6:00pm</h4>

    </div>
    <div class="image-div"><img src="assets/yoga.jpg" alt="Yoga"></div>
    
</div>`;
}

function loadGroupClass() {
    changingClassDomElement.innerHTML = `
    <div id="changing-class" class="changing-class">
    <div class="class-description">
        <h3>Why are your Group</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima amet, illo modi eius totam
            explicabo nulla facilis officiis, doloremque nam blanditiis alias id culpa dicta necessitatibus, qui
            error. Corrupti?
        </p>
        
        <h3>When comes Group Your Time</h3>
        <h4>Saturday-Sunday: 8:00am - 10:00am</h4>
        <h4>Monday-Tuesday: 10:00am - 12:00pm</h4>
        <h4>Wednesday-Friday: 3:00pm - 6:00pm</h4>

    </div>
    <div class="image-div"><img src="assets/group.webp" alt="Group"></div>
    
</div>`;
}

function loadSoloClass() {
    changingClassDomElement.innerHTML = `
    <div id="changing-class" class="changing-class">
    <div class="class-description">
        <h3>Why are your Solo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima amet, illo modi eius totam
            explicabo nulla facilis officiis, doloremque nam blanditiis alias id culpa dicta necessitatibus, qui
            error. Corrupti?
        </p>
        
        <h3>When comes Solo Your Time</h3>
        <h4>Saturday-Sunday: 8:00am - 10:00am</h4>
        <h4>Monday-Tuesday: 10:00am - 12:00pm</h4>
        <h4>Wednesday-Friday: 3:00pm - 6:00pm</h4>

    </div>
    <div class="image-div"><img src="assets/solo.jpg" alt="Solo"></div>
    
</div>`;
}

function loadStretchingClass() {
    changingClassDomElement.innerHTML = `
    <div id="changing-class" class="changing-class">
    <div class="class-description">
        <h3>Why are your Stretching</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima amet, illo modi eius totam
            explicabo nulla facilis officiis, doloremque nam blanditiis alias id culpa dicta necessitatibus, qui
            error. Corrupti?
        </p>
        
        <h3>When comes Stretching Your Time</h3>
        <h4>Saturday-Sunday: 8:00am - 10:00am</h4>
        <h4>Monday-Tuesday: 10:00am - 12:00pm</h4>
        <h4>Wednesday-Friday: 3:00pm - 6:00pm</h4>

    </div>
    <div class="image-div"><img src="assets/stret.webp" alt="Stretching"></div>
    
</div>`;
}
